import React from "react";
import {
  Box,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Badge,
  Button,
  Image,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import amazonLogo from "../static/images/amazon.png";
import minedLogo from "../static/images/mined.png";
import crestLogo from "../static/images/crest.png";

const HONORS = [
  {
    title: "Amazon ML Summer School 2023",
    issuer: "Amazon",
    logo: amazonLogo,
    badge: "Top 200 Nationwide",
    badgeColor: "orange",
    accentColor: "#D97706",
    description:
      "Selected among the top 200 applicants across India for an intensive 4-week machine learning mentorship program covering advanced deep learning, NLP, and computer vision architectures.",
    link: "https://drive.google.com/file/d/15NvosNnbzk6xNsZTdEF5m3DIpCQ0L6o9/view?usp=share_link",
    hasCert: true,
  },
  {
    title: "Subject Matter Expert (SME) - Observability",
    issuer: "Crest Data Systems",
    logo: crestLogo,
    badge: "Company Recognition",
    badgeColor: "blue",
    accentColor: "#2563EB",
    description:
      "Officially designated as Subject Matter Expert (SME) for Observability & Monitoring at Crest Data. Mentoring 5+ engineers on Icinga, Prometheus, Grafana, and alert tuning strategies.",
    hasCert: false,
  },
  {
    title: "MINeD Hackathon 2023 Finalist",
    issuer: "Nirma University",
    logo: minedLogo,
    badge: "Hackathon Finalist",
    badgeColor: "purple",
    accentColor: "#7C3AED",
    description:
      "National finalist at Nirma University hackathon; engineered an AI-based system for environmental biosignal and plant communication.",
    link: "https://certificate.givemycertificate.com/c/f8b42552-05b4-4802-9644-dac619828977",
    hasCert: true,
  },
  {
    title: "1200+ LeetCode Problems Solved",
    issuer: "LeetCode",
    badge: "1200+ Solved",
    badgeColor: "orange",
    accentColor: "#D97706",
    description:
      "Solved over 1200+ algorithmic problems on LeetCode with extensive practice across dynamic programming, trees, graphs, and advanced algorithmic design.",
    link: "https://leetcode.com/u/Sachin_24063/",
    hasCert: false,
    viewText: "View LeetCode Profile",
  },
];

export default function Certificates() {
  return (
    <Box py={[6, 8]}>
      <SimpleGrid columns={[1, 1, 2]} spacing={6}>
        {HONORS.map((item, idx) => (
          <Box
            key={idx}
            p={6}
            rounded="2xl"
            bg="#FFFFFF"
            border="1px solid"
            borderColor="#E2E8F0"
            boxShadow="0 4px 20px -2px rgba(15, 23, 42, 0.05)"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-3px)",
              borderColor: item.accentColor,
              boxShadow: `0 12px 30px -5px rgba(15, 23, 42, 0.08)`,
            }}
          >
            <VStack align="flex-start" spacing={3}>
              <HStack justify="space-between" w="100%" wrap="wrap">
                <HStack spacing={3}>
                  {item.logo ? (
                    <Box
                      w="36px"
                      h="36px"
                      rounded="lg"
                      p={1.5}
                      bg="#F8FAFC"
                      border="1px solid"
                      borderColor="#E2E8F0"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Image
                        src={item.logo}
                        alt={item.issuer}
                        maxW="100%"
                        maxH="100%"
                        objectFit="contain"
                      />
                    </Box>
                  ) : (
                    <Box
                      w="36px"
                      h="36px"
                      rounded="lg"
                      bg={`${item.accentColor}12`}
                      border="1px solid"
                      borderColor={`${item.accentColor}30`}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color={item.accentColor}
                    >
                      <FontAwesomeIcon icon={faTrophy} />
                    </Box>
                  )}
                  <Box>
                    <Text fontSize="md" fontWeight="700" color="#0F172A">
                      {item.title}
                    </Text>
                    <Text fontSize="xs" color="#64748B">
                      {item.issuer}
                    </Text>
                  </Box>
                </HStack>

                <Badge
                  colorScheme={item.badgeColor}
                  rounded="md"
                  px={2}
                  py={0.5}
                  fontSize="10px"
                  fontFamily="mono"
                >
                  {item.badge}
                </Badge>
              </HStack>

              <Text fontSize="xs" color="#475569" lineHeight="1.6" pt={1}>
                {item.description}
              </Text>
            </VStack>

            {item.link && (
              <Box pt={4} mt={2} borderTop="1px solid" borderColor="#F1F5F9" textAlign="right">
                <Button
                  as="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="xs"
                  height="30px"
                  px={3}
                  rounded="lg"
                  bg="rgba(37, 99, 235, 0.08)"
                  border="1px solid"
                  borderColor="#BFDBFE"
                  color="#1D4ED8"
                  fontSize="11px"
                  fontWeight="600"
                  rightIcon={<ExternalLinkIcon />}
                  _hover={{
                    bg: "rgba(37, 99, 235, 0.16)",
                    borderColor: "#2563EB",
                  }}
                >
                  {item.hasCert ? "View Certificate" : item.viewText || "View Verification"}
                </Button>
              </Box>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
