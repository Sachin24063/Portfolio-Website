import React from "react"
import { Box, Text } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontWeight="bold" fontFamily="dancingScript" align="center">
        &lt; Sachin Kumar /&gt;
      </Text>
    </Box>
  );
}
