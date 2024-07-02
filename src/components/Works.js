import { Stack, Box, Center, Text, Image, List, ListItem, ListIcon, Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem } from '@chakra-ui/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import crest from '../static/images/crest.png'
import sparks from '../static/images/sparks.png'

const works = {
    "Internship": [
        {
            image: crest,
            name: "Crest Data",
            duration: "Jan 2024 - June 2024",
            position: "Site Reliability Engineer Intern",
            location: "Ahmedabad, Gujarat",
            description: [
                "Implemented automated testing processes within CI/CD pipelines to ensure software quality and reliability",
                "Streamlined deployments with Terraform and Jenkins, enhancing efficiency",
                "Utilized Linux systems for server management and automation tasks",
                "Utilized Site24x7 for monitoring and PagerDuty for incident response, minimizing downtime",
                "Managed CI/CD pipelines with GitLab and optimized Windows server management using PowerShell scripting",
            ]
        },
        {
            image: sparks,
            name: "Sparks To Ideas",
            duration: "June 2023 - Jul 2023",
            position: "Machine Learning Engineer Intern",
            location: "Ahmedabad, Gujarat",
            description: [
                "Gained extensive hands-on experience in Python, OpenCV, TensorFlow, CNN, scikit-learn, and image dataset cleaning, building a solid foundation in machine learning and computer vision",
                "Applied theoretical knowledge to practical ML projects, delivering impactful solutions",
                "Actively contributed to team efforts, enhancing project outcomes",
                "Played a key role in various ML projects, demonstrating strong technical skills and a proactive approach"
            ]
        }
    ]
    ,
    "Full Time": [
        {
            image: crest,
            name: "Crest Data",
            duration: "July 2024 - Present",
            position: "Site Reliability Engineer",
            location: "Ahmedabad, Gujarat",
            description: [
                "Oversaw site reliability with PagerDuty alerts, 24/7 monitoring, and robust security utilizing Nessus, Nagios, and Tenable",
                "Automated operations with PowerShell scripting, Jenkins pipelines, and optimized AWS infrastructure",
                "Led seamless deployments across Dev, QA, and Production environments, ensuring FedRAMP compliance and operational excellence"
            ]
        }
    ]
}

const WorkComponent = ({ work }) => {
    return (
        <Box w="100%" px={2} py={5}>
            <Stack shadow="xl" rounded="xl" p={4} direction={['column', 'column', 'row']} spacing={5} w="100%">
                <Center w={["100%", "100%", "40%", "30%"]}>
                    <Image src={work.image} alt={work.name} w={["60%", "60%", "90%", "80%"]} h="auto" />
                </Center>

                <Stack spacing={4} w={["100%", "100%", "60%", "70%"]} >

                    <Stack direction={['column', 'column', 'column', 'row']} spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">
                        <Stack w={["100%", "100%", "100%", "50%"]} direction="column">
                            <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "left"]}>{work.name}</Text>

                            <Text fontWeight="bold" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "left"]}>{work.position}</Text>
                        </Stack>

                        <Stack w={["100%", "100%", "100%", "50%"]} direction="column">
                            <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "right"]}>{work.duration}</Text>

                            <Text fontWeight="bold" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "right"]}>{work.location}</Text>
                        </Stack>
                    </Stack>

                    <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900" spacing={2}>
                        {work.description.map((desc) => (
                            <ListItem key={desc}>
                                <ListIcon as={FontAwesomeIcon} icon={faPencil} />
                                {desc}
                            </ListItem>
                        ))}
                    </List>
                </Stack>
            </Stack >
        </Box >
    )
}

const WorkAccordion = ({ workType, work }) => {
    return (
        <Accordion allowToggle mb={8}>
            <AccordionItem rounded="xl">
                <AccordionButton rounded="xl" p={5} border="2px" borderColor="blue.900" color="blue.900" _hover={{ bg: 'blue.900', color: 'white' }} _expanded={{ bg: 'blue.900', color: 'white', roundedBottom: '0px' }}>
                    <Box as="span" flex='1' textAlign='left'>
                        <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "left"]}>
                            {workType}
                        </Text>
                    </Box>
                    <AccordionIcon w={8} h={8} />
                </AccordionButton>
                <AccordionPanel roundedBottom="xl" border="2px" borderColor="blue.900">
                    {
                        work.map((w, index) => (
                            <WorkComponent key={index} work={w} />
                        ))
                    }
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default function Works() {
    return (
        <Box py={4} px={[5, 5, 8, 10]}>
            {
                Object.keys(works).map((workType, index) => (
                    <WorkAccordion key={index} workType={workType} work={works[workType]} />
                ))
            }
        </Box>
    )
}
