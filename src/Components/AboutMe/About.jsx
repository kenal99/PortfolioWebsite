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
            <Image src={require("../../asset/images/about.png")} />
          </Box>

          <Box d="flex" flexDir="column" p={30}>
            <Text textAlign="justify" alignItems="center" fontSize="lg">
              Hi, I’m Kenal Patel, a Full Stack Developer, passionate about
              transforming ideas into impactful web experiences. With over 4
              years of experience, I specialize in creating dynamic, scalable
              solutions using cutting-edge technologies like React.js and
              Node.js. I specialize in:
            </Text>
            <ul>
              <li>
                <Text fontSize="lg">
                  <b>Innovative Solutions:</b> Creative problem-solving for
                  complex challenges.
                </Text>
              </li>
              <li>
                <Text fontSize="lg">
                  <b>User-Centric Design:</b> Crafting intuitive and engaging
                  user interfaces.
                </Text>
              </li>
              <li>
                <Text fontSize="lg">
                  <b>Performance Optimization:</b> Ensuring fast and efficient
                  applications.
                </Text>
              </li>
              <li>
                <Text fontSize="lg">
                  <b>Continuous Learning:</b> Staying ahead of trends and
                  embrace new technologies.
                </Text>
              </li>
            </ul>

            <Stack direction="row" spacing={4} mt={10}>
              <Button
                colorScheme="orange"
                variant="solid"
                onClick={() => navigate("/PortfolioWebsite/contact")}
              >
                Contact Me
              </Button>
              <a
                href={require("../../asset/Kenal_Patel_Resume.pdf")}
                download="Kenal_Patel_Resume"
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
