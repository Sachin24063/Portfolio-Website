import React from 'react'
import { HStack, Center, Button, Image, Text, Link, Card, CardHeader, CardBody, CardFooter, Wrap, WrapItem, VStack } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import amazon from '../static/images/amazon.png'
import mined from '../static/images/mined.png'

const certificates = [
    {
        image: amazon,
        name: "Amazon ML Summer School 2023",
        author: "Amazon",
        link: "https://drive.google.com/file/d/15NvosNnbzk6xNsZTdEF5m3DIpCQ0L6o9/view?usp=share_link"
    },
    {
        image: mined,
        name: "Mined Hackathon",
        author: "Nirma University",
        link: "https://certificate.givemycertificate.com/c/f8b42552-05b4-4802-9644-dac619828977"
    }
]

const CertificateComponent = ({ certificate }) => {
    return (
        <WrapItem>
            <Card maxW={['sm', 'sm', 'xs', 'sm']} border="0px" bg="transparent" rounded="xl" shadow="xl">
                <CardHeader align="center">
                    <VStack spacing={8}>
                        <Center w="full" h="100px" justify="center">
                            <Image src={certificate.image} alt={certificate.name} w={["60%", "60%", "90%", "80%"]} h="auto" />
                        </Center>

                        <Center minH={['0px', '0px', '80px', '100px']} direction='column' spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">
                            <Text align="center" fontWeight="bold" w="100%" fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]}>{certificate.name}</Text>
                        </Center>
                    </VStack>
                </CardHeader>

                <CardBody>
                    <Text align="center" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900">{certificate.author}</Text>
                </CardBody>

                <CardFooter w="100%" justify="center">
                    <Link href={certificate.link} isExternal>
                        <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
                            <HStack>
                                <Text>Certificate</Text>
                                <ExternalLinkIcon w={6} h={6} />
                            </HStack>
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </WrapItem>
    )
}

export default function Certificates() {
    return (
        <Wrap mt={2} py={3} px={5} justify="center" spacing={[8, 8, 10, 12]}>
            {certificates.map((certificate, index) => (
                <CertificateComponent key={index} certificate={certificate} />
            ))}
        </Wrap>
    )
}
