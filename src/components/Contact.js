import { Box, Text, Link, Button, Stack, VStack, HStack, FormControl,
  FormLabel, FormErrorMessage, Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react';
import { EmailIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};
    if (!formData.user_name) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.user_email) {
      validationErrors.email = 'Email is required';
    }
    if (!formData.message) {
      validationErrors.message = 'Message is required';
    }

    setErrors(validationErrors);

    // Submit form data
    if (Object.keys(validationErrors).length === 0) {

      // console.log(formData)

      emailjs
        .send('my_portfolio', 'template_hikx8zs', formData, {
          publicKey: '-DXKwYOr_TcXDRoH9',
        })
        .then(
          () => {
            alert('Form submitted');
            setFormData({ user_name: '', user_email: '', message: '' });
          },
          (error) => {
            alert('Error in submitting the form');
            console.log(error.text);
          },
      );
    }
  };

  return (
    <Box pl={8} pr={[8, 8, 0]} w="100%" align="center">
      <Box maxW="lg" bg="white" borderRadius="xl" border="2px" borderColor="blue.900" p={8} color="blue.900">

        <Text mb={5} fontFamily="paytone" align="center" fontSize={["xl", "xl", "2xl", "3xl"]} color="blue.900">
          Send Me a Message!
        </Text>

        <form onSubmit={handleSubmit}>

          <VStack spacing={5}>
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="user_name" fontFamily="workSans" fontSize={['lg', 'lg', 'xl']}>Name</FormLabel>
              <Input
                id="user_name"
                name="user_name"
                value={formData.name}
                onChange={handleChange}
                borderColor="blue.900"
                size={["md", "md", "lg"]}
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="user_email" fontFamily="workSans" fontSize={['lg', 'lg', 'xl']}>Email</FormLabel>
              <Input
                id="user_email"
                name="user_email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                borderColor="blue.900"
                size={["md", "md", "lg"]}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.message}>
              <FormLabel htmlFor="message" fontFamily="workSans" fontSize={['lg', 'lg', 'xl']}>Message</FormLabel>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                borderColor="blue.900"
                size={["md", "md", "lg"]}
              />
              <FormErrorMessage>{errors.message}</FormErrorMessage>
            </FormControl>

            <Button p={[3, 3, 5, 6]} type="submit" bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
              <HStack>
                <Text>Send Message</Text>
                <EmailIcon w={6} h={6} />
              </HStack>
            </Button>

          </VStack>
        </form>

      </Box>
    </Box>
  );
}

const SocialMedia = ({ props }) => {
  return (
    <VStack pr={4} pl={[4, 4, 0]} justify="center" w="100%" {...props}>
      <Text fontFamily="paytone" align="center" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
        Find Me on Social Media
      </Text>
      <Text mb={3} align="center" fontFamily="workSans" fontSize={["xl", "xl", "2xl", "3xl"]} color="blue.900">
        Let's connect and grow together
      </Text>

      <VStack spacing={3}>
        <Link href="mailto:sachinkumar95121@gmail.com" isExternal>
          <Button h={["50px", "50px", "55px"]} w="250px" bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
            <HStack w="100%" spacing={5}>
              <Box w="30%" align="right">
                <FontAwesomeIcon icon={faPaperPlane} />
              </Box>
              <Text w="70%" align="left">Gmail</Text>
            </HStack>
          </Button>
        </Link>

        <Link href="https://www.linkedin.com/in/sachin-kumar-b418391ba/" isExternal>
          <Button h={["50px", "50px", "55px"]} w="250px" bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
            <HStack w="100%" spacing={5}>
              <Box w="30%" align="right">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Box>
              <Text w="70%" align="left">LinkedIn</Text>
            </HStack>
          </Button>
        </Link>

        <Link href="https://github.com/Sachin24063" isExternal>
          <Button h={["50px", "50px", "55px"]} w="250px" bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
            <HStack w="100%" spacing={5}>
              <Box w="30%" align="right">
                <FontAwesomeIcon icon={faGithub} />
              </Box>
              <Text w="70%" align="left">Github</Text>
            </HStack>
          </Button>
        </Link>

        <Link href="https://x.com/Sachin61952429" isExternal>
          <Button h={["50px", "50px", "55px"]} w="250px" bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
            <HStack w="100%" spacing={5}>
              <Box w="30%" align="right">
                <FontAwesomeIcon icon={faXTwitter} />
              </Box>
              <Text w="70%" align="left">Twitter X</Text>
            </HStack>
          </Button>
        </Link>
      </VStack>

    </VStack>
  )
}

export default function Contact() {
  return (
    <Stack w="100%" spacing={[8, 8, 4]} mt={16} direction={['column', 'column', 'row']}>
      <ContactForm />
      <SocialMedia />
    </Stack>
  )
}