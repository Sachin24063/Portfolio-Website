import { Stack, VStack, Image, Center, Spacer } from '@chakra-ui/react'
import React from 'react'

export default function TopSection({content, image}) {
    return (
        <Stack w="100%" pl={[0, 0, 6, 8]} mb={10} direction={['column', 'column', 'row']}>
            <Center w={["100%", "30%", "40%"]}>
                <Image w={["80%", "80%", "100%", "90%"]} h="auto" src={image} alt='Pic' />
            </Center>
            <VStack justify="center" px={5} w={["100%", "70%", "60%"]}>
                {content}
            </VStack>
        </Stack>
    )
}
