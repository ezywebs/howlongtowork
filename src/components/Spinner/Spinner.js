import styled from 'styled-components';

const StyledSpinner = styled.div`
  width: 3rem; 
  height: 3rem;
`;

const Spinner = () => {
  return (
    <StyledSpinner className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </StyledSpinner>
  );
}

export default Spinner;