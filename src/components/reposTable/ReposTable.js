import { useState } from 'react';
import styled from 'styled-components';
import CommitsSummary from './CommitsSummary';
import ReposStatsBox from './RepoStatsBox';

const RowWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5px;
  cursor: pointer;
`;

const NameContainer = styled.span`
  width: 25%;
`;
const DescriptionBox = styled.div`
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 50%;
`

const ReposTable = ({
  repos, searchCommits, commits
}) => {
  const [activeRepoId, setActiveRepoId] = useState(-1);

  const onRepoClick = (commitsUrl, id) => {
    if (activeRepoId !== id) {
      searchCommits(commitsUrl);
      setActiveRepoId(id);
    } else {
      setActiveRepoId(-1);
    }
  }

  return <>
    {repos.map(({ id, name, forks_count, watchers_count, open_issues_count, commits_url, svn_url, description }) =>
      <div>
        <RowWrapper
          key={id}
          onClick={() => onRepoClick(commits_url, id)}
        ><NameContainer><a href={svn_url}>{name}</a></NameContainer>
          <DescriptionBox>{description}</DescriptionBox>
          <ReposStatsBox
            forksCount={forks_count}
            watchersCount={watchers_count}
            openIssuesCount={open_issues_count} />
        </RowWrapper>
        {activeRepoId === id && <CommitsSummary commits={commits} />}
      </div>)}
  </>
};

export default ReposTable;
