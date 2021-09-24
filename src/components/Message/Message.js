import styled from 'styled-components';
import StyledDiv from "../styled/Div/StyledDiv";
import { boolFromNum, styleNumberByThousands } from "../../utils";

const StyledMessageDiv = styled(StyledDiv)`
  font-size: 1.25em;
  .date{
    color: #d35400;
  }
  .person-name{
    font-style: italic;
  }
`;

const Message = (props) => {
  const [years, months, weeks, days] = props.periods;
  return ( 
    <StyledMessageDiv>
      You need to work for 
      {boolFromNum(years) && <span className="date"> {styleNumberByThousands(years)} year{years == 1 ? "" : "s"}</span>}
      {boolFromNum(months) && <span className="date"> {months} month{months == 1 ? "" : "s"}</span>}
      {boolFromNum(weeks) && <span className="date"> {weeks} week{weeks == 1 ? "" : "s"}</span>}
      {boolFromNum(days) && <span className="date"> {days} day{days == 1 ? "" : "s"}</span>}
      <span> to earn as much as </span>
      <span className="person-name"> {props.name} </span> 
      has at this moment
    </StyledMessageDiv>
  );
}

export default Message;