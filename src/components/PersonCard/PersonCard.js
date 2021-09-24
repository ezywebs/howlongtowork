import styled from 'styled-components';
import Badge from '../Badge/Badge';

const StyledPersonCard = styled.div`
  cursor: pointer;
  border-bottom: 2px solid #333;
  padding: 10px;
  :hover{
    font-weight: bold;
    img{
      box-shadow: 0 0 20px 2px;
      box-shadow-color: #364350;
      width: 100%;
      animation-duration: 1s;
      animation-name: slidein;
      margin-bottom: 0;
    }
  }
  img{
    width: ${props => props.selected ? "100%" : "99%"};
    border-radius: 50%;
    margin-bottom:${props => props.selected ? "0" : "1%"};;
    box-shadow: ${props => props.selected ? "0 0 10px 1px #3498db" : "none"};
  }
  h3{
    margin-top: 10px;
    font-size: 1rem;
  }
  .net-worth{
    font-weight: ${props => props.selected ? "bold" : "none"};
  }
  .company>span{
    background-color: #34495e;
    margin-right: 2px;
  }
`;

const PersonCard = (props) => {
  return (
    <StyledPersonCard onClick={props.handleClick} id={props.id} selected={props.selected}>
      <img src={props.person.img} alt={props.person.name} />
      <h3 className="person-name">{props.person.name}</h3>
      <span>$ <span className="net-worth">{parseInt(props.person.netWorth)}</span> M</span>
      <div className="company">{props.person.source.split(",").map((e, i) => <Badge text={e} key={i} />)}</div>
      {props.person.industries.map((e, i) => <Badge text={e} key={i} />)}
    </StyledPersonCard>
  );
}

export default PersonCard;