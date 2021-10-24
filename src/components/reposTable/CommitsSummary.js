import styled from 'styled-components';

const StyledCommitContainer = styled.ul`
  border: 1px solid gray;
  background: rgba(100,100,100, .1);
  padding: 20px;
  margin-top: 0px;
`

const StyledCommit = styled.li`
  list-style: none;

  div {
    display: inline-block;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;


const CommitsSummary = ({
  commits
}) => {

  return <StyledCommitContainer>
    {commits.map(({ sha, author, commit, html_url }) =>
      <StyledCommit
        key={sha}
      ><div>
          <a href={html_url}>{sha}</a> {commit.message}
        </div>
      </StyledCommit>)}
  </StyledCommitContainer>
};

export default CommitsSummary;
