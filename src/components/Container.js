import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { SORT_BAR_VALUES } from './SortBar';
import SearchBox from "./SearchBox";
import ReposTable from './reposTable/ReposTable';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    width: 70%;
    padding: 50px;
    border: 2px solid black;
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 50px;
`;

const Container = () => {
  const [searchValue, setSearchValue] = useState('');
  const [organization, setOrganization] = useState({});
  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState([]);
  const [isErrorStateActive, setIsErrorStateActive] = useState(false);
  const [sortValue, setSortValue] = useState(SORT_BAR_VALUES.WATCHERS);
  const searchOrganizations = () => {
    axios.get(`https://api.github.com/orgs/${searchValue}`)
      .then(({ data }) => {
        setIsErrorStateActive(false);
        setOrganization(data);
      }).catch(response => {
        setIsErrorStateActive(true);
      });
  };

  const sortRepos = (repoValue) => {
    const reposCopy = [...(repoValue || repos)];
    reposCopy.sort((a, b) => a[sortValue] < b[sortValue] ? 1 : -1);
    setRepos(reposCopy);
  }

  useEffect(() => {
    searchRepositories();
  }, [organization]);


  useEffect(() => {
    sortRepos();
  }, [sortValue]);

  const searchRepositories = () => {
    const reposUrl = organization && organization.repos_url;
    if (reposUrl) {
      axios.get(`${reposUrl}`)
        .then(({ data }) => {
          sortRepos(data);
        });
    }
  };

  const searchCommits = (commitsUrl) => {
    setCommits([]);
    axios.get(`${commitsUrl.replace('{/sha}', '')}`)
      .then(({ data }) => {
        setCommits(data);
      });
  };

  return <Wrapper>
    <div>
      <SearchBox
        searchValue={searchValue}
        onInputChange={(newValue) => setSearchValue(newValue)}
        onButtonClick={searchOrganizations}
        sortValue={sortValue}
        onSortChange={(newValue) => setSortValue(newValue)} />
      {<ReposTable repos={repos} searchCommits={searchCommits} commits={commits} />}
      {isErrorStateActive && <ErrorMessage> Could not find the organization, please try again.... </ErrorMessage>}
    </div>
  </Wrapper>
};

export default Container;
