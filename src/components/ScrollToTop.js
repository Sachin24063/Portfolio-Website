import React, { useEffect, useState } from 'react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import { Box, IconButton } from '@chakra-ui/react'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <Box
                    onClick={scrollToTop}
                    position='fixed'
                    bottom='20px'
                    right='20px'
                    zIndex={3}>
                    <IconButton
                        isRound={true}
                        bg='blue.900'
                        color="white"
                        border="2px"
                        borderColor="blue.50"
                        fontSize="20px"
                        _hover={{ bg: "transparent", color: "blue.900", borderColor: "blue.900" }}
                        aria-label='Scroll to top'
                        icon={<ArrowUpIcon />}
                    />
                </Box>
            )}
        </>
    );
}