import React from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Badge,
} from "@chakra-ui/react";
import TopSection from "../components/TopSection";
import CodingProfiles from "../components/CodingProfiles";
import Degrees from "../components/Degrees";
import Certificates from "../components/Certificates";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import educationImg from "../static/images/education.png";

const EducationHero = () => {
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
          ACADEMICS & HONORS
        </Text>
      </HStack>

      <Text
        fontSize={["3xl", "4xl", "5xl"]}
        fontWeight="800"
        letterSpacing="-0.02em"
        color="#0F172A"
        lineHeight="1.15"
      >
        Education, Honors & Problem Solving
      </Text>

      <Text fontSize={["sm", "md"]} color="#475569" maxW="600px" lineHeight="1.6">
        Formal engineering background in Computer Science from Nirma University, combined with
        Amazon ML Summer School mentorship and 1200+ competitive programming algorithmic achievements.
      </Text>
    </VStack>
  );
};

export default function Education() {
  return (
    <Box bg="#F8FAFC" color="#0F172A" minH="100vh" className="tech-grid-bg">
      <TopSection content={<EducationHero />} image={educationImg} />

      <Container maxW="7xl" px={[4, 6, 8]}>
        {/* Coding Profiles Milestone Banner */}
        <Box mb={12}>
          <HStack spacing={2} mb={4}>
            <Badge colorScheme="orange" rounded="md" px={2.5} py={0.5} fontSize="xs" fontFamily="mono">
              ALGORITHMIC PROBLEM SOLVING
            </Badge>
            <Text fontSize="lg" fontWeight="700" color="#0F172A">
              Competitive Programming & Coding Profiles
            </Text>
          </HStack>
          <CodingProfiles />
        </Box>

        {/* Degrees Section */}
        <Box mb={12}>
          <HStack spacing={2} mb={4}>
            <Badge colorScheme="cyan" rounded="md" px={2.5} py={0.5} fontSize="xs" fontFamily="mono">
              DEGREES
            </Badge>
            <Text fontSize="lg" fontWeight="700" color="#0F172A">
              Educational Qualifications
            </Text>
          </HStack>
          <Degrees />
        </Box>

        {/* Honors & Certifications Section */}
        <Box mb={12}>
          <HStack spacing={2} mb={4}>
            <Badge colorScheme="purple" rounded="md" px={2.5} py={0.5} fontSize="xs" fontFamily="mono">
              HONORS & CREDENTIALS
            </Badge>
            <Text fontSize="lg" fontWeight="700" color="#0F172A">
              Achievements & Certifications
            </Text>
          </HStack>
          <Certificates />
        </Box>
      </Container>

      <Footer />
      <ScrollToTop />
    </Box>
  );
}
