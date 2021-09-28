import styled from "styled-components";

const StyledSelect = styled.select`
  background-color: #ecf0f1;
  text-align: right;
  border: 1px solid grey;
  border-radius: 5px;
`;

const CurrencySelect = (props) => {
  return (
    <StyledSelect className="custom-select" onChange={props.handleChange}>
      {Object.keys(props.currencies).map((c) => (
        <option value={c} selected={c === props.currencyCode ? true : false}>
          {c.toUpperCase()}
        </option>
      ))}
    </StyledSelect>
  );
};

export default CurrencySelect;
