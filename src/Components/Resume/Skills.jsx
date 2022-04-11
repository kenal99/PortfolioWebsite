import { Box, Divider, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
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
        <SimpleGrid columns={2} spacing={10}>
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              HTML
            </Text>
            <Box d="flex" height="20px" boxShadow="md">
              <Box
                w="90%"
                bg="#034D73"
                borderLeftRadius={10}
                borderRightRadius={2}
              ></Box>
              <Box w="10%" bg="lightblue" borderRightRadius={10}></Box>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              CSS
            </Text>
            <Box d="flex" height="20px" boxShadow="md">
              <Box
                w="80%"
                bg="#034D73"
                borderLeftRadius={10}
                borderRightRadius={2}
              ></Box>
              <Box w="20%" bg="lightblue" borderRightRadius={10}></Box>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              Bootstrap
            </Text>
            <Box d="flex" height="20px" boxShadow="md">
              <Box
                w="85%"
                bg="#034D73"
                borderLeftRadius={10}
                borderRightRadius={2}
              ></Box>
              <Box w="15%" bg="lightblue" borderRightRadius={10}></Box>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              Chakra UI
            </Text>
            <Box d="flex" height="20px" boxShadow="md">
              <Box
                w="90%"
                bg="#034D73"
                borderLeftRadius={10}
                borderRightRadius={2}
              ></Box>
              <Box w="10%" bg="lightblue" borderRightRadius={10}></Box>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              Material UI
            </Text>
            <Box d="flex" height="20px" boxShadow="md">
              <Box
                w="70%"
                bg="#034D73"
                borderLeftRadius={10}
                borderRightRadius={2}
              ></Box>
              <Box w="30%" bg="lightblue" borderRightRadius={10}></Box>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              JavaScript
            </Text>
            <Box d="flex" height="20px" boxShadow="md">
              <Box
                w="78%"
                bg="#034D73"
                borderLeftRadius={10}
                borderRightRadius={2}
              ></Box>
              <Box w="22%" bg="lightblue" borderRightRadius={10}></Box>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              JQuery
            </Text>
            <Box d="flex" height="20px" boxShadow="md">
              <Box
                w="80%"
                bg="#034D73"
                borderLeftRadius={10}
                borderRightRadius={2}
              ></Box>
              <Box w="20%" bg="lightblue" borderRightRadius={10}></Box>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              React js
            </Text>
            <Box d="flex" height="20px" boxShadow="md">
              <Box
                w="90%"
                bg="#034D73"
                borderLeftRadius={10}
                borderRightRadius={2}
              ></Box>
              <Box w="10%" bg="lightblue" borderRightRadius={10}></Box>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              Express js
            </Text>
            <Box d="flex" height="20px" boxShadow="md">
              <Box
                w="90%"
                bg="#034D73"
                borderLeftRadius={10}
                borderRightRadius={2}
              ></Box>
              <Box w="10%" bg="lightblue" borderRightRadius={10}></Box>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              Node js
            </Text>
            <Box d="flex" height="20px" boxShadow="md">
              <Box
                w="85%"
                bg="#034D73"
                borderLeftRadius={10}
                borderRightRadius={2}
              ></Box>
              <Box w="15%" bg="lightblue" borderRightRadius={10}></Box>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              Python
            </Text>
            <Box d="flex" height="20px" boxShadow="md">
              <Box
                w="88%"
                bg="#034D73"
                borderLeftRadius={10}
                borderRightRadius={2}
              ></Box>
              <Box w="12%" bg="lightblue" borderRightRadius={10}></Box>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              Flask
            </Text>
            <Box d="flex" height="20px" boxShadow="md">
              <Box
                w="75%"
                bg="#034D73"
                borderLeftRadius={10}
                borderRightRadius={2}
              ></Box>
              <Box w="25%" bg="lightblue" borderRightRadius={10}></Box>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              Java
            </Text>
            <Box d="flex" height="20px" boxShadow="md">
              <Box
                w="85%"
                bg="#034D73"
                borderLeftRadius={10}
                borderRightRadius={2}
              ></Box>
              <Box w="15%" bg="lightblue" borderRightRadius={10}></Box>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              C
            </Text>
            <Box d="flex" height="20px" boxShadow="md">
              <Box
                w="80%"
                bg="#034D73"
                borderLeftRadius={10}
                borderRightRadius={2}
              ></Box>
              <Box w="20%" bg="lightblue" borderRightRadius={10}></Box>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              MongoDB
            </Text>
            <Box d="flex" height="20px" boxShadow="md">
              <Box
                w="90%"
                bg="#034D73"
                borderLeftRadius={10}
                borderRightRadius={2}
              ></Box>
              <Box w="10%" bg="lightblue" borderRightRadius={10}></Box>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              Sql
            </Text>
            <Box d="flex" height="20px" boxShadow="md">
              <Box
                w="80%"
                bg="#034D73"
                borderLeftRadius={10}
                borderRightRadius={2}
              ></Box>
              <Box w="20%" bg="lightblue" borderRightRadius={10}></Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Skills;
