import React from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Badge,
  List,
  ListItem,
  ListIcon,
  Image,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faServer,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import crestLogo from "../static/images/crest.png";
import sparksLogo from "../static/images/sparks.png";

const EXPERIENCES = [
  {
    company: "Crest Data Systems",
    role: "DevOps Engineer (E3)",
    duration: "July 2024 – Present",
    location: "Ahmedabad, Gujarat, India",
    type: "Full-Time",
    logo: crestLogo,
    badgeColor: "blue",
    highlightBadge: "SME for Observability & Monitoring",
    summary:
      "Driving platform reliability and intelligent automation as a Platform Engineering - Site Reliability Engineer (PESRE). Architected Kubernetes infrastructure, large-scale observability, and pioneering AI-driven SRE systems.",
    projects: [
      {
        name: "Project 1: PLBaaS (Polaris Load Balancer as a Service)",
        icon: faServer,
        color: "#2563EB",
        roleTag: "Platform Engineering - Site Reliability Engineer (PESRE)",
        points: [
          "Architected and deployed Kubernetes-based microservices with dynamic, user-facing production interfaces.",
          "Rolled out comprehensive monitoring dashboards using Grafana, delivering real-time telemetry into 100+ microservices across production environments.",
          "Led code reviews and sprint planning for the DevOps team, ensuring delivery of clean, maintainable, and scalable infrastructure code.",
          "Handled weekly on-call rotations responding to critical production incidents, maintaining zero downtime across key microservices through rapid troubleshooting and automated remediation.",
          "Recognized as SME (Subject Matter Expert) for Observability & Monitoring, mentoring 5+ new engineers on best practices with Icinga, Prometheus, Grafana, and alert tuning strategies.",
        ],
        tags: ["Kubernetes", "Grafana", "Prometheus", "Icinga", "AWS", "Microservices", "On-Call SRE"],
      },
      {
        name: "Project 2: AISRE (AI-Powered Site Reliability Engineering)",
        icon: faRobot,
        color: "#7C3AED",
        roleTag: "AI SRE & LLM Automation Architect",
        points: [
          "Built AI-driven SRE assistant combining DevOps automation with LLM capabilities to reduce incident diagnosis time and enable natural language infrastructure queries.",
          "Designed and implemented internal Model Context Protocol (MCP) servers enabling LLM-based automated incident analysis and real-time SRE support.",
          "Integrated LLM workflows to auto-generate Incident RCA reports, summarize complex distributed logs, and recommend fixes using natural language prompts, reducing manual analysis time from hours to minutes.",
          "Built intelligent chatbot features to fetch graphs, traces, and plots directly from Grafana/ElasticSearch, eliminating manual dashboard navigation.",
          "Leveraged FAISS vector database, OpenAI APIs, and SBERT embeddings for contextual retrieval during critical incidents.",
        ],
        tags: ["Model Context Protocol (MCP)", "LangChain", "OpenAI APIs", "FAISS", "SBERT", "ElasticSearch", "Automated RCA"],
      },
    ],
  },
  {
    company: "Crest Data Systems",
    role: "Site Reliability Engineer Intern",
    duration: "January 2024 – June 2024",
    location: "Ahmedabad, Gujarat, India",
    type: "Internship",
    logo: crestLogo,
    badgeColor: "cyan",
    highlightBadge: "Infrastructure Automation",
    summary:
      "Automated core cloud infrastructure provisioning and engineered reliable continuous integration & delivery pipelines.",
    projects: [
      {
        name: "Cloud Infrastructure & CI/CD Pipelines",
        icon: faServer,
        color: "#0284C7",
        points: [
          "Automated AWS infrastructure provisioning and standardized Linux/Windows server configurations using Shell and PowerShell scripts.",
          "Built production-grade CI/CD pipelines using Terraform + Jenkins with auto-scaling and load-balancing capabilities.",
          "Created detailed runbooks and documentation for infrastructure deployments, significantly improving deployment reliability and reducing human errors.",
          "Implemented monitoring solutions and alerting mechanisms for distributed systems.",
        ],
        tags: ["Terraform", "AWS", "Jenkins", "CI/CD", "Shell / PowerShell", "Linux Automation"],
      },
    ],
  },
  {
    company: "Sparks To Ideas",
    role: "Machine Learning Engineer Intern",
    duration: "June 2023 – July 2023",
    location: "Ahmedabad, Gujarat, India",
    type: "Internship",
    logo: sparksLogo,
    badgeColor: "purple",
    highlightBadge: "Computer Vision & Deep Learning",
    summary:
      "Trained high-accuracy convolutional neural networks and deployed production inference APIs.",
    projects: [
      {
        name: "Deep Learning Model Optimization & Inference",
        icon: faRobot,
        color: "#E11D48",
        points: [
          "Trained and optimized ResNet-50 model for image classification, improving accuracy from 87% to 92% through hyperparameter tuning and data augmentation techniques.",
          "Cleaned and preprocessed datasets using labelImg and custom Python scripts, processing 10K+ images and improving detection quality.",
          "Integrated trained ML model into Flask API for live inference and web applications.",
        ],
        tags: ["Python", "ResNet-50", "TensorFlow", "OpenCV", "Flask", "Data Augmentation"],
      },
    ],
  },
];

export default function Works() {
  return (
    <Box py={[8, 12]}>
      <Container maxW="7xl" px={[4, 6, 8]}>
        <VStack spacing={8} align="stretch">
          {EXPERIENCES.map((exp, idx) => (
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
                borderColor: exp.badgeColor === "blue" ? "#93C5FD" : "#DDD6FE",
                boxShadow: "0 10px 30px -4px rgba(37, 99, 235, 0.1)",
              }}
            >
              {/* Header: Company, Role & Duration */}
              <HStack
                spacing={4}
                align="flex-start"
                justify="space-between"
                wrap="wrap"
                borderBottom="1px solid"
                borderColor="#F1F5F9"
                pb={5}
                mb={6}
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
                      src={exp.logo}
                      alt={exp.company}
                      maxW="100%"
                      maxH="100%"
                      objectFit="contain"
                    />
                  </Box>

                  <Box>
                    <HStack spacing={2} wrap="wrap">
                      <Text fontSize={["lg", "xl", "2xl"]} fontWeight="800" color="#0F172A">
                        {exp.role}
                      </Text>
                      <Badge
                        colorScheme={exp.badgeColor}
                        rounded="md"
                        px={2}
                        py={0.5}
                        fontSize="xs"
                        fontFamily="mono"
                      >
                        {exp.type}
                      </Badge>
                    </HStack>

                    <Text fontSize={["sm", "md"]} color="#2563EB" fontWeight="600">
                      {exp.company} • {exp.location}
                    </Text>
                  </Box>
                </HStack>

                <VStack align={["flex-start", "flex-start", "flex-end"]} spacing={1} pt={[2, 2, 0]}>
                  <Badge
                    fontFamily="mono"
                    fontSize="xs"
                    px={3}
                    py={1}
                    rounded="lg"
                    bg="rgba(37, 99, 235, 0.08)"
                    color="#1D4ED8"
                    border="1px solid #BFDBFE"
                  >
                    {exp.duration}
                  </Badge>

                  {exp.highlightBadge && (
                    <Text fontSize="xs" fontWeight="700" color="#D97706" fontFamily="mono">
                      ★ {exp.highlightBadge}
                    </Text>
                  )}
                </VStack>
              </HStack>

              {/* Summary */}
              <Text fontSize="sm" color="#475569" mb={6} lineHeight="1.6">
                {exp.summary}
              </Text>

              {/* Projects Breakdown */}
              <VStack spacing={6} align="stretch">
                {exp.projects.map((proj, pIdx) => (
                  <Box
                    key={pIdx}
                    p={[4, 5, 6]}
                    rounded="xl"
                    bg="#F8FAFC"
                    border="1px solid"
                    borderColor="#E2E8F0"
                    transition="all 0.2s ease"
                    _hover={{
                      borderColor: proj.color,
                      bg: "#FFFFFF",
                      boxShadow: "0 4px 15px -2px rgba(15, 23, 42, 0.06)",
                    }}
                  >
                    <HStack spacing={3} mb={3} wrap="wrap">
                      <Box
                        w="32px"
                        h="32px"
                        rounded="lg"
                        bg={`${proj.color}15`}
                        border="1px solid"
                        borderColor={`${proj.color}35`}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color={proj.color}
                      >
                        <FontAwesomeIcon icon={proj.icon} />
                      </Box>
                      <Text fontSize={["md", "lg"]} fontWeight="700" color="#0F172A">
                        {proj.name}
                      </Text>
                      {proj.roleTag && (
                        <Badge
                          rounded="md"
                          px={2}
                          py={0.5}
                          fontSize="10px"
                          fontFamily="mono"
                          colorScheme="blue"
                          variant="subtle"
                        >
                          {proj.roleTag}
                        </Badge>
                      )}
                    </HStack>

                    {/* Bullet Points */}
                    <List spacing={3} my={3}>
                      {proj.points.map((pt, ptIdx) => (
                        <ListItem
                          key={ptIdx}
                          fontSize={["xs", "sm"]}
                          color="#334155"
                          display="flex"
                          alignItems="flex-start"
                        >
                          <ListIcon
                            as={FontAwesomeIcon}
                            icon={faCheckCircle}
                            color={proj.color}
                            mt="3px"
                          />
                          <Text as="span" lineHeight="1.6">
                            {pt}
                          </Text>
                        </ListItem>
                      ))}
                    </List>

                    {/* Tech Badges */}
                    <HStack spacing={2} wrap="wrap" pt={3}>
                      {proj.tags.map((tag) => (
                        <Badge
                          key={tag}
                          rounded="md"
                          px={2}
                          py={0.5}
                          fontSize="10px"
                          fontFamily="mono"
                          bg="#FFFFFF"
                          color="#475569"
                          border="1px solid"
                          borderColor="#CBD5E1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}
