import React from "react";
import { HStack, Box, Text, Badge } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Logo(props) {
  return (
    <Box as={RouterLink} to="/" textDecoration="none !important" {...props}>
      <HStack spacing={2.5} cursor="pointer" userSelect="none">
        <Box
          w="34px"
          h="34px"
          rounded="lg"
          bg="rgba(37, 99, 235, 0.08)"
          border="1px solid"
          borderColor="#BFDBFE"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 2px 6px rgba(37, 99, 235, 0.12)"
          transition="all 0.3s ease"
          _hover={{
            transform: "scale(1.05)",
            borderColor: "#2563EB",
            boxShadow: "0 4px 12px rgba(37, 99, 235, 0.2)",
          }}
        >
          <Text
            fontFamily="mono"
            fontWeight="bold"
            fontSize="sm"
            color="#2563EB"
          >
            &gt;_
          </Text>
        </Box>

        <HStack spacing={1}>
          <Text
            fontWeight="800"
            fontSize={["lg", "xl"]}
            letterSpacing="-0.02em"
            color="#0F172A"
          >
            Sachin
          </Text>
          <Text
            fontWeight="800"
            fontSize={["lg", "xl"]}
            letterSpacing="-0.02em"
            bgGradient="linear(to-r, #2563EB, #7C3AED)"
            bgClip="text"
          >
            Vaghari
          </Text>
        </HStack>

        <Badge
          display={["none", "none", "inline-flex"]}
          colorScheme="blue"
          variant="subtle"
          rounded="full"
          px={2.5}
          py={0.5}
          fontSize="10px"
          fontFamily="mono"
          bg="rgba(37, 99, 235, 0.08)"
          color="#1D4ED8"
          border="1px solid #BFDBFE"
        >
          DevOps • E3
        </Badge>
      </HStack>
    </Box>
  );
}
