import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import TopSection from "../components/TopSection";
import ProjectCards from "../components/ProjectCards";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import projectsImg from "../static/images/projects.png";

const ProjectsHero = () => {
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
          FEATURED WORK & SYSTEMS
        </Text>
      </HStack>

      <Text
        fontSize={["3xl", "4xl", "5xl"]}
        fontWeight="800"
        letterSpacing="-0.02em"
        color="#0F172A"
        lineHeight="1.15"
      >
        Featured Projects & Architecture
      </Text>

      <Text fontSize={["sm", "md"]} color="#475569" maxW="600px" lineHeight="1.6">
        From LLM-driven SRE assistants and enterprise billing engines to high-availability
        Infrastructure as Code (IaC) and published deep learning research architectures.
      </Text>
    </VStack>
  );
};

export default function Projects() {
  return (
    <Box bg="#F8FAFC" color="#0F172A" minH="100vh" className="tech-grid-bg">
      <TopSection content={<ProjectsHero />} image={projectsImg} />
      <ProjectCards />
      <Footer />
      <ScrollToTop />
    </Box>
  );
}
