import React, { useState } from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
  faCopy,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
    toast({
      title: "Copied to clipboard!",
      description: text,
      status: "success",
      duration: 2500,
      isClosable: true,
      position: "bottom-right",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = "Name is required";
    if (!formData.user_email.trim()) newErrors.user_email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.user_email))
      newErrors.user_email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send("my_portfolio", "template_hikx8zs", formData, {
        publicKey: "-DXKwYOr_TcXDRoH9",
      })
      .then(
        () => {
          setIsSubmitting(false);
          toast({
            title: "Message Sent!",
            description: "Thanks for reaching out! I will get back to you shortly.",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          setIsSubmitting(false);
          console.error("EmailJS Error:", error);
          toast({
            title: "Error Sending Message",
            description: "Could not send message via form. Please email directly at sachinkumar95121@gmail.com",
            status: "error",
            duration: 6000,
            isClosable: true,
            position: "top",
          });
        }
      );
  };

  return (
    <Box py={[8, 12]}>
      <Container maxW="7xl" px={[4, 6, 8]}>
        <SimpleGrid columns={[1, 1, 12]} spacing={8}>
          {/* Left Column: Contact Info Cards */}
          <Box gridColumn={["span 12", "span 12", "span 5"]}>
            <VStack spacing={6} align="stretch">
              <Box
                p={6}
                rounded="2xl"
                bg="#FFFFFF"
                border="1px solid"
                borderColor="#E2E8F0"
                boxShadow="0 4px 20px -2px rgba(15, 23, 42, 0.05)"
              >
                <VStack align="flex-start" spacing={5}>
                  <Box>
                    <HStack
                      px={3}
                      py={1}
                      rounded="full"
                      bg="rgba(37, 99, 235, 0.08)"
                      border="1px solid #BFDBFE"
                      w="fit-content"
                      mb={2}
                    >
                      <Text fontFamily="mono" fontSize="xs" fontWeight="700" color="#1D4ED8">
                        LET'S CONNECT
                      </Text>
                    </HStack>
                    <Text fontSize="2xl" fontWeight="800" color="#0F172A">
                      Get In Touch
                    </Text>
                    <Text fontSize="xs" color="#64748B" mt={1}>
                      Open to engineering discussions, cloud infrastructure consulting, and high-impact DevOps & SRE opportunities.
                    </Text>
                  </Box>

                  {/* Email Card */}
                  <Box
                    p={4}
                    rounded="xl"
                    bg="#F8FAFC"
                    border="1px solid"
                    borderColor="#E2E8F0"
                    w="100%"
                  >
                    <HStack justify="space-between">
                      <HStack spacing={3}>
                        <Box
                          w="36px"
                          h="36px"
                          rounded="lg"
                          bg="rgba(37, 99, 235, 0.1)"
                          color="#2563EB"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <FontAwesomeIcon icon={faEnvelope} />
                        </Box>
                        <Box>
                          <Text fontSize="11px" color="#64748B" fontFamily="mono">
                            DIRECT EMAIL
                          </Text>
                          <Link
                            href="mailto:sachinkumar95121@gmail.com"
                            fontSize="xs"
                            fontWeight="600"
                            color="#0F172A"
                            _hover={{ color: "#2563EB" }}
                          >
                            sachinkumar95121@gmail.com
                          </Link>
                        </Box>
                      </HStack>
                      <Button
                        size="xs"
                        variant="ghost"
                        color={copiedEmail ? "#059669" : "#64748B"}
                        onClick={() => handleCopy("sachinkumar95121@gmail.com")}
                        _hover={{ color: "#0F172A", bg: "blackAlpha.50" }}
                      >
                        <FontAwesomeIcon icon={copiedEmail ? faCheck : faCopy} />
                      </Button>
                    </HStack>
                  </Box>

                  {/* Location Card */}
                  <Box
                    p={4}
                    rounded="xl"
                    bg="#F8FAFC"
                    border="1px solid"
                    borderColor="#E2E8F0"
                    w="100%"
                  >
                    <HStack spacing={3}>
                      <Box
                        w="36px"
                        h="36px"
                        rounded="lg"
                        bg="rgba(124, 58, 237, 0.1)"
                        color="#7C3AED"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </Box>
                      <Box>
                        <Text fontSize="11px" color="#64748B" fontFamily="mono">
                          LOCATION
                        </Text>
                        <Text fontSize="xs" fontWeight="600" color="#0F172A">
                          Ahmedabad, Gujarat, India (IST / UTC+5:30)
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
            </VStack>
          </Box>

          {/* Right Column: Contact Message Form */}
          <Box gridColumn={["span 12", "span 12", "span 7"]}>
            <Box
              p={[6, 8]}
              rounded="2xl"
              bg="#FFFFFF"
              border="1px solid"
              borderColor="#E2E8F0"
              boxShadow="0 4px 20px -2px rgba(15, 23, 42, 0.05)"
            >
              <VStack align="flex-start" spacing={5} as="form" onSubmit={handleSubmit}>
                <Box>
                  <Text fontSize="2xl" fontWeight="800" color="#0F172A">
                    Send a Direct Message
                  </Text>
                  <Text fontSize="xs" color="#64748B" mt={1}>
                    Fill out the form below and I will get back to you as soon as possible.
                  </Text>
                </Box>

                <FormControl isInvalid={!!errors.user_name}>
                  <FormLabel fontSize="xs" color="#334155" fontWeight="600" fontFamily="mono">
                    YOUR NAME *
                  </FormLabel>
                  <Input
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    bg="#F8FAFC"
                    border="1px solid"
                    borderColor="#CBD5E1"
                    color="#0F172A"
                    fontSize="sm"
                    rounded="xl"
                    _hover={{ borderColor: "#93C5FD" }}
                    _focus={{ borderColor: "#2563EB", boxShadow: "0 0 0 1px #2563EB", bg: "#FFFFFF" }}
                  />
                  <FormErrorMessage fontSize="xs">{errors.user_name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.user_email}>
                  <FormLabel fontSize="xs" color="#334155" fontWeight="600" fontFamily="mono">
                    YOUR EMAIL *
                  </FormLabel>
                  <Input
                    name="user_email"
                    type="email"
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    bg="#F8FAFC"
                    border="1px solid"
                    borderColor="#CBD5E1"
                    color="#0F172A"
                    fontSize="sm"
                    rounded="xl"
                    _hover={{ borderColor: "#93C5FD" }}
                    _focus={{ borderColor: "#2563EB", boxShadow: "0 0 0 1px #2563EB", bg: "#FFFFFF" }}
                  />
                  <FormErrorMessage fontSize="xs">{errors.user_email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.message}>
                  <FormLabel fontSize="xs" color="#334155" fontWeight="600" fontFamily="mono">
                    YOUR MESSAGE *
                  </FormLabel>
                  <Textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Sachin, let's discuss..."
                    bg="#F8FAFC"
                    border="1px solid"
                    borderColor="#CBD5E1"
                    color="#0F172A"
                    fontSize="sm"
                    rounded="xl"
                    _hover={{ borderColor: "#93C5FD" }}
                    _focus={{ borderColor: "#2563EB", boxShadow: "0 0 0 1px #2563EB", bg: "#FFFFFF" }}
                  />
                  <FormErrorMessage fontSize="xs">{errors.message}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                  w="100%"
                  height="46px"
                  rounded="xl"
                  bg="linear-gradient(135deg, #2563EB, #1D4ED8)"
                  color="white"
                  fontWeight="700"
                  fontSize="sm"
                  rightIcon={<FontAwesomeIcon icon={faPaperPlane} />}
                  boxShadow="0 4px 15px -2px rgba(37, 99, 235, 0.35)"
                  _hover={{
                    bg: "linear-gradient(135deg, #1D4ED8, #1E40AF)",
                    transform: "translateY(-1px)",
                  }}
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}