import React from 'react';
import { Box } from '@chakra-ui/react';

export default function SplashScreen(WrappedComponent) {
  return function LoadedComponent(props) {
    return (
      <Box
        animation="fadeIn 0.4s ease-in-out"
        sx={{
          '@keyframes fadeIn': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        }}
      >
        <WrappedComponent {...props} />
      </Box>
    );
  };
}