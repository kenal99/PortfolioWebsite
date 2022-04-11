import {
  Box,
  Divider,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const Work = () => {
  return (
    <Box d="flex" flexDir="column">
      <Text
        fontSize="2xl"
        fontFamily="heading"
        fontWeight="bold"
        textAlign="center"
      >
        Work Experience
      </Text>
      <Divider my={2} width={100} orientation="horizontal" mx="auto" />
      <Box
        d="flex"
        flexDir="column"
        w={{ lg: "70%", base: "100%", md: "80%" }}
        px={10}
        mx="auto"
      >
        <Box d="flex" flexDir="column" mt={5} alignItems="center">
          <Text fontSize={{ base: "lg", md: "2xl" }} color="#FF4F1F">
            <i class="fa-solid fa-briefcase"></i>&nbsp;Tata Concultancy Services
          </Text>

          <Text fontWeight="medium" fontSize="md" my={1}>
            <b>Intern:</b> 01/2020 - 04/2020
          </Text>
          <UnorderedList>
            <ListItem>
              Created Rest APIs for Employee Management System.
            </ListItem>
            <ListItem>Modules: Employee, HR, Admin</ListItem>
            <ListItem>
              Key Skills: JavaScript, Node js, express js, MongoDB
            </ListItem>
          </UnorderedList>
        </Box>
        <Box d="flex" flexDir="column" my={5} alignItems="center">
          <Text fontSize={{ base: "lg", md: "2xl" }} color="#FF4F1F">
            <i class="fa-solid fa-briefcase"></i>&nbsp;Tata Consultancy Services
          </Text>

          <Text fontWeight="medium" fontSize="md" my={1}>
            <b>Developer:</b> 10/2020 - Present
          </Text>
          <UnorderedList>
            <ListItem fontSize="md" fontWeight="md">
              Developed an Automation of several testing techniques.
            </ListItem>
            <ListItem>Reduced the manual efforts and time of testing.</ListItem>
            <ListItem>Key Skills: Python, file parsing, HTML</ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default Work;
