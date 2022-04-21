import { Box, Divider, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Skills_data } from "../../data/Data";

const Skills = () => {
  return (
    <Box d="flex" flexDir="column">
      <Text
        fontSize="2xl"
        fontFamily="heading"
        fontWeight="bold"
        textAlign="center"
      >
        Skills
      </Text>
      <Divider my={2} width={100} orientation="horizontal" mx="auto" />
      <Box
        d="flex"
        flexDir="column"
        w={{ lg: "70%", base: "100%", md: "80%" }}
        px={10}
        py={5}
        mx="auto"
        textAlign="center"
      >
        <SimpleGrid columns={{ base: "2", md: "3" }} spacing={10}>
          {Skills_data.map((data) => {
            return (
              <Box flexDir="column">
                <Text
                  fontSize="lg"
                  color="orange.600"
                  fontWeight="medium"
                  pt={2}
                >
                  {data.skill}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Skills;
