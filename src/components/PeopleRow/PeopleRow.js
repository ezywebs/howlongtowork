import PersonCard from "../PersonCard";
import StyledDiv from "../styled/Div/StyledDiv";

const PeopleRow = (props) => {
  const cards = props.people.map((person, i) => {
    return <div className="col-md-3 col-6" key={i}><PersonCard person={person} handleClick={props.handleClick} selected={person.name === props.targetPerson.name ? true : false}/></div>
  });

  return (
    <StyledDiv className="row">
      {cards}
    </StyledDiv>
  );
}

export default PeopleRow;