import styled from 'styled-components';
import SortBar from './SortBar';

const SearchBoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 60%;
  height: 30px;
  border: 2px solid #C5C5C5;
  border-radius: 5px 0 0 5px;
  font-size: 20px;
  text-align: center;
`;

const SearchBox = ({
  searchValue, onInputChange, onButtonClick, sortValue, onSortChange
}) => {
  const onChange = (e) => onInputChange(e.target.value);
  return <SearchBoxContainer>
    <SearchInput type="text" placeholder="Enter a Github organizaiton name..." value={searchValue} onChange={onChange} />
    <button onClick={onButtonClick}>Search</button>
    <SortBar sortValue={sortValue} onSortChange={onSortChange} />
  </SearchBoxContainer>
};

export default SearchBox;
