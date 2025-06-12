import React from 'react'
import {
    Box,
    Stack,
    Center,
    Text,
    Image,
    List,
    ListItem,
    ListIcon,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Link,
    HStack,
    Button
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import ICFEICT from '../static/images/ICFEICT.png'
import ICTACS from '../static/images/ICTACS.png'
import INCIP from '../static/images/INCIP.png'

// Grouped like "International Conferences"
const publications = {
    "International Conferences": [
        {
            image: INCIP,
            name: "Optimizing Grid Equipment Maintenance Through Robust Machine Learning",
            duration: "Jan 23-24, 2025",
            position: "Bangalore, India",
            description: [
                "Published paper 'Optimizing Grid Equipment Maintenance Through Robust Machine Learning' at IEEE International Conference on Next Generation Communication & Information Processing (IEEE INCIP 2025)."
            ],
            website: "https://ieeexplore.ieee.org/document/11018925"
        },
        {
            image: ICFEICT,
            name: "FaceWave: SVM and Wavelet Transformation-Based Face Recognition Framework for Women Cricketers",
            duration: "2024",
            position: "Beijing, China",
            description: [
                "Published a paper 'FaceWave: SVM and Wavelet Transformation-Based Face Recognition Framework for Women Cricketers' at The 5th International Conference on Frontiers of Electronics, Information and Computation Technologies at Beijing, China."
            ],
            website: "https://link.springer.com/chapter/10.1007/978-981-96-5318-8_50"
        },
        {
            image: ICTACS,
            name: "Enhancing Bird Species Identification Using a Custom CNN Architecture",
            duration: "Nov 13-15, 2024",
            position: "Tashkent, Uzbekistan",
            description: [
                "Published a paper 'Enhancing Bird Species Identification Using a Custom CNN Architecture' at 4th International Conference on Technological Advancements in Computational Sciences (ICTACS - 2024), Tashkent, Uzbekistan."
            ],
            website: "https://ieeexplore.ieee.org/document/10840487"
        }
    ]
}

const PublicationComponent = ({ pub }) => {
    return (
        <Box w="100%" px={2} py={5}>
            <Stack shadow="xl" rounded="xl" p={4} direction={['column', 'column', 'row']} spacing={5} w="100%">
                <Center w={["100%", "100%", "40%", "30%"]}>
                    <Image src={pub.image} alt={pub.name} w={["60%", "60%", "90%", "80%"]} h="auto" />
                </Center>

                <Stack spacing={4} w={["100%", "100%", "60%", "70%"]}>
                    <Stack direction={['column', 'column', 'column', 'row']} spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">
                        <Stack w={["100%", "100%", "100%", "50%"]} direction="column">
                            <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "left"]}>{pub.name}</Text>
                            <Text fontWeight="bold" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "left"]}>{pub.position}</Text>
                        </Stack>

                        <Stack w={["100%", "100%", "100%", "50%"]} direction="column">
                            <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "right"]}>{pub.duration}</Text>
                        </Stack>
                    </Stack>

                    <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900" spacing={2}>
                        {pub.description.map((desc, i) => (
                            <ListItem key={i}>
                                <ListIcon as={FontAwesomeIcon} icon={faPencil} />
                                {desc}
                            </ListItem>
                        ))}
                    </List>

                    <Box w="100%" justifyContent="flex-end" display="flex">
                        <Link href={pub.website} isExternal>
                            <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
                                <HStack>
                                    <Text>View Paper</Text>
                                    <ExternalLinkIcon w={6} h={6} />
                                </HStack>
                            </Button>
                        </Link>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}

const PublicationAccordion = ({ type, items }) => {
    return (
        <Accordion allowToggle mb={8}>
            <AccordionItem rounded="xl">
                <AccordionButton rounded="xl" p={5} border="2px" borderColor="blue.900" color="blue.900" _hover={{ bg: 'blue.900', color: 'white' }} _expanded={{ bg: 'blue.900', color: 'white', roundedBottom: '0px' }}>
                    <Box as="span" flex='1' textAlign='left'>
                        <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "left"]}>
                            {type}
                        </Text>
                    </Box>
                    <AccordionIcon w={8} h={8} />
                </AccordionButton>
                <AccordionPanel roundedBottom="xl" border="2px" borderColor="blue.900">
                    {
                        items.map((pub, index) => (
                            <PublicationComponent key={index} pub={pub} />
                        ))
                    }
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default function Publications() {
    return (
        <Box py={4} px={[5, 5, 8, 10]}>
            {
                Object.keys(publications).map((type, index) => (
                    <PublicationAccordion key={index} type={type} items={publications[type]} />
                ))
            }
        </Box>
    )
}
