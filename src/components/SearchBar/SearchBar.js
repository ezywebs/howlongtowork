import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSearchBarContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  input,
  input:focus-visible {
    background-color: #ecf0f1;
    border: none;
    border-bottom: 1.5px dotted grey;
  }
`;

const SearchBar = ({ name, handleChange }) => {
  return (
    <StyledSearchBarContainer>
      <label>Find by name:</label>
      <input type="search" value={name} onChange={handleChange} />
    </StyledSearchBarContainer>
  );
};

SearchBar.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
