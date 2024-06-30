import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import TopSection from '../components/TopSection'
import Works from '../components/Works'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import experience from '../static/images/experience.png'

const About = () => {
    return (
        <>
            <Text fontFamily="paytone" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
                Experience
            </Text>
            <Text mb={[5, 5, 8]} align="center" fontFamily="workSans" fontSize={["xl", "xl", "2xl", "3xl"]} color="blue.900">
                Interned with reputed Industries with experience in the field of Machine Learning And Cloud.
            </Text>
        </>
    )
}

export default function Experience() {
    return (
        <Box as="body" bg="blue.50" pt={4}>
            <TopSection content={<About />} image={experience} />
            <Works />
            <Footer />
            <ScrollToTop />
        </Box>
    )
}
