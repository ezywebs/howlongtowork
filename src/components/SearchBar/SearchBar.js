import styled from 'styled-components';
const StyledSearchBarContainer = styled.div`
  margin-top: 10px;
  margin-bottom:20px;
  input, input:focus-visible{
    background-color: #ecf0f1;
    border: none;
    border-bottom: 1.5px dotted grey;
  }
`;

const SearchBar = (props) => {
  return (
    <StyledSearchBarContainer>
      <label>Find by name:</label>
      <input type="search" value={props.name} onChange={props.handleChange} />
    </StyledSearchBarContainer>
  );
}
export default SearchBar;