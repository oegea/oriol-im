import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Nav />
        {/*<Description>{state.frontity.description}</Description>*/}
        
      </Container>
      <MobileMenu />
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
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 16px;
`;

/*const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;*/

const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: flex-start;
`;
