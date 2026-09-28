import React from "react";
import {
  Box,
  SimpleGrid,
  HStack,
  VStack,
  Text,
  Badge,
  Link,
  Button,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Codeforces, Leetcode, CodingNinja, Gfg } from "./Icons";

const PROFILES = [
  {
    name: "LeetCode",
    handle: "@Sachin_24063",
    url: "https://leetcode.com/u/Sachin_24063/",
    icon: Leetcode,
    badge: "1200+ Problems Solved",
    badgeColor: "orange",
    accentColor: "#D97706",
    borderColor: "#FDE68A",
    iconBg: "rgba(217, 119, 6, 0.1)",
    btnText: "View Profile",
  },
  {
    name: "Codeforces",
    handle: "@sachin_24063",
    url: "https://codeforces.com/profile/sachin_24063",
    icon: Codeforces,
    badge: null,
    accentColor: "#2563EB",
    borderColor: "#BFDBFE",
    iconBg: "rgba(37, 99, 235, 0.08)",
    btnText: "View Profile",
  },
  {
    name: "Coding Ninjas (Code360)",
    handle: "Sachin Vaghari",
    url: "https://www.naukri.com/code360/profile/d3e4b65e-75ca-47ca-befe-e36e90bc58f1",
    icon: CodingNinja,
    badge: null,
    accentColor: "#EA580C",
    borderColor: "#FED7AA",
    iconBg: "rgba(234, 88, 12, 0.08)",
    btnText: "View Profile",
  },
  {
    name: "GeeksforGeeks",
    handle: "@sachinkumar95121",
    url: "https://www.geeksforgeeks.org/user/sachinkumar95121/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user",
    icon: Gfg,
    badge: null,
    accentColor: "#16A34A",
    borderColor: "#BBF7D0",
    iconBg: "rgba(22, 163, 74, 0.08)",
    btnText: "View Profile",
  },
];

export default function CodingProfiles() {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={5} w="100%">
      {PROFILES.map((p) => {
        const IconComponent = p.icon;
        return (
          <Link
            key={p.name}
            href={p.url}
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <Box
              p={[4, 5]}
              h="100%"
              rounded="2xl"
              bg="#FFFFFF"
              border="1px solid"
              borderColor="#E2E8F0"
              boxShadow="0 4px 20px -2px rgba(15, 23, 42, 0.05)"
              transition="all 0.3s ease"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              _hover={{
                transform: "translateY(-3px)",
                borderColor: p.accentColor,
                boxShadow: `0 12px 30px -4px rgba(15, 23, 42, 0.08)`,
              }}
            >
              <HStack
                spacing={4}
                justify="space-between"
                align={["flex-start", "center"]}
                wrap="wrap"
              >
                <HStack spacing={3.5}>
                  <Box
                    w="44px"
                    h="44px"
                    rounded="xl"
                    bg={p.iconBg}
                    border="1px solid"
                    borderColor={p.borderColor}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    <IconComponent width="24px" height="24px" />
                  </Box>

                  <VStack align="flex-start" spacing={0.5}>
                    <HStack spacing={2} wrap="wrap">
                      <Text fontWeight="800" fontSize="md" color="#0F172A">
                        {p.name}
                      </Text>
                      {p.badge && (
                        <Badge
                          colorScheme={p.badgeColor}
                          rounded="md"
                          fontSize="10px"
                          fontFamily="mono"
                          px={2}
                          py={0.5}
                        >
                          {p.badge}
                        </Badge>
                      )}
                    </HStack>
                    <Text fontSize="xs" color="#64748B">
                      Handle:{" "}
                      <Text
                        as="span"
                        fontFamily="mono"
                        color={p.accentColor}
                        fontWeight="600"
                      >
                        {p.handle}
                      </Text>
                    </Text>
                  </VStack>
                </HStack>

                <Button
                  as="span"
                  size="xs"
                  height="30px"
                  px={3}
                  rounded="lg"
                  bg={p.iconBg}
                  border="1px solid"
                  borderColor={p.borderColor}
                  color={p.accentColor}
                  fontSize="xs"
                  fontWeight="700"
                  rightIcon={<ExternalLinkIcon />}
                  _hover={{
                    bg: p.iconBg,
                    filter: "brightness(0.95)",
                  }}
                >
                  {p.btnText}
                </Button>
              </HStack>
            </Box>
          </Link>
        );
      })}
    </SimpleGrid>
  );
}
