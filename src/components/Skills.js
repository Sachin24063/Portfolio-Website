import React, { useState } from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  SimpleGrid,
  Badge,
  Wrap,
  WrapItem,
  Button,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faChartLine,
  faRobot,
  faServer,
  faDatabase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const SKILL_CATEGORIES = [
  {
    id: "all",
    label: "All Technologies",
  },
  {
    id: "devops",
    label: "Cloud & DevOps",
    icon: faCloud,
    color: "#2563EB",
  },
  {
    id: "observability",
    label: "Observability & SRE",
    icon: faChartLine,
    color: "#059669",
  },
  {
    id: "ai",
    label: "AI, LLMs & ML",
    icon: faRobot,
    color: "#7C3AED",
  },
  {
    id: "backend",
    label: "Backend & Systems",
    icon: faServer,
    color: "#0284C7",
  },
  {
    id: "databases",
    label: "Databases & Storage",
    icon: faDatabase,
    color: "#D97706",
  },
];

const SKILL_GROUPS = [
  {
    category: "devops",
    title: "Cloud Infrastructure & DevOps",
    icon: faCloud,
    accentColor: "#2563EB",
    description: "Production Kubernetes orchestration, automated multi-tier AWS provisioning, and automated CI/CD pipelines.",
    skills: [
      { name: "Kubernetes", tag: "Microservices", level: "Production" },
      { name: "AWS (EC2, S3, RDS, VPC, Lambda, IAM)", tag: "Cloud", level: "Advanced" },
      { name: "Terraform", tag: "IaC", level: "Advanced" },
      { name: "Docker", tag: "Containers", level: "Production" },
      { name: "Helm", tag: "Orchestration", level: "Proficient" },
      { name: "Jenkins", tag: "CI/CD", level: "Production" },
      { name: "GitLab CI/CD", tag: "Automation", level: "Proficient" },
      { name: "Ansible", tag: "Config Mgmt", level: "Proficient" },
      { name: "Blue-Green Deployments", tag: "Zero Downtime", level: "Production" },
    ],
  },
  {
    category: "observability",
    title: "Observability & SRE (Subject Matter Expert)",
    icon: faChartLine,
    accentColor: "#059669",
    description: "End-to-end monitoring for 100+ microservices, automated remediation, alert tuning, and on-call rotation lead.",
    skills: [
      { name: "Grafana", tag: "Dashboards", level: "SME" },
      { name: "Prometheus", tag: "Metrics", level: "Advanced" },
      { name: "Icinga", tag: "Alerting", level: "SME" },
      { name: "AWS CloudWatch", tag: "Telemetry", level: "Advanced" },
      { name: "Root Cause Analysis (RCA)", tag: "Automated", level: "Production" },
      { name: "Alert Tuning & Runbooks", tag: "SRE", level: "SME" },
      { name: "Incident Remediation", tag: "On-Call", level: "Production" },
    ],
  },
  {
    category: "ai",
    title: "AI-Powered SRE, LLMs & Machine Learning",
    icon: faRobot,
    accentColor: "#7C3AED",
    description: "Pioneering LLM-driven operational tools, internal MCP servers for telemetry, and contextual vector search.",
    skills: [
      { name: "Model Context Protocol (MCP)", tag: "LLM Servers", level: "Advanced" },
      { name: "LangChain", tag: "LLM Agents", level: "Advanced" },
      { name: "FAISS Vector DB", tag: "Retrieval", level: "Advanced" },
      { name: "OpenAI APIs", tag: "Inference", level: "Advanced" },
      { name: "SBERT & Embeddings", tag: "NLP", level: "Advanced" },
      { name: "PyTorch & TensorFlow", tag: "Deep Learning", level: "Proficient" },
      { name: "ResNet-50 & CNNs", tag: "Computer Vision", level: "Published" },
      { name: "Hugging Face", tag: "Transformers", level: "Proficient" },
    ],
  },
  {
    category: "backend",
    title: "Backend, APIs & Microservices",
    icon: faServer,
    accentColor: "#0284C7",
    description: "High-throughput asynchronous REST APIs, real-time WebSockets, and distributed server architectures.",
    skills: [
      { name: "FastAPI", tag: "Async APIs", level: "Production" },
      { name: "Python", tag: "Core Language", level: "Expert" },
      { name: "Django & Flask", tag: "Frameworks", level: "Advanced" },
      { name: "Node.js", tag: "Backend", level: "Proficient" },
      { name: "Socket.IO", tag: "Real-time", level: "Proficient" },
      { name: "ReactJS", tag: "Frontend", level: "Proficient" },
      { name: "RESTful Architecture", tag: "APIs", level: "Production" },
    ],
  },
  {
    category: "databases",
    title: "Databases & Data Systems",
    icon: faDatabase,
    accentColor: "#D97706",
    description: "Relational, document, key-value, and vector databases optimized for enterprise reliability.",
    skills: [
      { name: "PostgreSQL", tag: "Relational", level: "Advanced" },
      { name: "MongoDB", tag: "Document", level: "Advanced" },
      { name: "Redis", tag: "In-Memory / Cache", level: "Proficient" },
      { name: "MySQL", tag: "Relational", level: "Advanced" },
      { name: "AWS DynamoDB", tag: "NoSQL", level: "Proficient" },
      { name: "Hadoop", tag: "Big Data (Basic)", level: "Basic" },
    ],
  },
  {
    category: "languages",
    title: "Programming Languages & Algorithms",
    icon: faCode,
    accentColor: "#E11D48",
    description: "Over 1200+ algorithmic problems solved with deep command of computational complexity.",
    skills: [
      { name: "Python", tag: "Primary", level: "Expert" },
      { name: "C++", tag: "Competitive / DSA", level: "Advanced" },
      { name: "Bash / Shell", tag: "Scripting", level: "Advanced" },
      { name: "JavaScript", tag: "Web", level: "Proficient" },
      { name: "SQL", tag: "Queries & Tuning", level: "Advanced" },
      { name: "Java", tag: "OOP", level: "Proficient" },
    ],
  },
];

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredGroups =
    selectedFilter === "all"
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.category === selectedFilter);

  return (
    <Box py={[10, 16]} position="relative">
      <Container maxW="7xl" px={[4, 6, 8]}>
        <VStack spacing={3} textAlign="center" mb={10}>
          <HStack
            px={3.5}
            py={1.5}
            rounded="full"
            bg="rgba(37, 99, 235, 0.08)"
            border="1px solid #BFDBFE"
          >
            <Text fontFamily="mono" fontSize="xs" fontWeight="700" color="#1D4ED8">
              ENGINEERING ARSENAL
            </Text>
          </HStack>

          <Text
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="800"
            letterSpacing="-0.02em"
            color="#0F172A"
          >
            Technical Skills & Architecture Stack
          </Text>

          <Text fontSize={["sm", "md"]} color="#64748B" maxW="2xl">
            A comprehensive breakdown of enterprise tools, cloud infrastructure, AI models,
            and observability systems utilized across production environments.
          </Text>
        </VStack>

        {/* Filter Pills */}
        <HStack
          spacing={2}
          wrap="wrap"
          justify="center"
          mb={10}
        >
          {SKILL_CATEGORIES.map((cat) => (
            <Button
              key={cat.id}
              size="sm"
              height="36px"
              px={4}
              rounded="xl"
              fontSize="xs"
              fontWeight="600"
              bg={selectedFilter === cat.id ? "rgba(37, 99, 235, 0.1)" : "#FFFFFF"}
              color={selectedFilter === cat.id ? "#1D4ED8" : "#475569"}
              border="1px solid"
              borderColor={selectedFilter === cat.id ? "#93C5FD" : "#E2E8F0"}
              boxShadow={selectedFilter === cat.id ? "0 2px 8px rgba(37, 99, 235, 0.15)" : "0 1px 3px rgba(15, 23, 42, 0.04)"}
              _hover={{
                bg: "rgba(37, 99, 235, 0.06)",
                color: "#0F172A",
                borderColor: "#93C5FD",
              }}
              onClick={() => setSelectedFilter(cat.id)}
            >
              {cat.icon && (
                <FontAwesomeIcon icon={cat.icon} style={{ marginRight: "6px" }} />
              )}
              {cat.label}
            </Button>
          ))}
        </HStack>

        {/* Skill Category Cards */}
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={6}>
          {filteredGroups.map((group, idx) => (
            <Box
              key={idx}
              p={6}
              rounded="2xl"
              bg="#FFFFFF"
              border="1px solid"
              borderColor="#E2E8F0"
              boxShadow="0 4px 20px -2px rgba(15, 23, 42, 0.05)"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                borderColor: group.accentColor,
                boxShadow: `0 14px 35px -5px rgba(15, 23, 42, 0.08)`,
              }}
            >
              <VStack align="flex-start" spacing={4}>
                <HStack spacing={3}>
                  <Box
                    w="40px"
                    h="40px"
                    rounded="xl"
                    bg={`${group.accentColor}12`}
                    border="1px solid"
                    borderColor={`${group.accentColor}30`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color={group.accentColor}
                  >
                    <FontAwesomeIcon icon={group.icon} size="lg" />
                  </Box>
                  <Box>
                    <Text fontWeight="700" fontSize="md" color="#0F172A">
                      {group.title}
                    </Text>
                  </Box>
                </HStack>

                <Text fontSize="xs" color="#475569" minH="36px" lineHeight="1.5">
                  {group.description}
                </Text>

                <Wrap spacing={2} pt={2}>
                  {group.skills.map((skill, sIdx) => (
                    <WrapItem key={sIdx}>
                      <HStack
                        px={2.5}
                        py={1.5}
                        rounded="lg"
                        bg="#F8FAFC"
                        border="1px solid"
                        borderColor="#E2E8F0"
                        spacing={2}
                        _hover={{
                          bg: "#F1F5F9",
                          borderColor: group.accentColor,
                        }}
                      >
                        <Text fontSize="xs" fontWeight="600" color="#1E293B">
                          {skill.name}
                        </Text>
                        <Badge
                          fontSize="9px"
                          fontFamily="mono"
                          rounded="md"
                          px={1.5}
                          py={0.2}
                          colorScheme={
                            skill.level === "SME"
                              ? "green"
                              : skill.level === "Production"
                              ? "blue"
                              : skill.level === "Expert"
                              ? "purple"
                              : "teal"
                          }
                          variant="subtle"
                        >
                          {skill.tag}
                        </Badge>
                      </HStack>
                    </WrapItem>
                  ))}
                </Wrap>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
