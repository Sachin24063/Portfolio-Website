import React from 'react'
import { IconButton, HStack, Link } from '@chakra-ui/react'
import { Codeforces, Codechef, Leetcode, Hackerrank, CodingNinja, Gfg } from './Icons'

export default function SocialMedia() {
  return (
    <>
      <HStack mb={[1, 1, 3]} spacing={[3, 3, 5]}>
        <Link href='https://codeforces.com/profile/sachin_24063' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Codeforces' bg="transparent" fontSize={["20px", "25px"]} icon={<Codeforces />} />
        </Link>

        <Link href='https://www.naukri.com/code360/profile/d3e4b65e-75ca-47ca-befe-e36e90bc58f1' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='CodingNinja' bg="transparent" fontSize={["30px", "35px"]} icon={<CodingNinja />} />
        </Link>

        <Link href='https://leetcode.com/u/Sachin_24063/' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Leetcode' bg="transparent" fontSize={["20px", "25px"]} icon={<Leetcode />} />
        </Link>

        <Link href='https://www.geeksforgeeks.org/user/sachinkumar95121/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='GFG' bg="transparent" fontSize={["20px", "25px"]} icon={<Gfg />} />
        </Link>
      </HStack>
    </>
  )
}
