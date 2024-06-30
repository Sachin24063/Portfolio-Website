import React from 'react'
import { Link, Button, HStack, Box, Text } from '@chakra-ui/react'
import TopSection from '../components/TopSection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import contactme from '../static/images/contactme.png'
import resume from '../static/documents/resume.pdf'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const About = () => {
    return (
        <>
            <Text fontFamily="paytone" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
                Resume
            </Text>
            <Text mb={5} align="center" fontFamily="workSans" fontSize={["xl", "xl", "2xl", "3xl"]} color="blue.900">
                Have a look at my resume. Feel free to reach out to me for any queries or suggestions
            </Text>
            <Link href={resume} download="Sachin Vaghari (Resume)" target="_blank">
                <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
                    <HStack spacing={2}>
                        <Text>Resume</Text>
                        <ExternalLinkIcon w={6} h={6} />
                    </HStack>
                </Button>
            </Link>
        </>
    )
}

export default function ContactMe() {
    return (
        <Box as="body" bg="blue.50" pt={4}>
            <TopSection content={<About />} image={contactme} />
            <Contact />
            <Footer />
            <ScrollToTop />
        </Box>
    )
}
