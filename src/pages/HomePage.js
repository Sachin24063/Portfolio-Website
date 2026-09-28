import React from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import TopSection from "../components/TopSection";
import SocialMedia from "../components/SocialMedia";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import TerminalWidget from "../components/TerminalWidget";
import sachinProfile from "../static/images/sachin_profile.jpg";
import resumePdf from "../static/documents/resume.pdf";
import { ExternalLinkIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const METRICS = [
  { label: "Production Experience", value: "2+ Years", sub: "Cloud Infrastructure & SRE" },
  { label: "Microservices Monitored", value: "100+", sub: "Production Environments" },
  { label: "Research Papers", value: "3 Published", sub: "IEEE & Springer Conferences" },
  { label: "DSA Problems Solved", value: "1200+", sub: "LeetCode Problems Solved" },
];

const HeroContent = () => {
  return (
    <VStack align={["center", "center", "flex-start"]} spacing={4} w="100%">
      {/* Main Name */}
      <Box textAlign={["center", "center", "left"]}>
        <Text
          fontSize={["3xl", "4xl", "5xl", "6xl"]}
          fontWeight="800"
          letterSpacing="-0.03em"
          lineHeight="1.1"
          color="#0F172A"
        >
          Sachin{" "}
          <Text
            as="span"
            bgGradient="linear(to-r, #2563EB, #1D4ED8, #7C3AED)"
            bgClip="text"
          >
            Vaghari
          </Text>
        </Text>
      </Box>

      {/* Headline & Summary */}
      <Text
        fontSize={["sm", "md", "lg"]}
        color="#475569"
        maxW="640px"
        lineHeight="1.6"
        textAlign={["center", "center", "left"]}
      >
        DevOps Engineer with 2+ years of production experience building scalable cloud
        infrastructure and AI-powered SRE tools. Combining AWS, Kubernetes, CI/CD automation,
        and Model Context Protocol (MCP) agents to deliver high-availability systems with zero downtime.
      </Text>

      {/* CTA Buttons */}
      <HStack spacing={3} pt={2} wrap="wrap" justify={["center", "center", "flex-start"]}>
        <Button
          as={RouterLink}
          to="/experience"
          size="md"
          height="44px"
          px={5}
          rounded="xl"
          bg="linear-gradient(135deg, #2563EB, #1D4ED8)"
          color="white"
          fontWeight="700"
          fontSize="sm"
          boxShadow="0 4px 15px -2px rgba(37, 99, 235, 0.35)"
          rightIcon={<ArrowForwardIcon />}
          _hover={{
            bg: "linear-gradient(135deg, #1D4ED8, #1E40AF)",
            boxShadow: "0 6px 20px -2px rgba(37, 99, 235, 0.45)",
            transform: "translateY(-1px)",
          }}
        >
          View Experience
        </Button>

        <Button
          as={RouterLink}
          to="/projects"
          size="md"
          height="44px"
          px={5}
          rounded="xl"
          variant="outline"
          borderColor="#CBD5E1"
          bg="#FFFFFF"
          color="#334155"
          fontWeight="600"
          fontSize="sm"
          boxShadow="0 2px 4px rgba(15, 23, 42, 0.04)"
          _hover={{
            bg: "#F8FAFC",
            borderColor: "#2563EB",
            color: "#0F172A",
            transform: "translateY(-1px)",
          }}
        >
          Explore Projects
        </Button>

        <Button
          as="a"
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          height="44px"
          px={4}
          rounded="xl"
          variant="ghost"
          color="#475569"
          fontWeight="600"
          fontSize="sm"
          rightIcon={<ExternalLinkIcon />}
          _hover={{
            color: "#2563EB",
            bg: "rgba(37, 99, 235, 0.08)",
          }}
        >
          Resume
        </Button>
      </HStack>

      {/* Social Media Links */}
      <Box pt={2}>
        <SocialMedia />
      </Box>
    </VStack>
  );
};

export default function HomePage() {
  return (
    <Box bg="#F8FAFC" color="#0F172A" minH="100vh" className="tech-grid-bg">
      {/* Top Hero Section with Uploaded Profile Photo */}
      <TopSection content={<HeroContent />} image={sachinProfile} />

      {/* Metric Counters Banner */}
      <Container maxW="7xl" px={[4, 6, 8]} my={[6, 10]}>
        <SimpleGrid columns={[2, 2, 4]} spacing={[4, 5]}>
          {METRICS.map((m, idx) => (
            <Box
              key={idx}
              p={[4, 5]}
              rounded="2xl"
              bg="#FFFFFF"
              border="1px solid"
              borderColor="#E2E8F0"
              boxShadow="0 4px 20px -2px rgba(15, 23, 42, 0.05)"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-3px)",
                borderColor: "#93C5FD",
                boxShadow: "0 10px 25px -4px rgba(37, 99, 235, 0.12)",
              }}
            >
              <Text
                fontFamily="mono"
                fontSize={["2xl", "3xl", "4xl"]}
                fontWeight="800"
                bgGradient="linear(to-r, #2563EB, #1D4ED8)"
                bgClip="text"
                lineHeight="1"
              >
                {m.value}
              </Text>
              <Text fontSize={["xs", "sm"]} fontWeight="700" color="#0F172A" mt={2}>
                {m.label}
              </Text>
              <Text fontSize={["10px", "xs"]} color="#64748B" mt={0.5}>
                {m.sub}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Interactive SRE & AI Terminal Widget */}
      <Container maxW="7xl" px={[4, 6, 8]} my={[8, 12]}>
        <VStack spacing={3} mb={6} textAlign="center">
          <Badge
            colorScheme="blue"
            variant="subtle"
            rounded="full"
            px={3}
            py={1}
            fontSize="xs"
            fontFamily="mono"
            bg="rgba(37, 99, 235, 0.08)"
            color="#1D4ED8"
            border="1px solid #BFDBFE"
          >
            INTERACTIVE SRE CONSOLE
          </Badge>
          <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="800" color="#0F172A">
            Inspect Architecture & Production Telemetry
          </Text>
          <Text fontSize="sm" color="#64748B" maxW="xl">
            Click through the commands below to inspect telemetry on my production Kubernetes microservices,
            infrastructure automation, and verifiable engineering achievements.
          </Text>
        </VStack>

        <TerminalWidget />
      </Container>

      {/* Flagship Production Projects Spotlight */}
      <Container maxW="7xl" px={[4, 6, 8]} my={[10, 16]}>
        <VStack spacing={3} textAlign="center" mb={10}>
          <HStack
            px={3.5}
            py={1.5}
            rounded="full"
            bg="rgba(124, 58, 237, 0.08)"
            border="1px solid #DDD6FE"
          >
            <Text fontFamily="mono" fontSize="xs" fontWeight="700" color="#7C3AED">
              PRODUCTION HIGHLIGHTS
            </Text>
          </HStack>

          <Text fontSize={["2xl", "3xl", "4xl"]} fontWeight="800" color="#0F172A">
            Featured Engineering Endeavors
          </Text>
          <Text fontSize="sm" color="#64748B" maxW="2xl">
            Key systems architected at Crest Data Systems and enterprise projects delivering
            measurable latency reductions and zero-downtime reliability.
          </Text>
        </VStack>

        <SimpleGrid columns={[1, 1, 3]} spacing={6}>
          {/* Card 1: PLBaaS */}
          <Box
            p={6}
            rounded="2xl"
            bg="#FFFFFF"
            border="1px solid"
            borderColor="#E2E8F0"
            boxShadow="0 4px 20px -2px rgba(15, 23, 42, 0.05)"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-4px)",
              borderColor: "#2563EB",
              boxShadow: "0 14px 35px -5px rgba(37, 99, 235, 0.12)",
            }}
          >
            <VStack align="flex-start" spacing={3}>
              <Badge colorScheme="blue" rounded="md" px={2} py={0.5} fontSize="xs" fontFamily="mono">
                Crest Data Systems • Production
              </Badge>
              <Text fontSize="xl" fontWeight="700" color="#0F172A">
                PLBaaS (Polaris Load Balancer as a Service)
              </Text>
              <Text fontSize="xs" color="#2563EB" fontWeight="600" fontFamily="mono">
                Platform Engineering - Site Reliability Engineer (PESRE)
              </Text>
              <Text fontSize="sm" color="#475569" lineHeight="1.6">
                Architected and deployed Kubernetes-based microservices with real-time observability.
                Built comprehensive Grafana monitoring for 100+ production services and maintained zero downtime
                across on-call rotations.
              </Text>
              <HStack wrap="wrap" spacing={1.5} pt={2}>
                {["Kubernetes", "Grafana", "Prometheus", "Icinga", "AWS"].map((tag) => (
                  <Badge key={tag} rounded="md" px={2} py={0.5} bg="#F1F5F9" color="#334155" fontSize="10px">
                    {tag}
                  </Badge>
                ))}
              </HStack>
            </VStack>
          </Box>

          {/* Card 2: Three-Tier App Deployment */}
          <Box
            p={6}
            rounded="2xl"
            bg="#FFFFFF"
            border="1px solid"
            borderColor="#E2E8F0"
            boxShadow="0 4px 20px -2px rgba(15, 23, 42, 0.05)"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-4px)",
              borderColor: "#0284C7",
              boxShadow: "0 14px 35px -5px rgba(2, 132, 199, 0.12)",
            }}
          >
            <VStack align="flex-start" spacing={3}>
              <Badge colorScheme="cyan" rounded="md" px={2} py={0.5} fontSize="xs" fontFamily="mono">
                Cloud Architecture • IaC
              </Badge>
              <Text fontSize="xl" fontWeight="700" color="#0F172A">
                Three-Tier Deployment with IaC & CI/CD
              </Text>
              <Text fontSize="xs" color="#0284C7" fontWeight="600" fontFamily="mono">
                Terraform, AWS VPC, ALB, ASG, Jenkins, Docker
              </Text>
              <Text fontSize="sm" color="#475569" lineHeight="1.6">
                Automated deployment of scalable 3-tier enterprise application using Terraform IaC on AWS.
                Configured secure VPC subnets, ALB, Auto Scaling Groups, and automated Blue-Green deployments
                with zero-downtime rollback capabilities.
              </Text>
              <HStack wrap="wrap" spacing={1.5} pt={2}>
                {["Terraform", "AWS VPC", "ALB", "Auto Scaling", "Jenkins", "Docker"].map((tag) => (
                  <Badge key={tag} rounded="md" px={2} py={0.5} bg="#F1F5F9" color="#334155" fontSize="10px">
                    {tag}
                  </Badge>
                ))}
              </HStack>
            </VStack>
          </Box>

          {/* Card 3: DevOpsGPT */}
          <Box
            p={6}
            rounded="2xl"
            bg="#FFFFFF"
            border="1px solid"
            borderColor="#E2E8F0"
            boxShadow="0 4px 20px -2px rgba(15, 23, 42, 0.05)"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-4px)",
              borderColor: "#059669",
              boxShadow: "0 14px 35px -5px rgba(5, 150, 105, 0.12)",
            }}
          >
            <VStack align="flex-start" spacing={3}>
              <Badge colorScheme="green" rounded="md" px={2} py={0.5} fontSize="xs" fontFamily="mono">
                Featured Key Project
              </Badge>
              <Text fontSize="xl" fontWeight="700" color="#0F172A">
                DevOpsGPT (On-Call AI Assistant)
              </Text>
              <Text fontSize="xs" color="#059669" fontWeight="600" fontFamily="mono">
                React, FastAPI, FAISS, OpenAI, LangChain
              </Text>
              <Text fontSize="sm" color="#475569" lineHeight="1.6">
                Built an AI-powered assistant for on-call engineers with contextual vector search,
                automated runbook recommendation, and intelligent triage that slashes incident resolution time.
              </Text>
              <HStack wrap="wrap" spacing={1.5} pt={2}>
                {["FastAPI", "React", "Vector DB", "Incident Triage"].map((tag) => (
                  <Badge key={tag} rounded="md" px={2} py={0.5} bg="#F1F5F9" color="#334155" fontSize="10px">
                    {tag}
                  </Badge>
                ))}
              </HStack>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Skills Matrix Component */}
      <Skills />

      {/* Footer & Scroll to Top */}
      <Footer />
      <ScrollToTop />
    </Box>
  );
}
