import React from "react";
import { Box, Text, Heading, Image } from "gestalt";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box display="flex" alignItems="center" justifyContent="around" height={70} color="midnight" padding={1} shape="roundedBottom">
    <NavLink to="/signin">
      <Text size="xl" color="white">
        Sign In
      </Text>
    </NavLink>

    {/* Title and logo */}
    <NavLink activeClassName="active" to="/">
      <Box display="flex" alignItems="center">
        <Box height={50} width={50}>
          <Image alt="BrewHaha Logo" naturalHeight={1} naturalWidth={1} src="./icons/logo.svg" />
        </Box>

        <Heading size="xs" color="orange">
          Beers n Brews
        </Heading>
      </Box>
    </NavLink>
    <NavLink activeClassName="active" to="/signup">
      <Text size="xl" color="white">
        Sign Up
      </Text>
    </NavLink>
  </Box>
);

export default Navbar;
