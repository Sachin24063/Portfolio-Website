import React, { useState, useEffect } from "react";
import { NavLink as RouteLink, useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Collapse,
  VStack,
  Container,
} from "@chakra-ui/react";
import Logo from "./Logo";
import resumePdf from "../static/documents/resume.pdf";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Publications", to: "/publications" },
  { label: "Education", to: "/education" },
  { label: "Contact", to: "/contactme" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="1000"
      transition="all 0.3s ease"
      bg={scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.85)"}
      backdropFilter="blur(16px)"
      borderBottom="1px solid"
      borderColor={scrolled ? "#CBD5E1" : "#E2E8F0"}
      boxShadow={scrolled ? "0 4px 20px -2px rgba(15, 23, 42, 0.06)" : "none"}
    >
      <Container maxW="7xl" px={[4, 6, 8]}>
        <Flex h="72px" alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <HStack
            as="nav"
            spacing={1.5}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Box
                  key={item.label}
                  as={RouteLink}
                  to={item.to}
                  px={3.5}
                  py={2}
                  rounded="lg"
                  fontSize="sm"
                  fontWeight="600"
                  letterSpacing="-0.01em"
                  color={isActive ? "#2563EB" : "#475569"}
                  bg={isActive ? "rgba(37, 99, 235, 0.08)" : "transparent"}
                  border="1px solid"
                  borderColor={isActive ? "rgba(37, 99, 235, 0.2)" : "transparent"}
                  transition="all 0.2s ease"
                  _hover={{
                    color: "#0F172A",
                    bg: "rgba(15, 23, 42, 0.04)",
                  }}
                >
                  {item.label}
                </Box>
              );
            })}
          </HStack>

          {/* Right Action: Resume */}
          <HStack spacing={3} display={{ base: "none", md: "flex" }}>
            <Button
              as="a"
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              height="38px"
              px={4}
              fontSize="xs"
              fontWeight="700"
              fontFamily="mono"
              rounded="lg"
              bg="linear-gradient(135deg, #2563EB, #1D4ED8)"
              color="white"
              boxShadow="0 2px 10px rgba(37, 99, 235, 0.25)"
              _hover={{
                bg: "linear-gradient(135deg, #1D4ED8, #1E40AF)",
                boxShadow: "0 4px 15px rgba(37, 99, 235, 0.35)",
                transform: "translateY(-1px)",
              }}
              _active={{ transform: "translateY(0)" }}
            >
              Resume ↗
            </Button>
          </HStack>

          {/* Mobile Hamburger Toggle */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
            variant="ghost"
            color="#0F172A"
            _hover={{ bg: "blackAlpha.50" }}
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            }
          />
        </Flex>

        {/* Mobile Dropdown Menu */}
        <Collapse in={isOpen} animateOpacity>
          <Box
            pb={5}
            pt={2}
            display={{ md: "none" }}
            borderTop="1px solid"
            borderColor="#E2E8F0"
          >
            <VStack spacing={2} align="stretch">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Box
                    key={item.label}
                    as={RouteLink}
                    to={item.to}
                    px={4}
                    py={2.5}
                    rounded="lg"
                    fontSize="sm"
                    fontWeight="600"
                    color={isActive ? "#2563EB" : "#475569"}
                    bg={isActive ? "rgba(37, 99, 235, 0.08)" : "transparent"}
                    border="1px solid"
                    borderColor={isActive ? "rgba(37, 99, 235, 0.2)" : "transparent"}
                    _hover={{ color: "#0F172A", bg: "blackAlpha.50" }}
                  >
                    {item.label}
                  </Box>
                );
              })}

              <Button
                as="a"
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                mt={2}
                w="100%"
                size="sm"
                py={2.5}
                fontSize="xs"
                fontWeight="700"
                fontFamily="mono"
                rounded="lg"
                bg="linear-gradient(135deg, #2563EB, #1D4ED8)"
                color="white"
              >
                Download Resume ↗
              </Button>
            </VStack>
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
}