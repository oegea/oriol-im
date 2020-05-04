import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        
        <Title>
            By Oriol Egea, 2016 - {new Date().getFullYear()}, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">
                (CC BY-SA 4.0)
            </a>
        </Title>
        
        <Legal><Link link="/aviso-legal">Un pequeño (pero necesario) aviso legal</Link></Legal>
        
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  padding-top: 15px;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top: 1px solid grey;
`;

const Title = styled.h5`
  margin: 0;
`;

const Legal = styled.div`
    font-size: 14px;
`;

/*const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;*/

const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: flex-start;
`;
