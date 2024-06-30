import React from 'react'
import { Stack, HStack, Box, Button, Text, Link, List, ListItem, ListIcon, Card, CardHeader, CardBody, CardFooter, Wrap, WrapItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const projects = [
    {
        name: "Top Five Women Face Recognization Using SVM",
        skills: "Machine Learning, Python, Flask",
        description: [
            "Collected 1000+ images of female cricketers, using OpenCV, Haar Cascade, and Wavelet Transform for feature extraction; built an SVC model with 84% accuracy",
            "Developed a Python Flask server with a user-friendly UI for seamless image transfer via Base64 strings."
        ],
        website: "https://github.com/Sachin24063/Top-5-Women-Face-Recognization-System-Using-SVM"
    },
    {
        name: "Bird Image Classification Using CNN",
        skills: "Python, Deep Learning",
        description: [
            "Developed a bird image classification CNN model with 15 species using 4447 images, achieving 89.58% testing accuracy with data augmentation.",
            "Created a drag-and-drop UI for classification using FASTAPI and Node.js."
        ],
        website: "https://github.com/Sachin24063/Bird-Image-Classifier/tree/main?tab=readme-ov-file"
    },
    {
        name: "Tomato Leaf Diseases classification using CNN",
        skills: "Python, Deep Learning",
        description: [
            "Developed a CNN model with 94% accuracy for classifying 16,012 annotated tomato leaf images from Kaggle, deploying via FastAPI and Postman.",
            "Created a React.js front end for drag-and-drop image classification, integrating with the back end for seamless predictions."
        ],
        website: "https://github.com/Sachin24063/Tomato-Leaf-Disease-Classification-Using-CNN"
    },
    {
        name: "News Headline Generation Using News Article With the Help Of Bi-LSTM",
        skills: "Bi-LSTM, Python, Tensorflow",
        description: [
            "Developed a custom three-layered Bi-LSTM model using TensorFlow on a Kaggle news article dataset.",
            "Utilized GloVe word2Vec for word embeddings, achieving a unique solution for text classification."],
        website: "https://github.com/Sachin24063/News-Headline-Generation-Using-News-Article-With-the-Help-Of-Bi-LSTM"
    },
    {
        name: "SLR Parser and String stack trace using Django",
        skills: "Python, Django",
        description: [
            "Web application that demonstrates SLR Parsing technique used by compilers to perform Bottom-up non-recursive parsing",
            "Created Using Python Django Framework"
        ],
        website: "https://github.com/Sachin24063/SLR-Parser-Using-Django"
    },
    {
        name: "Deploying three tier application by using CI/CD and infrastructure as a code",
        skills: "Terraform, Jenkins, AWS",
        description: [
            "Utilized Terraform and Jenkins to deploy a scalable, cost-effective AWS infrastructure for a pizza store application, including EC2, ELB, VPC, NAT, ASG, and database.",
            "Implemented IaC and CI/CD for automated, consistent, and secure deployments."],
        website: "https://github.com/Sachin24063/3-Tier-App-Deployment-Using-Infrastructure-as-code"
    }
]

const ProjectComponent = ({ project }) => {
    return (
        <WrapItem>
            <Card maxW={['sm', 'sm', 'xs', 'sm']} minH={['0px', '0px', '650px', '780px']} border="0px" bg="transparent" rounded="xl" shadow="xl">
                <CardHeader align="center">
                    <Stack justify="center" minH={['0px', '0px', '150px', '200px']} direction='column' spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">
                        <Text fontWeight="bold" w="100%" align="center" fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]}>{project.name}</Text>

                        <Text fontWeight="bold" w="100%" align="center" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]}>{project.skills}</Text>
                    </Stack>
                </CardHeader>

                <CardBody>
                    <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900" spacing={4}>
                        {project.description.map((project) => (
                            <ListItem key={project}>
                                <ListIcon as={FontAwesomeIcon} icon={faPencil} />
                                {project}
                            </ListItem>
                        ))}
                    </List>
                </CardBody>

                <CardFooter w="100%" justify="right">
                    <Link href={project.website} isExternal>
                        <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
                            <HStack>
                                <Text>Github Link</Text>
                                <ExternalLinkIcon w={6} h={6} />
                            </HStack>
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </WrapItem>
    )
}

export default function ProjectCards() {
    return (
        <>
            <Wrap py={3} px={4} justify="center" spacing={[8, 8, 10, 12]}>
                {projects.map((project, index) => (
                    <ProjectComponent key={index} project={project} />
                ))}
            </Wrap>

            <Box pt={10} align="center">
                <Link href='https://github.com/Sachin24063?tab=repositories' isExternal>
                    <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
                        <HStack>
                            <Text>See All Projects</Text>
                            <ExternalLinkIcon w={6} h={6} />
                        </HStack>
                    </Button>
                </Link>
            </Box>
        </>
    )
}
