import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Container, SimpleGrid, Text, Stack } from "@chakra-ui/layout";
import React from "react";
import { useNavigate } from "react-router-dom";
import Typical from "react-typical";
import About from "../AboutMe/About";
import Contact from "../ContactMe/Contact";
import Resume from "../Resume/Resume";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        minH="100vh"
        w="100%"
        pt={20}
        backgroundImage="linear-gradient(to right top, #07021c, #090821, #090d25, #08122a, #05162f, #031830, #011930, #001b31, #001b2d, #001a2a, #001a26, #011922);"
        id="home"
        d="flex"
        alignItems="center"
        px={{ md: "5" }}
        justifyContent="center"
        textAlign="center"
      >
        <SimpleGrid columns={{ base: "1", md: "2" }} spacing={10}>
          <Box
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            maxW={{ md: "md" }}
          >
            <Text
              color="whitesmoke"
              fontFamily="heading"
              fontSize="3xl"
              mb={3}
              mt={{ base: "20", md: "0" }}
            >
              Hello I'M <span style={{ color: "#FF5F1F" }}>Kenal</span>
            </Text>
            <Text color="#FA675E" fontSize="4xl">
              <Typical
                steps={[
                  "Web Developer 👩‍💻",
                  2000,
                  "MERN Stack Developer 💻",
                  2000,
                  "Full Stack Developer 👩‍💻",
                  2000,
                  "Backend Developer 💻",
                  2000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </Text>

            <Text
              color="whitesmoke"
              py={3}
              fontFamily="cursive"
              fontSize="large"
            >
              I Love Building Amazing fullstack applications
            </Text>
            <Stack direction="row" spacing={4} mt={2}>
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
          <Box
            d="flex"
            alignItems="center"
            justifyContent="center"
            boxSize={{ base: "sm", md: "sm", lg: "lg" }}
            mx="auto"
          >
            <Image src={require("../../asset/images/profile.png")} />
          </Box>
        </SimpleGrid>
      </Box>
      <About />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;
