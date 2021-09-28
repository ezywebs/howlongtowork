import styled from "styled-components";
import CurrencySelect from "../CurrencySelect";
import StyledDiv from "../styled/Div/StyledDiv";
import { isEmptyObj } from "../../utils";

const StyledSliderDiv = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 100%;
    text-align: right;
    margin-bottom: 15px;
  }
`;

const StyledInputDiv = styled.div`
  input,
  input:focus-visible {
    width: 100%;
    text-align: right;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: #ecf0f1;
    font-size: 1.2em;
    color: #333;
  }
`;

const IncomeInput = (props) => {
  return (
    <StyledDiv>
      <h2>What is your hourly rate?</h2>
      <div className="d-flex flex-row align-items-center">
        <StyledSliderDiv className="col-md-8">
          <input
            type="range"
            value={props.income}
            onChange={props.handleChange}
            min="0"
            max="1000"
          />
        </StyledSliderDiv>
        <StyledInputDiv className="col-md-2 d-flex align-items-center justify-content-around">
          <input
            type="number"
            value={props.income}
            onChange={props.handleChange}
            min="0"
          />
        </StyledInputDiv>
        {(!isEmptyObj(props.currencies) && (
          <CurrencySelect
            className="col-md-2"
            currencyCode={props.currencyCode}
            currencies={props.currencies}
            handleChange={props.handleCurrencyChange}
          />
        )) ||
          "USD"}
      </div>
    </StyledDiv>
  );
};

export default IncomeInput;
