import { Stack, HStack, VStack, Box, Text, Image, Center, Wrap, List, ListItem, ListIcon } from '@chakra-ui/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import * as icons from './Icons'
import cp from '../static/images/cp.png'
import dsa from '../static/images/dsa.png'
import datascience from '../static/images/datascience.png'
import webdev from '../static/images/webdev.png'
import cloud from '../static/images/cloud.png'

const skills = [
    // {
    //     image: cp,
    //     title: "Competitive Programming",
    //     icons: [icons.Codeforces, icons.Codechef, icons.Hackerrank],
    //     description: [
    //         "Solved 600+ questions on Competitive Programming platforms",
    //         "Specialist (Max. Rating 1467) on Codeforces",
    //         "3 Star (Max. Rating 1689) on CodeChef",
    //         "5 Star badge in Problem Solving on HackerRank"
    //     ]
    // },
    {
        image: dsa,
        title: "Data Structures and Algorithms",
        icons: [icons.Leetcode, icons.Gfg, icons.Codeforces],
        description: [
            "Solved 750+ questions on Various Coding Platforms",
            "Good grasp on Arrays, Linked Lists, Stacks, Queues, Trees and Graphs",
            "Appreciable knowledge in Design and Analysis of Algorithms",
            "Prefer using C++ for implementation"
        ]
    },
    {
        image: datascience,
        title: "Data Science, Machine Learning and Deep Learning",
        icons: [icons.Kaggle, icons.Python, icons.Numpy, icons.Pandas, icons.Matplotlib, icons.Seaborn, icons.Sklearn, icons.Tensorflow, icons.Keras],
        description: [
            "Proficient in data preprocessing, analysis, and visualization",
            "Experienced in building and training machine learning models using Python",
            "Skilled in neural networks, image classification, segmentation, LSTM, encoders, and decoders",
            "Strong command of Python for implementation and deploying solutions"
        ]
    },
    {
        image: webdev,
        title: "Full Stack Web Development",
        icons: [icons.Html, icons.Css, icons.Reactjs, icons.Flask, icons.Django, icons.Mysql, icons.Mongodb, icons.Apache, icons.Postman],
        description: [
            "Skilled in frontend technologies like HTML, CSS, JavaScript and React.js",
            "Able to write REST APIs for backend using Flask And FastAPI",
            "Knowledgeable about databases such as MySQL and MongoDB",
            "Experienced in using Python Django Framework",
            "Strong Command Over The Deployements"
        ]
    },
    {
        image: cloud,
        title: "Cloud Computing",
        icons: [icons.AWS, icons.Lambda, icons.VPC, icons.EC2, icons.InternetGateway, icons.LoadBalancer],
        description: [
            "Proficient in AWS EC2 for scalable compute capacity",
            "Expertise in VPC, NAT, and Internet Gateways for secure networking",
            "Skilled in configuring ASGs and ALBs for high availability.",
            "Experienced with Lambda functions for serverless application deployment"
        ]
    }
]

const SkillComponent = ({ skill }) => {
    return (
        <Box w="100%" px={8} py={5}>
            <Stack shadow="xl" rounded="xl" p={4} direction={['column', 'column', 'row']} spacing={5} w="100%">
                <Center w={["100%", "100%", "40%", "30%"]}>
                    <Image src={skill.image} alt={skill.name} w={["60%", "60%", "90%", "80%"]} h="auto" />
                </Center>

                <Stack spacing={4} w={["100%", "100%", "60%", "70%"]} >
                    <Box direction={['column', 'column', 'column', 'row']} spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">
                        <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "left"]}>{skill.title}</Text>
                    </Box>

                    <Wrap spacing={5} fontSize="xl" py={2} justify={["center", "center", "center", "left"]}>
                        {skill.icons.map((Icon, index) => (
                            <Icon />
                        ))}
                    </Wrap>

                    <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900" spacing={2}>
                        {skill.description.map((desc) => (
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

export default function Skills() {
    return (
        <VStack>
            <Text fontFamily="paytone" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
                Interests and Skills
            </Text>

            {
                skills.map((skill, index) => (
                    <SkillComponent key={index} skill={skill} />
                ))
            }
        </VStack>
    )
}
