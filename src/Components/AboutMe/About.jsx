import { Box, Text, Divider, SimpleGrid, Stack } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
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
        About Me
      </Text>
      <Divider mt={5} width={200} orientation="horizontal" />
      <Box
        d="flex"
        mt={10}
        mb={10}
        backgroundColor="white"
        boxShadow="dark-lg"
        maxW={{ base: "90%", md: "90%", lg: "60%" }}
      >
        <SimpleGrid columns={{ base: "1", md: "2" }} spacing={10}>
          <Box
            d="flex"
            alignItems="center"
            justifyContent="center"
            maxBlockSize={{ base: "xs", md: "sm" }}
            mx="auto"
            mt={10}
            mb={10}
            p={30}
          >
            <Image src="/About_img.png" />
          </Box>

          <Box d="flex" flexDir="column" p={30}>
            <Text textAlign="justify" alignItems="center" fontSize="lg">
              Full stack web developer with background knowledge of MERN stack
              along with a skill of building applications with utmost
              efficiency. Willing to be an asset for an organization.
            </Text>
            <Text fontSize="lg" mt={10}>
              Here are a Few Highlights:
            </Text>
            <ul>
              <li>
                <Text fontSize="lg">Full Stack web development</Text>
              </li>
              <li>
                <Text fontSize="lg">Interactive Front End Building </Text>
              </li>
              <li>
                <Text fontSize="lg">REST API</Text>
              </li>
              <li>
                <Text fontSize="lg">Managing database</Text>
              </li>
            </ul>

            <Stack direction="row" spacing={4} mt={10}>
              <Button
                colorScheme="orange"
                variant="solid"
                onClick={() => navigate("/contact")}
              >
                Contact Me
              </Button>
              <a
                href={require("../../asset/Resume.pdf")}
                download="Kenal_Butani_Resume"
              >
                <Button colorScheme="orange" variant="outline">
                  Get Resume
                </Button>
              </a>
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default About;
