import React from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import TopSection from "../components/TopSection";
import Works from "../components/Works";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import experienceImg from "../static/images/experience.png";

const HIGHLIGHTS = [
  { value: "100+", label: "Production Microservices", sub: "Real-time Grafana Telemetry" },
  { value: "Zero", label: "Downtime Incidents", sub: "Rapid Remediation & Runbooks" },
  { value: "SME", label: "Observability & Monitoring", sub: "Mentoring Engineers at Crest Data" },
  { value: "MCP", label: "Model Context Protocol", sub: "AI SRE Assistant with LLMs" },
];

const ExperienceHero = () => {
  return (
    <VStack align={["center", "center", "flex-start"]} spacing={4} w="100%">
      <HStack
        px={3.5}
        py={1.5}
        rounded="full"
        bg="rgba(37, 99, 235, 0.08)"
        border="1px solid #BFDBFE"
        spacing={2}
      >
        <Box w="8px" h="8px" rounded="full" bg="#2563EB" boxShadow="0 0 8px rgba(37, 99, 235, 0.6)" />
        <Text fontFamily="mono" fontSize="xs" fontWeight="700" color="#1D4ED8">
          ENGINEERING JOURNEY & IMPACT
        </Text>
      </HStack>

      <Text
        fontSize={["3xl", "4xl", "5xl"]}
        fontWeight="800"
        letterSpacing="-0.02em"
        color="#0F172A"
        lineHeight="1.15"
      >
        Production Experience & SRE Leadership
      </Text>

      <Text fontSize={["sm", "md"]} color="#475569" maxW="600px" lineHeight="1.6">
        Over 2+ years of production experience architecting scalable cloud infrastructure, leading
        observability initiatives for 100+ microservices, and pioneering AI-powered SRE tools using
        the Model Context Protocol (MCP) at Crest Data Systems.
      </Text>
    </VStack>
  );
};

export default function Experience() {
  return (
    <Box bg="#F8FAFC" color="#0F172A" minH="100vh" className="tech-grid-bg">
      <TopSection content={<ExperienceHero />} image={experienceImg} />

      {/* Metrics Banner */}
      <Container maxW="7xl" px={[4, 6, 8]} mb={6}>
        <SimpleGrid columns={[2, 2, 4]} spacing={4}>
          {HIGHLIGHTS.map((item, idx) => (
            <Box
              key={idx}
              p={4}
              rounded="xl"
              bg="#FFFFFF"
              border="1px solid"
              borderColor="#E2E8F0"
              boxShadow="0 2px 10px rgba(15, 23, 42, 0.04)"
              textAlign="center"
              transition="all 0.2s ease"
              _hover={{
                borderColor: "#93C5FD",
                transform: "translateY(-2px)",
              }}
            >
              <Text
                fontFamily="mono"
                fontSize={["2xl", "3xl"]}
                fontWeight="800"
                color="#2563EB"
              >
                {item.value}
              </Text>
              <Text fontSize="xs" fontWeight="700" color="#0F172A" mt={1}>
                {item.label}
              </Text>
              <Text fontSize="10px" color="#64748B">
                {item.sub}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Works />
      <Footer />
      <ScrollToTop />
    </Box>
  );
}
