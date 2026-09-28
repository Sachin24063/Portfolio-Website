import React, { useEffect, useState } from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <Box
      onClick={scrollToTop}
      position="fixed"
      bottom="24px"
      right="24px"
      zIndex={99}
    >
      <IconButton
        isRound={true}
        w="44px"
        h="44px"
        bg="#FFFFFF"
        color="#2563EB"
        border="1px solid"
        borderColor="#CBD5E1"
        boxShadow="0 4px 15px rgba(15, 23, 42, 0.1)"
        fontSize="20px"
        _hover={{
          bg: "#F8FAFC",
          borderColor: "#2563EB",
          color: "#1D4ED8",
          transform: "translateY(-3px)",
          boxShadow: "0 8px 25px rgba(37, 99, 235, 0.2)",
        }}
        _active={{ transform: "translateY(0)" }}
        aria-label="Scroll to top"
        icon={<ArrowUpIcon />}
      />
    </Box>
  );
}