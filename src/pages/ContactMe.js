import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import TopSection from "../components/TopSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import contactmeImg from "../static/images/contactme.png";
import resumePdf from "../static/documents/resume.pdf";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ContactHero = () => {
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
          LET'S BUILD SOMETHING RELIABLE
        </Text>
      </HStack>

      <Text
        fontSize={["3xl", "4xl", "5xl"]}
        fontWeight="800"
        letterSpacing="-0.02em"
        color="#0F172A"
        lineHeight="1.15"
      >
        Contact & Resume
      </Text>

      <Text fontSize={["sm", "md"]} color="#475569" maxW="600px" lineHeight="1.6">
        Have an exciting engineering problem, infrastructure scaling challenge, or AI SRE opportunity?
        Download my latest resume or send a message directly.
      </Text>

      <HStack spacing={3} pt={2}>
        <Button
          as="a"
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          height="44px"
          px={5}
          rounded="xl"
          bg="linear-gradient(135deg, #2563EB, #1D4ED8)"
          color="white"
          fontWeight="700"
          fontSize="sm"
          rightIcon={<ExternalLinkIcon />}
          boxShadow="0 4px 15px -2px rgba(37, 99, 235, 0.35)"
          _hover={{
            bg: "linear-gradient(135deg, #1D4ED8, #1E40AF)",
            transform: "translateY(-1px)",
          }}
        >
          View / Download Resume (PDF)
        </Button>
      </HStack>
    </VStack>
  );
};

export default function ContactMe() {
  return (
    <Box bg="#F8FAFC" color="#0F172A" minH="100vh" className="tech-grid-bg">
      <TopSection content={<ContactHero />} image={contactmeImg} />
      <Contact />
      <Footer />
      <ScrollToTop />
    </Box>
  );
}
