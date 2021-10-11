import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSelect = styled.select`
  background-color: #ecf0f1;
  text-align: right;
  border: 1px solid grey;
  border-radius: 5px;
`;

const CurrencySelect = ({ currencies, currencyCode, handleChange }) => {
  return (
    <StyledSelect className="custom-select" onChange={handleChange}>
      {Object.keys(currencies).map((c) => (
        <option value={c} selected={c === currencyCode ? true : false}>
          {c.toUpperCase()}
        </option>
      ))}
    </StyledSelect>
  );
};

CurrencySelect.propTypes = {
  currencies: PropTypes.array.isRequired,
  currencyCode: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CurrencySelect;
