import React from 'react'
import { Stack, HStack, VStack, Button, Text, Image, Link, List, ListItem, ListIcon, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import csi from '../static/images/csi.png'
import codeadda from '../static/images/codeadda.png'

const clubs = [
    {
        image: csi,
        name: "Computer Society of India",
        duration: "2020 - 2024",
        position: "Vice President",
        description: [
            "Progressed from a Member (2020-2021) to Executive Board Member (2022) to the Vice President of CSI (2023)",
            "CSI, founded in 1965, is a prominent professional organization for IT professionals in India",
            "It promotes research, knowledge sharing and career development within the IT field",
            "Conducted coding competitions and flagship events as a member of CSI, Nirma",
            "Mentored juniors, organised workshops and national level hackathon"
        ],
        website: "https://csi-nirma.vercel.app/"
    },
    {
        image: codeadda,
        name: "CodeAdda Programming Club",
        duration: "2020 - 2024",
        position: "Club Director",
        description: [
            "Progressed from a Member (2020-2021) to Club Director (2022)",
            "CodeAdda is the official programming club of Nirma University which explains an trains students of all streams in Competitive Programming",
            "It conducts sessions with other renowned CP experts, coding contests and peer learning sessions",
            "Conducted coding competitions and mentored juniors in the field of Competitive Programming as part of CodeAdda"
        ],
        website: "https://codeadda.netlify.app/"
    }
]

const ClubComponent = ({ club }) => {
    return (
        <Card maxW={['sm', 'sm', 'xl', 'xl']} border="0px" bg="transparent" shadow="xl" rounded="xl">
            <CardHeader align="center">
                <Image src={club.image} alt={club.name} w="40%" h="auto" />

                <Stack mt={10} direction='column' spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">

                    <Text fontWeight="bold" w="100%" align="center" fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]}>{club.name}</Text>

                    <Text fontWeight="bold" w="100%" align="center" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]}>{club.position}</Text>

                    <Text fontWeight="bold" w="100%" align="center" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]}>{club.duration}</Text>
                </Stack>
            </CardHeader>

            <CardBody>
                <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900" spacing={2}>
                    {club.description.map((club) => (
                        <ListItem key={club}>
                            <ListIcon as={FontAwesomeIcon} icon={faPencil} />
                            {club}
                        </ListItem>
                    ))}
                </List>
            </CardBody>

            <CardFooter w="100%" justify="right">
                <Link href={club.website} isExternal>
                    <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
                        <HStack>
                            <Text>Visit Website</Text>
                            <ExternalLinkIcon w={6} h={6} />
                        </HStack>
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

// export default function Clubs() {
//     return (
//         <VStack mt={8}>
//             <Text fontFamily="paytone" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
//                 Club Activities
//             </Text>

//             <Stack px={5} py={3} spacing={[5, 5, 8, 20]} direction={['column', 'column', 'column', 'row']}>
//                 {clubs.map((club, index) => (
//                     <ClubComponent key={index} club={club} />
//                 ))}
//             </Stack>

//         </VStack>
//     )
// }
