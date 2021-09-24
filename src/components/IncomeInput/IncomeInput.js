import styled from 'styled-components';
import StyledDiv from "../styled/Div/StyledDiv";

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
  input, input:focus-visible {
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
      <div className="row">
        <StyledSliderDiv className="col-md-9">
          <input type="range" value={props.income} onChange={props.handleChange} min="0" max="1000" />
        </StyledSliderDiv>
        <StyledInputDiv className="col-md-3">
          <input type="number" value={props.income} onChange={props.handleChange} min="0" />
        </StyledInputDiv>
      </div>
    </StyledDiv>
  );
}

export default IncomeInput;