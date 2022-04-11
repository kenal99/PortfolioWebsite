import {
  Box,
  Text,
  Divider,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Work from "./Work";

const Resume = () => {
  const [section, setsection] = useState("education");
  return (
    <Box
      minH="100vh"
      w="100%"
      pt={20}
      backgroundColor="whitesmoke"
      id="about"
      d="flex"
      flexDir="column"
      alignItems="center"
      px={{ md: "5" }}
    >
      <Text mt={10} fontSize="3xl" fontFamily="heading" fontWeight="bold">
        Resume
      </Text>
      <Divider mt={5} width={200} orientation="horizontal" />

      <Box
        d="flex"
        flexDir="column"
        mt={10}
        mb={10}
        backgroundColor="white"
        boxShadow="dark-lg"
        w={{ base: "90%", md: "80%", lg: "70%" }}
      >
        <SimpleGrid columns={{ base: "2", md: "4" }} textAlign="center">
          <Text
            fontSize="large"
            p={2}
            border="1px"
            borderColor="whiteAlpha.300"
            backgroundColor={section === "education" ? "whitesmoke" : "black"}
            color={section === "education" ? "black" : "whitesmoke"}
            onClick={() => setsection("education")}
          >
            <i class="fa-solid fa-user-graduate"></i>
            &nbsp;&nbsp;Education
          </Text>
          <Text
            fontSize="large"
            p={2}
            border="1px"
            borderColor="whiteAlpha.300"
            backgroundColor={section === "work" ? "whitesmoke" : "black"}
            color={section === "work" ? "black" : "whitesmoke"}
            onClick={() => setsection("work")}
          >
            <i class="fa-solid fa-clock-rotate-left"></i>
            &nbsp;&nbsp;Work History
          </Text>
          <Text
            fontSize="large"
            p={2}
            border="1px"
            borderColor="whiteAlpha.300"
            backgroundColor={section === "projects" ? "whitesmoke" : "black"}
            color={section === "projects" ? "black" : "whitesmoke"}
            onClick={() => setsection("projects")}
          >
            <i class="fa-solid fa-code"></i>
            &nbsp;&nbsp;Projects
          </Text>
          <Text
            fontSize="large"
            p={2}
            border="1px"
            borderColor="whiteAlpha.300"
            backgroundColor={section === "skills" ? "whitesmoke" : "black"}
            color={section === "skills" ? "black" : "whitesmoke"}
            onClick={() => setsection("skills")}
          >
            <i class="fa-solid fa-laptop-code"></i>
            &nbsp;&nbsp;Programming Skills
          </Text>
        </SimpleGrid>
        <Box mt={5} mb={5}>
          {section === "education" ? (
            <Education />
          ) : section === "work" ? (
            <Work />
          ) : section === "skills" ? (
            <Skills />
          ) : section === "projects" ? (
            <Projects />
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
