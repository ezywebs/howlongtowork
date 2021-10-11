import PropTypes from "prop-types";
import PeopleRow from "../../components/PeopleRow";
import Spinner from "../../components/Spinner";
import StyledDiv from "../../components/styled/Div/StyledDiv";
import { MAX_PEOPLE_IN_ROW } from "../../constants";

const PeopleRowContainer = (props) => {
  const { searchName, isLoading, people } = props;
  const getDisplayPeople = !searchName
    ? people
    : people.filter((p) =>
        p.name.toLowerCase().includes(searchName.toLowerCase())
      );
  return (
    (isLoading && <Spinner />) ||
    (getDisplayPeople.length > 0 ? (
      <PeopleRow
        {...props}
        people={getDisplayPeople.slice(0, MAX_PEOPLE_IN_ROW)}
      />
    ) : (
      <StyledDiv>No wealthy people found</StyledDiv>
    ))
  );
};

PeopleRowContainer.PropTypes = {
  searchName: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  people: PropTypes.array.isRequired,
};

export default PeopleRowContainer;
