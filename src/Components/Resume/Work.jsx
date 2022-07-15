import {
  Box,
  Divider,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Work_data } from "../../data/Data";

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
        pb={5}
      >
        {Work_data.map((data) => {
          return (
            <Box d="flex" flexDir="column" mt={5} alignItems="center">
              <Text fontSize={{ base: "lg", md: "2xl" }} color="#FF4F1F">
                <i class={data.icon}></i>&nbsp;{data.company}
              </Text>

              <Text fontWeight="medium" fontSize="md" my={1}>
                <b>{data.profile}:</b> {data.year}
              </Text>
              <UnorderedList>
                {data.description.map((desp) => {
                  return (
                    <>
                      <Text fontSize="bold" my={1}>
                        <b>{desp.slice(0, 1)}</b>
                      </Text>

                      <UnorderedList>
                        {desp.slice(1, desp.length + 1).map((data) => {
                          return <ListItem>{data}</ListItem>;
                        })}
                      </UnorderedList>
                    </>
                  );
                })}
              </UnorderedList>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Work;
