import PeopleRow from "../../components/PeopleRow";
import Spinner from "../../components/Spinner";
import StyledDiv from "../../components/styled/Div/StyledDiv";
import { MAX_PEOPLE_IN_ROW } from '../../constants';


const PeopleRowContainer = (props) => {
  const getDisplayPeople = !props.searchName 
    ? props.people 
    : props.people.filter(p => p.name.toLowerCase().includes(props.searchName.toLowerCase()))
  return (
    (props.isLoading && <Spinner />) ||
    (getDisplayPeople.length > 0 
    ? <PeopleRow 
        {...props}
        people={
          getDisplayPeople
          .slice(0, MAX_PEOPLE_IN_ROW)
        }
      /> 
    : <StyledDiv>No wealthy people found</StyledDiv>)
  );
}

export default PeopleRowContainer;