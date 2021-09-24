import styled from 'styled-components';

const StickyFooter = styled.footer`
  //position: fixed;
  //left: 0;
  //bottom: 0;
  width: 100%;
  background-color: #95a5a6;
  color: white;
  text-align: center;
  line-height: 1.6em;
`;

const Footer = () => {
  return (
    <StickyFooter>
      <div>Created by Engineer80lvl</div>
    </StickyFooter>
  );
}

export default Footer;