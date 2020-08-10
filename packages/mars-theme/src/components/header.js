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
          <Logo src="https://wp.oriol.im/wp-content/uploads/2020/05/logo.png" />
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

const Logo = styled.img`
  max-width: 50px;
  display: inline-block;
  border-radius: 15px;
  margin-right: 15px;
`;

const Title = styled.h1`
  display: inline-block;
  vertical-align: super;
  margin: 0;
`;

/*const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;*/

const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: flex-start;
`;
