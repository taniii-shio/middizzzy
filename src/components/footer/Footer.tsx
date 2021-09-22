import React from "react";
import Link from "next/link";

import { Grid, Box, Text, Image, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      backgroundColor="#fff"
      mt="2rem"
      borderTop="0.25pt #ccc solid"
      // position="fixed"
      bottom="0"
      w="100%"
    >
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        color="#000"
        fontWeight="bold"
      >
        <Image src="#" />
        <VStack p="2rem">
          <Link href="/">
            <a>About Us</a>
          </Link>
          <Link href="/">
            <a>About Us</a>
          </Link>
          <Link href="/">
            <a>About Us</a>
          </Link>
        </VStack>
      </Grid>
      <Box>
        <Text
          textAlign="center"
          color="#aaa"
          w="100%"
          borderTop="1px solid white"
          p="1rem"
        >
          ©︎ 2021 middizzzy.tokyo
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
