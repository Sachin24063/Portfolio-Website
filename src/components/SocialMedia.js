import React from "react";
import { HStack, Link, Button, Box, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";

export default function SocialMedia() {
  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/Sachin24063",
      icon: faGithub,
      color: "#0F172A",
      hoverBorder: "#2563EB",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sachin-kumar-b418391ba/",
      icon: faLinkedinIn,
      color: "#0284C7",
      hoverBorder: "#0284C7",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/Sachin_24063/",
      customLabel: "LC",
      color: "#D97706",
      hoverBorder: "#D97706",
    },
    {
      label: "Email",
      href: "mailto:sachinkumar95121@gmail.com",
      icon: faEnvelope,
      color: "#E11D48",
      hoverBorder: "#E11D48",
    },
    {
      label: "Twitter/X",
      href: "https://x.com/Sachin61952429",
      icon: faXTwitter,
      color: "#475569",
      hoverBorder: "#0F172A",
    },
  ];

  return (
    <Box>
      <HStack spacing={2.5} wrap="wrap" justify={["center", "center", "flex-start"]}>
        {socials.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <Button
              size="sm"
              height="38px"
              px={3.5}
              rounded="xl"
              bg="#FFFFFF"
              border="1px solid"
              borderColor="#E2E8F0"
              color="#334155"
              fontSize="xs"
              fontWeight="600"
              boxShadow="0 2px 4px rgba(15, 23, 42, 0.04)"
              transition="all 0.2s ease"
              _hover={{
                bg: "#F8FAFC",
                borderColor: s.hoverBorder,
                color: "#0F172A",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 16px -2px rgba(15, 23, 42, 0.08)",
              }}
            >
              <HStack spacing={2}>
                {s.icon ? (
                  <FontAwesomeIcon icon={s.icon} style={{ color: s.color }} />
                ) : (
                  <Text fontFamily="mono" fontWeight="bold" color={s.color} fontSize="xs">
                    {s.customLabel}
                  </Text>
                )}
                <Text>{s.label}</Text>
              </HStack>
            </Button>
          </Link>
        ))}

        <Link
          href="https://github.com/Sachin24063/Portfolio-Website"
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <Button
            size="sm"
            height="38px"
            px={3.5}
            rounded="xl"
            bg="rgba(245, 158, 11, 0.08)"
            border="1px solid"
            borderColor="#FDE68A"
            color="#B45309"
            fontSize="xs"
            fontWeight="700"
            _hover={{
              bg: "rgba(245, 158, 11, 0.15)",
              borderColor: "#F59E0B",
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px -2px rgba(245, 158, 11, 0.25)",
            }}
          >
            <HStack spacing={1.5}>
              <FontAwesomeIcon icon={faStar} />
              <Text>Star on GitHub</Text>
            </HStack>
          </Button>
        </Link>
      </HStack>
    </Box>
  );
}
