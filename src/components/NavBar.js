import React from "react"
import { NavLink as RouteLink } from "react-router-dom"
import { Link, Box, Flex, Text, Stack } from "@chakra-ui/react"
import Logo from "./Logo"

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="250px"
        color={["white", "white", "blue.900", "blue.900"]}
        fontSize="3xl"
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} fontFamily="workSans" />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg cursor="pointer" width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    cursor="pointer"
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, to = "/", ...rest }) => {
  return (
    <Link
      as={RouteLink}
      to={to}
      _hover={{ bg: "blue.900", textColor: "white" }}
      _after={{ bg: "blue.900", textColor: "white" }}
      _activeLink={{ bg: "blue.900", textColor: "white" }}
      borderRadius="xl">
      <Text
        borderRadius="xl"
        _after={[{ bg: "white", textColor: "blue.900" }, { bg: "white", textColor: "blue.900" }, { bg: "blue.900", textColor: "white" }]}
        p={[3, 3, 3, 5]}
        display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        align={["left", "left", "center"]}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/education">Education</MenuItem>
        <MenuItem to="/experience">Experience</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
        <MenuItem to="/certifications">Certifications</MenuItem>
        <MenuItem to="/contactme">Contact Me</MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      px={[8, 8, 8, 12]}
      py={5}
      bg={["blue.900", "blue.900", "blue.50", "blue.50"]}
      color={["white", "white", "blue.900", "blue.900"]}
      fontWeight="bold"
      fontSize={["lg", "2xl", "lg", "2xl"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;