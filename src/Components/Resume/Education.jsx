import { Box, Center, List, ListItem, Text, Divider } from "@chakra-ui/react";
import React from "react";
import { Education_data } from "../../data/Data";

const Education = () => {
  return (
    <Box d="flex" flexDir="column">
      <Text
        fontSize="2xl"
        fontFamily="heading"
        fontWeight="bold"
        textAlign="center"
      >
        Education
      </Text>
      <Divider my={2} width={100} orientation="horizontal" mx="auto" />
      <Box
        d="flex"
        flexDir="column"
        w={{ lg: "70%", base: "100%", md: "80%" }}
        px={10}
        mx="auto"
        pb={5}
      >
        {Education_data.map((data) => {
          return (
            <Box d="flex" flexDir="column" mt={5}>
              <Box d="flex" alignItems="center" justifyContent="space-between">
                <Text fontSize={{ base: "lg", md: "2xl" }} color="#FF4F1F">
                  <i class={data.icon}></i>&nbsp;{data.school}
                </Text>
                <Text
                  fontWeight="medium"
                  color="whitesmoke"
                  backgroundColor="#FF4F1F"
                  px={2}
                  py={1}
                  borderRadius={10}
                  fontSize={{ base: "md", md: "lg" }}
                >
                  {data.year}
                </Text>
              </Box>
              <Text fontWeight="medium" fontSize="md" my={1}>
                {data.description}
              </Text>
              <Text fontWeight="medium" fontSize="md">
                <b>{data.marks_type}:</b> {data.marks}
              </Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Education;
