import { Stack, HStack, VStack, Box, Button, Center, Text, Image, Link, List, ListItem, ListIcon } from '@chakra-ui/react'
import React from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import nirma from '../static/images/nirma.png'
import skpatel from '../static/images/skpatel.png'

const degrees = [
    {
        image: nirma,
        name: "Nirma University",
        duration: "2021 - 2024",
        degree: "B.Tech in Computer Science",
        score: "7.11 / 10.0",
        description: [
            "Course Work - Data Structures and Algorithms, Object Oriented Programming, Operating System, Compiler Construction, Database Management, Computer Networks, Operating System, Machine Learning, Deep Learning, Data Mining, Microservice Architecture",
            "Submitted paper ”SVM and Wavelet Transformation-Based Face Recognition of Women Cricketers” to ARAB ICT CONFERENCE 2024"
        ],
        website: "https://www.nirmauni.ac.in/"
    },
    {
        image: skpatel,
        name: "Sankalchand Patel University Affiliated With GTU",
        duration: "2018 - 2021",
        degree: "Diploma In Computer Engineering",
        score: "8.98 / 10.0",
        description: [
            "Course Work - Data Structures and Algorithms, Object Oriented Programming, Operating System, Computer Network & Security, Computer Maintanance & Troubleshooting",
            "Overall Class Rank 2 in 5th Semester",
            "Overall Collage Rank 7 in 6th Semester"
        ],
        website: "https://spu.ac.in"
    }
]

const DegreeComponent = ({ degree }) => {
    return (
        <Box w="100%" px={8} py={5}>
            <Stack shadow="xl" rounded="xl" p={4} direction={['column', 'column', 'row']} spacing={5} w="100%">
                <Center w={["100%", "100%", "40%", "30%"]}>
                    <Image src={degree.image} alt={degree.name} w={["60%", "60%", "90%", "80%"]} h="auto" />
                </Center>

                <Stack spacing={4} w={["100%", "100%", "60%", "70%"]} >

                    <Stack direction={['column', 'column', 'column', 'row']} spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">
                        <Stack w={["100%", "100%", "100%", "70%"]} direction="column">
                            <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "left"]}>{degree.name}</Text>

                            <Text fontWeight="bold" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "left"]}>{degree.degree}</Text>
                        </Stack>

                        <Stack w={["100%", "100%", "100%", "30%"]} direction={['row', 'row', 'row', 'column']}>
                            <Text fontWeight="bold" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} w={["50%", "50%", "50%", "100%"]} align={["left", "left", "left", "right"]}>{degree.duration}</Text>

                            <Text fontWeight="bold" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} w={["50%", "50%", "50%", "100%"]} align="right">{degree.score}</Text>
                        </Stack>
                    </Stack>

                    <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900" spacing={2}>
                        {degree.description.map((desc) => (
                            <ListItem key={desc}>
                                <ListIcon as={FontAwesomeIcon} icon={faPencil} />
                                {desc}
                            </ListItem>
                        ))}
                    </List>

                    <Box w="100%" align="right">
                        <Link href={degree.website} isExternal>
                            <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
                                <HStack>
                                    <Text>Visit Website</Text>
                                    <ExternalLinkIcon w={6} h={6} />
                                </HStack>
                            </Button>
                        </Link>
                    </Box>
                </Stack>
            </Stack >
        </Box >
    )
}

export default function Skills() {
    return (
        <VStack spacing={0}>
            <Text fontFamily="paytone" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
                Educational Qualifications
            </Text>

            {degrees.map((degree, index) => (
                <DegreeComponent key={index} degree={degree} />
            ))}
        </VStack>
    )
}
