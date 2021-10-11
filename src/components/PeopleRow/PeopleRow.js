import PropTypes from "prop-types";
import PersonCard from "../PersonCard";
import StyledDiv from "../styled/Div/StyledDiv";

const PeopleRow = ({ people, targetPerson, handleClick }) => {
  const cards = people.map((person, i) => {
    return (
      <div className="col-md-3 col-6" key={i}>
        <PersonCard
          person={person}
          handleClick={handleClick}
          selected={person.name === targetPerson.name ? true : false}
        />
      </div>
    );
  });

  return <StyledDiv className="row">{cards}</StyledDiv>;
};

PeopleRow.propTypes = {
  people: PropTypes.array.isRequired,
  targetPerson: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PeopleRow;
