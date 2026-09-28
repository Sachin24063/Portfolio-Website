import React from "react";
import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import TopSection from "../components/TopSection";
import Certificates from "../components/Certificates";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import certificationImg from "../static/images/certification.png";

const CertificationsHero = () => {
  return (
    <VStack align={["center", "center", "flex-start"]} spacing={4} w="100%">
      <HStack
        px={3.5}
        py={1.5}
        rounded="full"
        bg="rgba(5, 150, 105, 0.08)"
        border="1px solid #A7F3D0"
        spacing={2}
      >
        <Box w="8px" h="8px" rounded="full" bg="#059669" boxShadow="0 0 8px rgba(5, 150, 105, 0.6)" />
        <Text fontFamily="mono" fontSize="xs" fontWeight="700" color="#059669">
          VERIFIED CREDENTIALS
        </Text>
      </HStack>

      <Text
        fontSize={["3xl", "4xl", "5xl"]}
        fontWeight="800"
        letterSpacing="-0.02em"
        color="#0F172A"
        lineHeight="1.15"
      >
        Certifications & Honors
      </Text>

      <Text fontSize={["sm", "md"]} color="#475569" maxW="600px" lineHeight="1.6">
        Recognition from leading industry programs including Amazon ML Summer School (Top 200),
        SME designation for Observability & Monitoring at Crest Data, and nationwide hackathon honors.
      </Text>
    </VStack>
  );
};

export default function Certifications() {
  return (
    <Box bg="#F8FAFC" color="#0F172A" minH="100vh" className="tech-grid-bg">
      <TopSection content={<CertificationsHero />} image={certificationImg} />
      <Box maxW="7xl" mx="auto" px={[4, 6, 8]}>
        <Certificates />
      </Box>
      <Footer />
      <ScrollToTop />
    </Box>
  );
}
