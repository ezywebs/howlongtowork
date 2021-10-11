import PropTypes from "prop-types";
import IncomeBreakDown from "../../components/IncomeBreakDown";
import {
  HOURS_IN_DAY,
  HOURS_IN_WEEK,
  HOURS_IN_YEAR,
  MONTHS_IN_YEAR,
} from "../../constants";
import { formatFloat } from "../../utils";

const IncomeBreakDownContainer = ({ income, currencyRate }) => {
  const incomeToUsd = income / currencyRate;
  return (
    <IncomeBreakDown
      income={{
        daily: formatFloat(incomeToUsd * HOURS_IN_DAY) || 0,
        weekly: formatFloat(incomeToUsd * HOURS_IN_WEEK) || 0,
        monthly:
          formatFloat((incomeToUsd * HOURS_IN_YEAR) / MONTHS_IN_YEAR) || 0,
        yearly: formatFloat(incomeToUsd * HOURS_IN_YEAR) || 0,
      }}
    />
  );
};

IncomeBreakDownContainer.propTypes = {
  income: PropTypes.number.isRequired,
  currencyRate: PropTypes.number.isRequired,
};

export default IncomeBreakDownContainer;
