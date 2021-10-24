import styled from 'styled-components';

const SORT_BAR_VALUES = {
  WATCHERS: 'watchers_count',
  FORKS: 'forks_count',
  OPEN_ISSUES: 'open_issues_count'
};

const SORT_BAR_OPTIONS = [
  { value: SORT_BAR_VALUES.WATCHERS, label: 'Watchers' },
  { value: SORT_BAR_VALUES.FORKS, label: 'Forks' },
  { value: SORT_BAR_VALUES.OPEN_ISSUES, label: 'Open Issues' },
]

const StyledSelect = styled.select`
  height: 100%;
  border-radius: 0 2px 2px 0;
`;
const Wrapper = styled.div`
  margin-left: 10px;
`;

const SortBar = ({
  onSortChange, sortValue
}) => {
  const onSelectChange = (e) => onSortChange(e.target.value);
  return <Wrapper>
    Sort By:
    <StyledSelect name="sortBy" value={sortValue} onChange={onSelectChange}>
      {SORT_BAR_OPTIONS.map(({ value, label }) =>
        <option key={value} value={value}>{label}</option>)}
    </StyledSelect>
  </Wrapper>
};
export { SORT_BAR_VALUES };

export default SortBar;
