import React, { useState } from "react";
import { Box, Flex, HStack, Text, Button } from "@chakra-ui/react";

const TERMINAL_COMMANDS = {
  whoami: {
    command: "sre-cli inspect engineer --name 'Sachin Vaghari'",
    output: [
      "{",
      '  "name": "Sachin Vaghari",',
      '  "role": "DevOps Engineer (E3)",',
      '  "company": "Crest Data Systems (Ahmedabad, India)",',
      '  "experience": "2+ Years Production Cloud & SRE",',
      '  "specialization": ["Kubernetes", "AWS IaC", "Observability (SME)", "CI/CD Automation"],',
      '  "education": "B.Tech in Computer Science (Nirma University)",',
      '  "publications": 3,',
      '  "dsa_solved": "1200+ Problems Solved on LeetCode"',
      "}",
    ],
  },
  "k8s-cluster": {
    command: "kubectl get microservices --namespace prod-plbaas",
    output: [
      "NAME                    STATUS   REPLICAS   MONITORING    UPTIME",
      "plbaas-api-gateway      Running  8/8        Grafana/Alerts 99.99%",
      "traffic-distributor     Running  12/12      Prometheus     100.00%",
      "health-check-daemon     Running  4/4        Icinga/Active  99.98%",
      "telemetry-exporter      Running  6/6        CloudWatch     99.99%",
      "----------------------------------------------------------------",
      "TOTAL PRODUCTION MICROSERVICES MONITORED: 100+ ACTIVE SERVICES",
      "SME RECOGNITION: Observability & Monitoring Team Lead at Crest Data",
    ],
  },
  "iac-deploy": {
    command: "terraform plan -out=tfplan -target=module.infrastructure",
    output: [
      "Terraform used the selected providers to generate the execution plan:",
      "[+] aws_vpc.production_vpc (CIDR 10.0.0.0/16, Multi-AZ)",
      "[+] aws_eks_cluster.prod_k8s (Kubernetes v1.28 Managed Cluster)",
      "[+] aws_lb.alb_ingress (Application Load Balancer)",
      "Plan: 18 to add, 0 to change, 0 to destroy.",
      "[✓] Zero-downtime Blue-Green deployment pipeline validated.",
    ],
  },
  highlights: {
    command: "sre-cli get-achievements --summary",
    output: [
      "✦ Amazon ML Summer School '23 (Top 200 nationwide in Deep Learning/NLP)",
      "✦ Subject Matter Expert (SME) for Observability & Monitoring at Crest Data",
      "✦ 3 International Research Papers (IEEE INCIP 2025, Springer ICFEICT 2024, IEEE ICTACS 2024)",
      "✦ 1200+ Problems Solved on LeetCode",
      "✦ MINeD Hackathon Finalist | Enterprise Blue-Green IaC Deployments",
    ],
  },
};

export default function TerminalWidget() {
  const [activeTab, setActiveTab] = useState("whoami");
  const [copied, setCopied] = useState(false);

  const current = TERMINAL_COMMANDS[activeTab];

  const handleCopy = () => {
    const text = `$ ${current.command}\n${current.output.join("\n")}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      w="100%"
      rounded="2xl"
      overflow="hidden"
      bg="#0B0F19"
      border="1px solid"
      borderColor="#CBD5E1"
      boxShadow="0 20px 45px -10px rgba(15, 23, 42, 0.15), 0 4px 12px -2px rgba(15, 23, 42, 0.05)"
      fontFamily="mono"
      fontSize="xs"
      transition="all 0.3s ease"
      _hover={{
        borderColor: "#93C5FD",
        boxShadow: "0 25px 50px -10px rgba(37, 99, 235, 0.15)",
      }}
    >
      {/* Terminal Titlebar */}
      <Flex
        px={4}
        py={3}
        bg="#1E293B"
        borderBottom="1px solid"
        borderColor="whiteAlpha.100"
        align="center"
        justify="space-between"
      >
        <HStack spacing={2}>
          <Box w="11px" h="11px" rounded="full" bg="#FF5F56" />
          <Box w="11px" h="11px" rounded="full" bg="#FFBD2E" />
          <Box w="11px" h="11px" rounded="full" bg="#27C93F" />
          <Text
            ml={2}
            color="gray.300"
            fontSize="11px"
            fontWeight="600"
            display={["none", "inline"]}
          >
            sachin@crest-prod-sre: ~ (zsh)
          </Text>
        </HStack>

        {/* Tab Selection */}
        <HStack spacing={1}>
          {Object.keys(TERMINAL_COMMANDS).map((tab) => (
            <Button
              key={tab}
              size="xs"
              height="24px"
              px={2.5}
              rounded="md"
              fontSize="10px"
              fontFamily="mono"
              fontWeight="600"
              bg={activeTab === tab ? "rgba(37, 99, 235, 0.35)" : "transparent"}
              color={activeTab === tab ? "#93C5FD" : "gray.400"}
              border="1px solid"
              borderColor={activeTab === tab ? "#3B82F6" : "transparent"}
              _hover={{
                bg: "rgba(37, 99, 235, 0.2)",
                color: "white",
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}

          <Button
            size="xs"
            height="24px"
            px={2}
            rounded="md"
            fontSize="10px"
            fontFamily="mono"
            variant="ghost"
            color="gray.400"
            _hover={{ color: "white", bg: "whiteAlpha.100" }}
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </HStack>
      </Flex>

      {/* Terminal Screen Body */}
      <Box p={[4, 5]} minH="210px" overflowX="auto" bg="#0B0F19">
        {/* Prompt line */}
        <HStack spacing={2} mb={3} wrap="wrap">
          <Text color="#34D399" fontWeight="700">
            sachin@sre-cluster
          </Text>
          <Text color="gray.500">:</Text>
          <Text color="#38BDF8">~/production</Text>
          <Text color="gray.400">$</Text>
          <Text color="white" fontWeight="600">
            {current.command}
          </Text>
        </HStack>

        {/* Output */}
        <Box color="#E2E8F0" lineHeight="1.6" fontSize={["11px", "12px"]}>
          {current.output.map((line, idx) => {
            const isHighlight =
              line.includes("100+") ||
              line.includes("99.99%") ||
              line.includes("SME") ||
              line.includes("RESULT") ||
              line.includes("Amazon ML") ||
              line.includes("Published");

            return (
              <Text
                key={idx}
                color={
                  line.startsWith("[*]")
                    ? "#94A3B8"
                    : line.startsWith("[✓]")
                    ? "#34D399"
                    : isHighlight
                    ? "#38BDF8"
                    : "gray.300"
                }
                fontWeight={isHighlight ? "600" : "400"}
              >
                {line}
              </Text>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
