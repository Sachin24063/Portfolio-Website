import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import TopSection from '../components/TopSection'
import Publications from '../components/Publications'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import publication from '../static/images/publication1.png'

const About = () => {
    return (
        <>
            <Text fontFamily="paytone" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
                Publications
            </Text>
            <Text mb={[5, 5, 8]} align="center" fontFamily="workSans" fontSize={["xl", "xl", "2xl", "3xl"]} color="blue.900">
            Published several research papers in international conferences, focusing on advancements and innovative solutions in The Field Of Machine Learning.
            </Text>
        </>
    )
}

export default function Experience() {
    return (
        <Box as="body" bg="blue.50" pt={4}>
            <TopSection content={<About />} image={publication} />
            <Publications />
            <Footer />
            <ScrollToTop />
        </Box>
    )
}
