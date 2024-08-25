import { Box, Divider, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { Project_data } from "../../data/Data";

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
        pb={5}
      >
        {Project_data.map((data) => {
          return (
            <Box d="flex" flexDir="column" mt={5}>
              <Box d="flex" alignItems="center" justifyContent="space-between">
                <Text fontSize={{ base: "lg", md: "2xl" }} color="#FF4F1F">
                  <i class={data.icon}></i>&nbsp;&nbsp;{data.name}
                </Text>
              </Box>
              <UnorderedList>
                <ListItem>
                  <Text fontWeight="medium" fontSize="md" my={1}>
                    <b>Key Skills:</b> {data.key_skills}
                  </Text>
                </ListItem>
                {data.description.map((desp) => {
                  return (
                    <ListItem>
                      <Text fontWeight="medium" fontSize="md" my={1}>
                        {desp}
                      </Text>
                    </ListItem>
                  );
                })}
                {data.website === "" ? (
                  <></>
                ) : (
                  <ListItem>
                    <Text fontWeight="medium" fontSize="md" my={1}>
                      <b>GitHub: </b>
                      <a href={data.website}>{data.website}</a>
                    </Text>
                  </ListItem>
                )}
              </UnorderedList>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;
