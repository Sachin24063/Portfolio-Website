import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  HStack,
  Link,
} from "@chakra-ui/react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <Box
      as="footer"
      mt={20}
      borderTop="1px solid"
      borderColor="#E2E8F0"
      bg="#FFFFFF"
      py={10}
      boxShadow="0 -4px 20px -2px rgba(15, 23, 42, 0.03)"
    >
      <Container maxW="7xl" px={[4, 6, 8]}>
        <Stack
          direction={["column", "column", "row"]}
          spacing={6}
          justify="space-between"
          align={["center", "center", "center"]}
        >
          {/* Brand Info */}
          <Stack spacing={2} align={["center", "center", "flex-start"]}>
            <Logo />
            <Text fontSize="xs" color="#64748B" maxW="360px" textAlign={["center", "center", "left"]}>
              DevOps Engineer (E3). Architecting high-availability cloud infrastructure & intelligent automation.
            </Text>
          </Stack>

          {/* Social Links & Copyright */}
          <Stack spacing={2} align={["center", "center", "flex-end"]}>
            <HStack spacing={4} fontSize="sm">
              <Link
                href="https://github.com/Sachin24063"
                isExternal
                color="#475569"
                _hover={{ color: "#2563EB" }}
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/sachin-kumar-b418391ba/"
                isExternal
                color="#475569"
                _hover={{ color: "#2563EB" }}
              >
                LinkedIn
              </Link>
              <Link
                href="https://leetcode.com/u/Sachin_24063/"
                isExternal
                color="#475569"
                _hover={{ color: "#2563EB" }}
              >
                LeetCode
              </Link>
              <Link
                href="mailto:sachinkumar95121@gmail.com"
                isExternal
                color="#475569"
                _hover={{ color: "#2563EB" }}
              >
                Email
              </Link>
            </HStack>
            <Text fontSize="xs" color="#94A3B8">
              © {new Date().getFullYear()} Sachin Vaghari. All rights reserved.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
