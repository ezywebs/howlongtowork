import styled from "styled-components";
import PropTypes from "prop-types";
import StyledDiv from "../styled/Div/StyledDiv";
import { boolFromNum, styleNumberByThousands } from "../../utils";

const StyledMessageDiv = styled(StyledDiv)`
  font-size: 1.25em;
  .date {
    color: #d35400;
  }
  .person-name {
    font-style: italic;
  }
`;

const Message = ({ periods, name }) => {
  const [years, months, weeks, days] = periods;
  return (
    <StyledMessageDiv>
      You need to work for
      {boolFromNum(years) && (
        <span className="date">
          {" "}
          {styleNumberByThousands(years)} year{years == 1 ? "" : "s"}
        </span>
      )}
      {boolFromNum(months) && (
        <span className="date">
          {" "}
          {months} month{months == 1 ? "" : "s"}
        </span>
      )}
      {boolFromNum(weeks) && (
        <span className="date">
          {" "}
          {weeks} week{weeks == 1 ? "" : "s"}
        </span>
      )}
      {boolFromNum(days) && (
        <span className="date">
          {" "}
          {days} day{days == 1 ? "" : "s"}
        </span>
      )}
      <span> to earn as much as </span>
      <span className="person-name"> {name} </span>
      has at this moment
    </StyledMessageDiv>
  );
};

Message.propTypes = {
  periods: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Message;
