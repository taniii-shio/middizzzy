import React from "react";
import { Box, Image, Text, Center, Button } from "@chakra-ui/react";

const Main = () => {
  return (
    <Box backgroundColor="#eee" w="100%" position="relative" h="70vh">
      <Image
        src="#"
        h="100%"
        m="auto"
        objectFit="contain"
        objectPosition={["top", "center"]}
      />
      <Text
        className="tracking-in-expand"
        position="absolute"
        bottom="20%"
        w="100%"
        textAlign="center"
        color="#000"
        fontWeight="bold"
        fontSize="4rem"
      >
        MidDizzzy
      </Text>
      <Center>
        <Button
          w="10rem"
          backgroundColor="white"
          color="#000"
          _hover={{ opacity: "70%" }}
          position="absolute"
          bottom="10%"
        >
          Shop Now
        </Button>
      </Center>
    </Box>
  );
};

export default Main;
