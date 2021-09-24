import StyledDiv from "../styled/Div/StyledDiv";

const IncomeBreakDown = (props) => {
  return (
    <StyledDiv>
      <h3>Your income:</h3>
      <div className="row">
        <div className="col-md-3">per hour: {props.income || 0}</div>
        <div className="col-md-3">per week: {props.income * 40 || 0}</div>
        <div className="col-md-3">per month: {props.income * 40 * 4 || 0}</div>
        <div className="col-md-3">per year: {props.income * 40 * 52 || 0}</div>
      </div>
    </StyledDiv>
  );
}

export default IncomeBreakDown;