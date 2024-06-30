import React from 'react'
import { Text, IconButton, HStack, Link, Button } from '@chakra-ui/react'
import { Github, Linkedin, TwitterX, Gmail, Star } from './Icons'

export default function SocialMedia() {
  return (
    <>
      <HStack mb={[1, 1, 3]} spacing={[4, 4, 6]}>
        <Link href='mailto:sachinkumar95121@gmail.com' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Github' bg="transparent" fontSize={["18px", "20px"]} icon={<Gmail />} />
        </Link>

        <Link href='https://www.linkedin.com/in/sachin-kumar-b418391ba/' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Linkedin' bg="transparent" fontSize={["18px", "20px"]} icon={<Linkedin />} />
        </Link>

        <Link href='https://github.com/Sachin24063' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Github' bg="transparent" fontSize={["18px", "20px"]} icon={<Github />} />
        </Link>

        <Link href='https://x.com/Sachin61952429' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Twitter' bg="transparent" fontSize={["18px", "20px"]} icon={<TwitterX />} />
        </Link>
      </HStack>

      <Link href='https://github.com/Sachin24063/Prtfolio-Website' isExternal>
        <Button mt={3} p={6} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
          <HStack spacing={2}>
            <Star />
            <Text>Star Me on Github</Text>
          </HStack>
        </Button>
      </Link>
    </>
  )
}
