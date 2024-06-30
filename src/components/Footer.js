import { Text, HStack } from '@chakra-ui/react'
import React from 'react'
import { Heart } from './Icons'

export default function Footer() {
    return (
        <HStack as="footer" bottom="0px" w="100%" justify="center" p={3} mt={10} fontFamily="satisfy" fontWeight="extrabold" fontSize={["xl", "xl", "2xl", "3xl"]} color="blue.900">
            <Text>
                Made with
            </Text>

            <Heart />

            <Text>
                by Sachin Kumar
            </Text>
        </HStack>
    )
}
