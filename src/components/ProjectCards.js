import React, { useState } from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Badge,
  Button,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PROJECTS = [
  {
    name: "DevOpsGPT - On-Call AI Assistant",
    category: "ai",
    categoryLabel: "AI & LLM",
    badge: "Flagship AI Project",
    badgeColor: "purple",
    skills: ["React", "FastAPI", "OpenAI", "FAISS", "LangChain", "SBERT"],
    description: [
      "Built an AI-powered assistant for on-call workflows with contextual vector search and automated incident responses, drastically reducing triage latency.",
      "Integrated with internal knowledge bases using vector embeddings for intelligent natural language query resolution.",
      "Engineered automated log summarization and runbook recommendations during critical production outages.",
    ],
    github: "https://github.com/Sachin24063",
    featured: true,
  },
  {
    name: "Automated GST Invoice Generation Platform",
    category: "fullstack",
    categoryLabel: "Full Stack",
    badge: "Production System",
    badgeColor: "blue",
    skills: ["FastAPI", "React", "MongoDB", "Socket.IO", "PDFKit"],
    description: [
      "Developed high-concurrency fullstack platform automating GST billing with real-time bookings and secure invoice generation APIs.",
      "Handles 500+ transactions daily with real-time WebSocket state synchronization and instant automated PDF generation.",
      "Built resilient MongoDB schema with optimized indexing for rapid financial ledger queries.",
    ],
    github: "https://github.com/Sachin24063",
    featured: true,
  },
  {
    name: "Three-Tier App Deployment with IaC & CI/CD",
    category: "devops",
    categoryLabel: "Cloud & DevOps",
    badge: "Cloud Architecture",
    badgeColor: "cyan",
    skills: ["Terraform", "AWS (EC2, VPC, ALB, ASG, RDS)", "Jenkins", "Docker"],
    description: [
      "Automated deployment of scalable 3-tier enterprise application using Infrastructure as Code (IaC) with Terraform.",
      "Architected secure AWS infrastructure including custom VPC, public/private subnets, Application Load Balancers, and Auto Scaling Groups.",
      "Implemented automated Blue-Green deployment pipeline with automated health checking and zero-downtime rollback capabilities.",
    ],
    github: "https://github.com/Sachin24063/3-Tier-App-Deployment-Using-Infrastructure-as-code",
    featured: true,
  },
  {
    name: "FaceWave: Women Face Recognition System",
    category: "research",
    categoryLabel: "Research & Vision",
    badge: "Springer ICFEICT '24",
    badgeColor: "pink",
    skills: ["Python", "OpenCV", "Haar Cascade", "Wavelet Transform", "SVM", "Flask"],
    description: [
      "Published research paper at 5th ICFEICT (Beijing, China) indexed in Springer.",
      "Collected 1000+ images of female cricketers, utilizing OpenCV, Haar Cascade, and Wavelet Transform for feature extraction; trained SVC model with 84% accuracy.",
      "Engineered a Python Flask server with clean web interface for seamless Base64 image payload transfer.",
    ],
    github: "https://github.com/Sachin24063/Top-5-Women-Face-Recognization-System-Using-SVM",
    paperLink: "https://link.springer.com/chapter/10.1007/978-981-96-5318-8_50",
  },
  {
    name: "Bird Species Identification with Custom CNN",
    category: "research",
    categoryLabel: "Research & Vision",
    badge: "IEEE ICTACS '24",
    badgeColor: "green",
    skills: ["Deep Learning", "CNN", "FastAPI", "Node.js", "Data Augmentation"],
    description: [
      "Published research paper at 4th IEEE ICTACS 2024 (Tashkent, Uzbekistan).",
      "Engineered custom CNN model classifying 15 bird species across 4,447 images, achieving 89.58% test accuracy with hyperparameter optimization.",
      "Created a drag-and-drop classification interface using FastAPI and Node.js for real-time model inference.",
    ],
    github: "https://github.com/Sachin24063/Bird-Image-Classifier/tree/main?tab=readme-ov-file",
    paperLink: "https://ieeexplore.ieee.org/document/10840487",
  },
  {
    name: "Tomato Leaf Diseases Classification using CNN",
    category: "research",
    categoryLabel: "Research & Vision",
    badge: "Computer Vision",
    badgeColor: "teal",
    skills: ["Python", "Deep Learning", "CNN", "FastAPI", "React.js"],
    description: [
      "Trained a high-accuracy CNN model with 94% accuracy on 16,012 annotated tomato leaf images from Kaggle.",
      "Deployed via FastAPI backend with automated image preprocessing and Postman API contract validation.",
      "Crafted an interactive React.js drag-and-drop web portal for live agricultural disease diagnosis.",
    ],
    github: "https://github.com/Sachin24063/Tomato-Leaf-Disease-Classification-Using-CNN",
  },
  {
    name: "News Headline Generation with Bi-LSTM",
    category: "ai",
    categoryLabel: "AI & NLP",
    badge: "Natural Language",
    badgeColor: "purple",
    skills: ["Bi-LSTM", "Python", "TensorFlow", "GloVe Embeddings", "NLP"],
    description: [
      "Constructed a custom three-layered Bi-LSTM neural network using TensorFlow on news article datasets.",
      "Utilized pre-trained GloVe word2Vec embeddings for semantic feature representation, creating a unique sequence-to-sequence generation model.",
    ],
    github: "https://github.com/Sachin24063/News-Headline-Generation-Using-News-Article-With-the-Help-Of-Bi-LSTM",
  },
  {
    name: "SLR Parser & String Stack Trace Demonstrator",
    category: "fullstack",
    categoryLabel: "Compiler Systems",
    badge: "Compilers",
    badgeColor: "orange",
    skills: ["Python", "Django", "Compiler Construction", "Algorithms"],
    description: [
      "Developed web application demonstrating Bottom-Up non-recursive SLR parsing algorithms used by modern compilers.",
      "Built dynamic step-by-step stack tracer showing reduction, shift, and accept parser actions in real time.",
    ],
    github: "https://github.com/Sachin24063/SLR-Parser-Using-Django",
  },
];

const FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & LLM" },
  { id: "devops", label: "Cloud & DevOps" },
  { id: "research", label: "Research & Vision" },
  { id: "fullstack", label: "Full Stack" },
];

export default function ProjectCards() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filtered =
    selectedFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <Box py={[8, 12]}>
      <Container maxW="7xl" px={[4, 6, 8]}>
        {/* Category Filters */}
        <HStack spacing={2} wrap="wrap" justify="center" mb={10}>
          {FILTERS.map((f) => (
            <Button
              key={f.id}
              size="sm"
              height="38px"
              px={4}
              rounded="xl"
              fontSize="xs"
              fontWeight="600"
              bg={selectedFilter === f.id ? "rgba(37, 99, 235, 0.1)" : "#FFFFFF"}
              color={selectedFilter === f.id ? "#1D4ED8" : "#475569"}
              border="1px solid"
              borderColor={selectedFilter === f.id ? "#93C5FD" : "#E2E8F0"}
              boxShadow={selectedFilter === f.id ? "0 2px 8px rgba(37, 99, 235, 0.15)" : "0 1px 3px rgba(15, 23, 42, 0.04)"}
              _hover={{
                bg: "rgba(37, 99, 235, 0.06)",
                color: "#0F172A",
                borderColor: "#93C5FD",
              }}
              onClick={() => setSelectedFilter(f.id)}
            >
              {f.label}
            </Button>
          ))}
        </HStack>

        {/* Project Cards Grid */}
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={6}>
          {filtered.map((proj, idx) => (
            <Box
              key={idx}
              rounded="2xl"
              bg="#FFFFFF"
              border="1px solid"
              borderColor="#E2E8F0"
              p={6}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              boxShadow="0 4px 20px -2px rgba(15, 23, 42, 0.05)"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                borderColor: "#93C5FD",
                boxShadow: "0 14px 35px -5px rgba(37, 99, 235, 0.12)",
              }}
            >
              <VStack align="flex-start" spacing={3}>
                <HStack justify="space-between" w="100%" wrap="wrap">
                  <Badge
                    colorScheme={proj.badgeColor}
                    rounded="md"
                    px={2}
                    py={0.5}
                    fontSize="10px"
                    fontFamily="mono"
                  >
                    {proj.badge}
                  </Badge>
                  <Text fontSize="11px" color="#64748B" fontFamily="mono">
                    {proj.categoryLabel}
                  </Text>
                </HStack>

                <Text fontSize="lg" fontWeight="700" color="#0F172A" lineHeight="1.3">
                  {proj.name}
                </Text>

                {/* Tech Pills */}
                <HStack wrap="wrap" spacing={1.5} py={1}>
                  {proj.skills.map((s) => (
                    <Badge
                      key={s}
                      rounded="md"
                      px={2}
                      py={0.5}
                      fontSize="10px"
                      fontFamily="mono"
                      bg="#F1F5F9"
                      color="#334155"
                      border="1px solid"
                      borderColor="#E2E8F0"
                    >
                      {s}
                    </Badge>
                  ))}
                </HStack>

                {/* Bullet Points */}
                <List spacing={2.5} my={2}>
                  {proj.description.map((desc, dIdx) => (
                    <ListItem
                      key={dIdx}
                      fontSize="xs"
                      color="#334155"
                      display="flex"
                      alignItems="flex-start"
                      lineHeight="1.5"
                    >
                      <ListIcon
                        as={FontAwesomeIcon}
                        icon={faCheck}
                        color="#2563EB"
                        mt="3px"
                        fontSize="10px"
                      />
                      <Text as="span">{desc}</Text>
                    </ListItem>
                  ))}
                </List>
              </VStack>

              {/* Action Buttons */}
              <Box pt={4} mt={2} borderTop="1px solid" borderColor="#F1F5F9">
                <HStack spacing={2} justify="flex-end">
                  {proj.paperLink && (
                    <Button
                      as="a"
                      href={proj.paperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="xs"
                      height="32px"
                      px={3}
                      rounded="lg"
                      variant="outline"
                      borderColor="#DDD6FE"
                      color="#7C3AED"
                      fontSize="11px"
                      fontWeight="600"
                      _hover={{ bg: "rgba(124, 58, 237, 0.08)", borderColor: "#7C3AED" }}
                    >
                      Paper ↗
                    </Button>
                  )}

                  <Button
                    as="a"
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="xs"
                    height="32px"
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
                    GitHub
                  </Button>
                </HStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {/* See More on GitHub */}
        <Box pt={12} textAlign="center">
          <Button
            as="a"
            href="https://github.com/Sachin24063?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            height="44px"
            px={6}
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
            Explore All 25+ Repositories on GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
