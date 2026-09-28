import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Badge,
  Image,
  Button,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faAward } from "@fortawesome/free-solid-svg-icons";

import nirmaLogo from "../static/images/nirma.png";
import skpatelLogo from "../static/images/skpatel.png";

const DEGREES = [
  {
    institution: "Nirma University",
    degree: "Bachelor of Technology in Computer Science",
    duration: "October 2021 – June 2024",
    location: "Ahmedabad, Gujarat, India",
    score: "7.11 / 10.0 CGPA",
    badgeColor: "blue",
    logo: nirmaLogo,
    website: "https://www.nirmauni.ac.in/",
    highlights: [
      "Core Coursework: Distributed Systems, Cloud Computing, Microservice Architecture, Data Structures & Algorithms, Operating Systems, Database Management Systems, Compiler Construction, Computer Networks, Machine Learning & Deep Learning.",
      "Conducted research resulting in international paper publication 'FaceWave' at ICFEICT 2024 (Springer).",
      "Actively led technical and algorithmic initiatives, participating in nationwide hackathons.",
    ],
  },
  {
    institution: "Sankalchand Patel University",
    degree: "Diploma in Computer Engineering",
    duration: "August 2018 – May 2021",
    location: "Visnagar, Gujarat, India",
    score: "8.98 / 10.0 CGPA",
    badgeColor: "purple",
    logo: skpatelLogo,
    website: "https://spu.ac.in",
    highlights: [
      "Academics: Overall Class Rank 2 in 5th Semester & Overall College Rank 7 in 6th Semester.",
      "Core Foundations: Object-Oriented Programming, Computer Networks & Network Security, Data Structures, Operating Systems.",
      "Graduated with Distinction honors.",
    ],
  },
];

export default function Degrees() {
  return (
    <Box py={[6, 8]}>
      <VStack spacing={6} align="stretch">
        {DEGREES.map((deg, idx) => (
          <Box
            key={idx}
            p={[5, 6, 8]}
            rounded="2xl"
            bg="#FFFFFF"
            border="1px solid"
            borderColor="#E2E8F0"
            boxShadow="0 4px 20px -2px rgba(15, 23, 42, 0.05)"
            transition="all 0.3s ease"
            _hover={{
              borderColor: deg.badgeColor === "blue" ? "#93C5FD" : "#DDD6FE",
              boxShadow: "0 10px 30px -4px rgba(37, 99, 235, 0.1)",
            }}
          >
            <HStack
              spacing={4}
              align={["flex-start", "flex-start", "center"]}
              justify="space-between"
              wrap="wrap"
              borderBottom="1px solid"
              borderColor="#F1F5F9"
              pb={4}
              mb={4}
            >
              <HStack spacing={4}>
                <Box
                  w={["50px", "60px"]}
                  h={["50px", "60px"]}
                  rounded="xl"
                  p={2}
                  bg="#F8FAFC"
                  border="1px solid"
                  borderColor="#E2E8F0"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src={deg.logo}
                    alt={deg.institution}
                    maxW="100%"
                    maxH="100%"
                    objectFit="contain"
                  />
                </Box>

                <Box>
                  <Text fontSize={["lg", "xl"]} fontWeight="800" color="#0F172A">
                    {deg.institution}
                  </Text>
                  <Text fontSize={["sm", "md"]} fontWeight="600" color="#2563EB">
                    {deg.degree}
                  </Text>
                  <Text fontSize="xs" color="#64748B">
                    {deg.location}
                  </Text>
                </Box>
              </HStack>

              <VStack align={["flex-start", "flex-start", "flex-end"]} spacing={1}>
                <Badge
                  colorScheme={deg.badgeColor}
                  rounded="md"
                  px={2.5}
                  py={0.5}
                  fontSize="xs"
                  fontFamily="mono"
                >
                  {deg.duration}
                </Badge>
                <HStack spacing={1.5} color="#D97706" fontSize="xs" fontFamily="mono" fontWeight="700">
                  <FontAwesomeIcon icon={faAward} />
                  <Text>{deg.score}</Text>
                </HStack>
              </VStack>
            </HStack>

            <List spacing={2} my={3}>
              {deg.highlights.map((h, hIdx) => (
                <ListItem
                  key={hIdx}
                  fontSize="xs"
                  color="#334155"
                  display="flex"
                  alignItems="flex-start"
                  lineHeight="1.6"
                >
                  <ListIcon
                    as={FontAwesomeIcon}
                    icon={faCheckCircle}
                    color="#2563EB"
                    mt="3px"
                  />
                  <Text as="span">{h}</Text>
                </ListItem>
              ))}
            </List>

            <HStack justify="flex-end" pt={2}>
              <Button
                as="a"
                href={deg.website}
                isExternal
                size="xs"
                height="32px"
                px={3}
                rounded="lg"
                variant="outline"
                borderColor="#CBD5E1"
                color="#334155"
                rightIcon={<ExternalLinkIcon />}
                _hover={{
                  borderColor: "#2563EB",
                  color: "#2563EB",
                  bg: "rgba(37, 99, 235, 0.06)",
                }}
              >
                Visit Institution
              </Button>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
