import StyledDiv from "../styled/Div/StyledDiv";
import PropTypes from "prop-types";

const IncomeBreakDown = ({ income }) => {
  return (
    <StyledDiv>
      <h3>Your income:</h3>
      <div className="row">
        <div className="col-md-3">per day: ${income.daily}</div>
        <div className="col-md-3">per week: ${income.weekly}</div>
        <div className="col-md-3">per month: ${income.monthly}</div>
        <div className="col-md-3">per year: ${income.yearly}</div>
      </div>
    </StyledDiv>
  );
};

IncomeBreakDown.propTypes = {
  income: PropTypes.object.isRequired,
};

export default IncomeBreakDown;
