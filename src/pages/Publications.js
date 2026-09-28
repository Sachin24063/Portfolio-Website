import React from "react";
import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import TopSection from "../components/TopSection";
import PublicationsComponent from "../components/Publications";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import publicationImg from "../static/images/publication1.png";

const PublicationsHero = () => {
  return (
    <VStack align={["center", "center", "flex-start"]} spacing={4} w="100%">
      <HStack
        px={3.5}
        py={1.5}
        rounded="full"
        bg="rgba(124, 58, 237, 0.08)"
        border="1px solid #DDD6FE"
        spacing={2}
      >
        <Box w="8px" h="8px" rounded="full" bg="#7C3AED" boxShadow="0 0 8px rgba(124, 58, 237, 0.6)" />
        <Text fontFamily="mono" fontSize="xs" fontWeight="700" color="#7C3AED">
          PEER-REVIEWED RESEARCH (15+ CITATIONS)
        </Text>
      </HStack>

      <Text
        fontSize={["3xl", "4xl", "5xl"]}
        fontWeight="800"
        letterSpacing="-0.02em"
        color="#0F172A"
        lineHeight="1.15"
      >
        Research Publications & Scientific Contributions
      </Text>

      <Text fontSize={["sm", "md"]} color="#475569" maxW="600px" lineHeight="1.6">
        Authored and presented 3 international research papers at flagship IEEE and Springer
        conferences across India, China, and Uzbekistan, focusing on robust machine learning,
        predictive maintenance, and computer vision.
      </Text>
    </VStack>
  );
};

export default function PublicationsPage() {
  return (
    <Box bg="#F8FAFC" color="#0F172A" minH="100vh" className="tech-grid-bg">
      <TopSection content={<PublicationsHero />} image={publicationImg} />
      <PublicationsComponent />
      <Footer />
      <ScrollToTop />
    </Box>
  );
}
