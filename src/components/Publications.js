import React from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Badge,
  Button,
  SimpleGrid,
  Image,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

import INCIP from "../static/images/INCIP.png";
import ICFEICT from "../static/images/ICFEICT.png";
import ICTACS from "../static/images/ICTACS.png";

const PUBLICATIONS = [
  {
    image: INCIP,
    title: "Optimizing Grid Equipment Maintenance Through Robust Machine Learning",
    conference: "IEEE INCIP 2025",
    conferenceFull: "IEEE International Conference on Next Generation Communication & Information Processing",
    date: "January 23-24, 2025",
    location: "Bangalore, India",
    publisher: "IEEE Xplore",
    badgeColor: "blue",
    citations: "15+ Citations Across Research Works",
    website: "https://ieeexplore.ieee.org/document/11018925",
    description: [
      "Formulated robust predictive maintenance paradigms leveraging supervised learning and signal processing to preempt power grid equipment failures.",
      "Engineered automated anomaly detection pipelines evaluating telemetry patterns under sensor drift and high noise environments.",
      "Demonstrated significant reduction in unplanned power equipment downtime and lifecycle operational expenditure.",
    ],
    tags: ["Machine Learning", "Predictive Maintenance", "Smart Grid", "IoT Telemetry", "Fault Diagnosis"],
  },
  {
    image: ICFEICT,
    title: "FaceWave: SVM and Wavelet Transformation-Based Face Recognition Framework for Women Cricketers",
    conference: "Springer ICFEICT 2024",
    conferenceFull: "The 5th International Conference on Frontiers of Electronics, Information and Computation Technologies",
    date: "2024",
    location: "Beijing, China",
    publisher: "Springer Nature",
    badgeColor: "purple",
    citations: "Indexed in Springer Digital Library",
    website: "https://link.springer.com/chapter/10.1007/978-981-96-5318-8_50",
    description: [
      "Pioneered a specialized facial recognition framework addressing gender disparity in sports vision datasets with over 1,000+ curated female athlete images.",
      "Combined discrete Haar Wavelet Transforms for frequency domain decomposition with Support Vector Classifiers (SVC), attaining 84% classification accuracy.",
      "Integrated into a production Python Flask inference microservice with Base64 image payload streaming.",
    ],
    tags: ["Wavelet Transform", "Support Vector Machines (SVM)", "OpenCV", "Computer Vision", "Facial Recognition"],
  },
  {
    image: ICTACS,
    title: "Enhancing Bird Species Identification Using a Custom CNN Architecture",
    conference: "IEEE ICTACS 2024",
    conferenceFull: "4th International Conference on Technological Advancements in Computational Sciences",
    date: "November 13-15, 2024",
    location: "Tashkent, Uzbekistan",
    publisher: "IEEE Xplore",
    badgeColor: "green",
    citations: "IEEE Conference Proceedings",
    website: "https://ieeexplore.ieee.org/document/10840487",
    description: [
      "Engineered a lightweight custom Convolutional Neural Network architecture classifying 15 complex avian species across 4,447 images.",
      "Implemented comprehensive data augmentation and adaptive learning rate schedulers to reach 89.58% test accuracy while minimizing model parameters.",
      "Designed a real-time web inference UI leveraging FastAPI and Node.js for ornithologists and conservation researchers.",
    ],
    tags: ["Deep Learning", "CNNs", "Computer Vision", "Data Augmentation", "FastAPI"],
  },
];

export default function Publications() {
  return (
    <Box py={[8, 12]}>
      <Container maxW="7xl" px={[4, 6, 8]}>
        <VStack spacing={8} align="stretch">
          {PUBLICATIONS.map((pub, idx) => (
            <Box
              key={idx}
              rounded="2xl"
              bg="#FFFFFF"
              border="1px solid"
              borderColor="#E2E8F0"
              p={[5, 6, 8]}
              boxShadow="0 4px 20px -2px rgba(15, 23, 42, 0.05)"
              transition="all 0.3s ease"
              _hover={{
                borderColor: pub.badgeColor === "blue" ? "#93C5FD" : "#DDD6FE",
                boxShadow: "0 14px 40px -5px rgba(37, 99, 235, 0.1)",
              }}
            >
              <HStack
                spacing={6}
                direction={["column", "column", "row"]}
                align={["flex-start", "flex-start", "center"]}
                justify="space-between"
                wrap="wrap"
                borderBottom="1px solid"
                borderColor="#F1F5F9"
                pb={4}
                mb={5}
              >
                <VStack align="flex-start" spacing={1.5} maxW={["100%", "100%", "75%"]}>
                  <HStack spacing={2} wrap="wrap">
                    <Badge
                      colorScheme={pub.badgeColor}
                      rounded="md"
                      px={2.5}
                      py={0.5}
                      fontSize="xs"
                      fontFamily="mono"
                    >
                      {pub.conference}
                    </Badge>
                    <Badge
                      variant="outline"
                      borderColor="#CBD5E1"
                      color="#475569"
                      rounded="md"
                      px={2}
                      py={0.5}
                      fontSize="10px"
                      fontFamily="mono"
                    >
                      {pub.publisher}
                    </Badge>
                  </HStack>

                  <Text fontSize={["lg", "xl", "2xl"]} fontWeight="800" color="#0F172A" lineHeight="1.3">
                    {pub.title}
                  </Text>

                  <Text fontSize="xs" color="#64748B">
                    {pub.conferenceFull}
                  </Text>
                </VStack>

                <VStack align={["flex-start", "flex-start", "flex-end"]} spacing={1}>
                  <HStack spacing={2} color="#0284C7" fontSize="xs" fontFamily="mono">
                    <FontAwesomeIcon icon={faGlobeAmericas} />
                    <Text>{pub.location}</Text>
                  </HStack>
                  <Text fontSize="xs" color="#64748B" fontFamily="mono">
                    {pub.date}
                  </Text>
                  <Badge colorScheme="orange" variant="subtle" rounded="md" px={2} py={0.5} fontSize="10px">
                    ★ {pub.citations}
                  </Badge>
                </VStack>
              </HStack>

              {/* Main Body */}
              <SimpleGrid columns={[1, 1, 12]} spacing={6} align="center">
                <Box gridColumn={["span 12", "span 12", "span 3"]} textAlign="center">
                  <Box
                    p={3}
                    rounded="xl"
                    bg="#F8FAFC"
                    border="1px solid"
                    borderColor="#E2E8F0"
                    display="inline-block"
                  >
                    <Image
                      src={pub.image}
                      alt={pub.title}
                      maxH="130px"
                      maxW="200px"
                      objectFit="contain"
                      rounded="lg"
                    />
                  </Box>
                </Box>

                <Box gridColumn={["span 12", "span 12", "span 9"]}>
                  <List spacing={2.5} mb={4}>
                    {pub.description.map((pt, pIdx) => (
                      <ListItem
                        key={pIdx}
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
                        <Text as="span">{pt}</Text>
                      </ListItem>
                    ))}
                  </List>

                  <HStack spacing={2} wrap="wrap" mb={4}>
                    {pub.tags.map((t) => (
                      <Badge
                        key={t}
                        rounded="md"
                        px={2}
                        py={0.5}
                        fontSize="10px"
                        fontFamily="mono"
                        bg="#F1F5F9"
                        color="#475569"
                        border="1px solid"
                        borderColor="#E2E8F0"
                      >
                        {t}
                      </Badge>
                    ))}
                  </HStack>

                  <HStack justify={["flex-start", "flex-start", "flex-end"]}>
                    <Button
                      as="a"
                      href={pub.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      height="36px"
                      px={4}
                      rounded="lg"
                      bg="linear-gradient(135deg, #2563EB, #1D4ED8)"
                      color="white"
                      fontWeight="700"
                      fontSize="xs"
                      rightIcon={<ExternalLinkIcon />}
                      boxShadow="0 2px 10px rgba(37, 99, 235, 0.25)"
                      _hover={{
                        bg: "linear-gradient(135deg, #1D4ED8, #1E40AF)",
                        transform: "translateY(-1px)",
                      }}
                    >
                      Read Paper on {pub.publisher}
                    </Button>
                  </HStack>
                </Box>
              </SimpleGrid>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}
