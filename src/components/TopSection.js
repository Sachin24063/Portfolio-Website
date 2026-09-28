import React from "react";
import { Container, Stack, VStack, Center, Image, Box } from "@chakra-ui/react";

export default function TopSection({ content, image }) {
  return (
    <Container maxW="7xl" px={[4, 6, 8]} pt={[6, 8, 12]} pb={[6, 8, 10]}>
      <Stack
        w="100%"
        spacing={[8, 8, 12]}
        direction={["column-reverse", "column-reverse", "row"]}
        align="center"
        justify="space-between"
      >
        <VStack
          align={["center", "center", "flex-start"]}
          spacing={5}
          w={["100%", "100%", "60%"]}
          textAlign={["center", "center", "left"]}
        >
          {content}
        </VStack>

        <Center w={["100%", "80%", "36%"]} position="relative">
          {/* Soft Azure Ambient Glow */}
          <Box
            position="absolute"
            w="280px"
            h="280px"
            rounded="full"
            bg="radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(124, 58, 237, 0.06) 60%, transparent 80%)"
            filter="blur(25px)"
            zIndex="0"
          />

          <Box
            position="relative"
            zIndex="1"
            p={2.5}
            rounded="2xl"
            bg="#FFFFFF"
            border="1px solid"
            borderColor="#E2E8F0"
            boxShadow="0 20px 45px -10px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.04)"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-3px)",
              boxShadow: "0 25px 50px -10px rgba(37, 99, 235, 0.16)",
              borderColor: "#BFDBFE",
            }}
          >
            <Image
              maxW={["240px", "280px", "320px"]}
              w="100%"
              h="auto"
              src={image}
              alt="Sachin Vaghari"
              rounded="xl"
              objectFit="cover"
            />
          </Box>
        </Center>
      </Stack>
    </Container>
  );
}
