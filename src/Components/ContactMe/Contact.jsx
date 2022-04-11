import { Box, Text, Divider, SimpleGrid } from "@chakra-ui/layout";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_sn6ywxi",
        "template_gsa9hcq",
        form.current,
        "o0lEY11a9blT7qXIE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setformData({ name: "", email: "", message: "" });
  };
  return (
    <Box
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
            p={30}
          >
            <Image src="/contact_img.png" />
          </Box>

          <Box d="flex" flexDir="column" alignItems="center" p={30}>
            <Text fontSize="2xl" fontWeight="medium" textAlign="center">
              Get in Touch
            </Text>
            <Divider mt={2} width={100} orientation="horizontal" />

            <form ref={form}>
              <FormControl mt={5}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={(e) => {
                    setformData({ ...formData, name: e.target.value });
                  }}
                />

                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={(e) => {
                    setformData({ ...formData, email: e.target.value });
                  }}
                />
                <FormHelperText>We'll never share your email.</FormHelperText>

                <Text mb="8px">Message</Text>
                <Textarea
                  placeholder="Type your message here.."
                  size="sm"
                  name="message"
                  value={formData.message}
                  onChange={(e) => {
                    setformData({ ...formData, message: e.target.value });
                  }}
                />
                <Button
                  mt={5}
                  colorScheme="orange"
                  variant="solid"
                  onClick={sendEmail}
                >
                  <i class="fa-solid fa-paper-plane" />
                  &nbsp;Send
                </Button>
              </FormControl>
            </form>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contact;
