import { Box, Divider, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  return (
    <Box d="flex" flexDir="column">
      <Text
        fontSize="2xl"
        fontFamily="heading"
        fontWeight="bold"
        textAlign="center"
      >
        Projects
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
              <i class="fa-brands fa-rocketchat"></i>&nbsp;Chat Application
            </Text>
          </Box>
          <UnorderedList>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                <b>Key Skills:</b> Html, Css, Reactjs, Chakra UI, Nodejs,
                MongoDB, MERN stack
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                This is a fullstack Chat application which consists of realtime
                individial and group chatting options
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                RestAPIs created to perform CRUD operations on chat application
                Chat
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                Application consist of Authentication and real-time chatting
                functionalities
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                <b>Website link: </b>
                <a href="https://mern-bubble-chat.herokuapp.com/">
                  https://mern-bubble-chat.herokuapp.com/
                </a>
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box d="flex" flexDir="column" mt={5}>
          <Box d="flex" alignItems="center" justifyContent="space-between">
            <Text fontSize={{ base: "lg", md: "2xl" }} color="#FF4F1F">
              <i class="fa-solid fa-newspaper"></i>&nbsp;Voice Based News
              Application
            </Text>
          </Box>
          <UnorderedList>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                <b>Key Skills:</b> Html, Css, Reactjs, Chakra UI, Bootstrap,
                Alan AI
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                Using this web application user can read latest news, News by
                categories, News by certain terms and News by sources with voice
                assistant
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                News API is used to fetch the information of the news
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                Alan AI features are used for Adding voice based functionalities
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                <b>Website link: </b>
                <a href="https://news-voice-ai-webapp.herokuapp.com/">
                  https://news-voice-ai-webapp.herokuapp.com/
                </a>
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box d="flex" flexDir="column" mt={5}>
          <Box d="flex" alignItems="center" justifyContent="space-between">
            <Text fontSize={{ base: "lg", md: "2xl" }} color="#FF4F1F">
              <i class="fa-solid fa-book-open-reader"></i>&nbsp;Word Dictionary
            </Text>
          </Box>
          <UnorderedList>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                <b>Key Skills: </b>Html, Css, Reactjs, Material UI
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                This app displays meaning and examples of entered text
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                Used meanings API to fetch all the meanings
              </Text>
            </ListItem>

            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                This web application is converted to PWA(Progressive Web App)
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                <b>Website link: </b>
                <a href="https://react-word-dictionary.herokuapp.com/">
                  https://react-word-dictionary.herokuapp.com/
                </a>
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box d="flex" flexDir="column" mt={5}>
          <Box d="flex" alignItems="center" justifyContent="space-between">
            <Text fontSize={{ base: "lg", md: "2xl" }} color="#FF4F1F">
              <i class="fa-solid fa-face-smile"></i>&nbsp;Twitter Based
              Sentiment Analysis
            </Text>
          </Box>
          <UnorderedList>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                <b>Key Skills: </b>Machine Learning, Python
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                Certain pre-processing methods for cleaning the twitter dataset
                was performed.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                The accuracy was tested on classifiers(SVM, naive Bayes,
                Decision tree, Random Forest, KNN)
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box d="flex" flexDir="column" mt={5}>
          <Box d="flex" alignItems="center" justifyContent="space-between">
            <Text fontSize={{ base: "lg", md: "2xl" }} color="#FF4F1F">
              <i class="fa-solid fa-school-circle-check"></i>&nbsp;Face
              Recognition Based Attendance Application
            </Text>
          </Box>
          <UnorderedList>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                <b>Key Skills: </b>Java, Android Studio, Firebase
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                This Application consists of 2 steps: QR scanning and Face
                Recognition
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                Based on the QR code shown by faculty, a student can scan the QR
                which opens the camera through which a student's face is
                recognized and attendance is marked.
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box d="flex" flexDir="column" mt={5}>
          <Box d="flex" alignItems="center" justifyContent="space-between">
            <Text fontSize={{ base: "lg", md: "2xl" }} color="#FF4F1F">
              <i class="fa-solid fa-school-circle-check"></i>&nbsp;Voting
              Application
            </Text>
          </Box>
          <UnorderedList>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                <b>Key Skills: </b>Java, Android Studio, Firebase
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                Application consists of Candidate and Voter Authentication
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium" fontSize="md" my={1}>
                Voter can get the List and history of the candidates based on
                the area of voter
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
