import { Box, Center, List, ListItem, Text, Divider } from "@chakra-ui/react";
import React from "react";

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
      >
        <Box d="flex" flexDir="column" mt={5}>
          <Box d="flex" alignItems="center" justifyContent="space-between">
            <Text fontSize={{ base: "lg", md: "2xl" }} color="#FF4F1F">
              <i class="fa-solid fa-graduation-cap"></i>&nbsp;Nirma University,
              Gujarat
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
              2016-2020
            </Text>
          </Box>
          <Text fontWeight="medium" fontSize="md" my={1}>
            Bachelor of Technology in Information Technology
          </Text>
          <Text fontWeight="medium" fontSize="md">
            <b>CGPA:</b> 8.16
          </Text>
        </Box>
        <Box d="flex" flexDir="column" my={5}>
          <Box d="flex" alignItems="center" justifyContent="space-between">
            <Text fontSize={{ base: "lg", md: "2xl" }} color="#FF4F1F">
              <i class="fa-solid fa-school"></i>&nbsp;Bright Day School, Gujarat
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
              2014-2016
            </Text>
          </Box>
          <Text fontWeight="medium" fontSize="md" my={1}>
            HighSchool
          </Text>
          <Text fontWeight="medium" fontSize="md">
            <b>Percentile:</b> 99.19
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Education;
