import React from "react";
import { Box, Grid, Image, Text } from "@chakra-ui/react";

const Collection = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" h="40">
      <Box
        backgroundColor="#ccc"
        _hover={{ opacity: "80%" }}
        textAlign="center"
        position="relative"
      >
        <Image src="#" />
        <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
          First Collection
        </Text>
      </Box>
      <Box
        backgroundColor="#ddd"
        _hover={{ opacity: "80%" }}
        textAlign="center"
        position="relative"
      >
        <Image src="#" />
        <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
          Second Collection
        </Text>
      </Box>
      <Box
        backgroundColor="#ccc"
        _hover={{ opacity: "80%" }}
        textAlign="center"
        position="relative"
      >
        <Image src="#" />
        <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
          Third Collection
        </Text>
      </Box>
    </Grid>
  );
};

export default Collection;
