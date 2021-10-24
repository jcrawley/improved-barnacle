import styled from 'styled-components';

const StatBoxWrapper = styled.div`
  display: flex;
  justify-content: fl
`;

const ReposStatsBox = (
  { forksCount, watchersCount, openIssuesCount }
) => {
  return <StatBoxWrapper> 🍴: {forksCount.toLocaleString()} 👀: {watchersCount.toLocaleString()} ❗: {openIssuesCount.toLocaleString()}</StatBoxWrapper>
}

export default ReposStatsBox;
