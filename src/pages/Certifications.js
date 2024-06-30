import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import TopSection from '../components/TopSection'
import Certificates from '../components/Certificates'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import certification from '../static/images/certification.png'

const About = () => {
    return (
        <>
            <Text fontFamily="paytone" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
                Certifications
            </Text>
            <Text mb={[5, 5, 8]} align="center" fontFamily="workSans" fontSize={["xl", "xl", "2xl", "3xl"]} color="blue.900">
                Got Certifications from Hackathon and Challanges at National Level
            </Text>
        </>
    )
}

export default function Certifications() {
    return (
        <Box as="body" bg="blue.50" pt={4}>
            <TopSection content={<About />} image={certification} />
            <Certificates />
            <Footer />
            <ScrollToTop />
        </Box>
    )
}
