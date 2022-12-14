import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Marketplace = () => {
    const [visible, setVisible] = useState(false)
  return (
    <Container maxW="9xl" bg="#ffffff" centerContent>
      <Box py={5} px={3} bg="#5680cd" color="black" minW="full" h={"35vh"}>
        <Flex justifyContent={"flex-end"} display={{base: "none", md:"flex"}}>
          <Button
            w={110}
            h={"25px"}
            rounded={"none"}
            spacing="6"
            marginRight={5}
          >
            Manage apps
          </Button>

          <Button w={110} h={"25px"} rounded={"none"} spacing="6">
            Build apps
          </Button>
        </Flex>
        <Heading color={"white"}>HubSpot App Marketplace</Heading>
        <Spacer />
        <Text color={"white"}>Connect your favorite tools to HubSpot</Text>

        <br />
        <Flex justifyContent={"center"} bg={"white"} maxW="3xl" margin={"auto"}>
          <Select
            placeholder="All categories"
            rounded={"none"}
            size="lg"
            w={40}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Input
            size="lg"
            rounded={"none"}
            placeholder="Search app name or bussiness needs...."
          />
        </Flex>
      </Box>
      <Flex
        width={"full"}
        border={"1px solid red"}
        justifyContent="space-between"
        direction={{ base: "column", md: "row", lg: "row" }}
      >
        <Box p={3} border={"1px solid red"} w={{ base: "95%", md: "22%", lg: "22%" }} textAlign={"left"}>
          <Text cursor={"pointer"} onClick={()=> setVisible(!visible)}> {">"} Discover</Text>
          { visible === true && <Box p={3} >
            <Text  cursor={"pointer"} fontSize={"sm"} fontWeight={400}>
              All Collections
            </Text>
            <br />
            <Text  cursor={"pointer"} fontSize={"sm"} fontWeight={400}>
              Popular apps
            </Text>
            <br />
            <Text  cursor={"pointer"} fontSize={"sm"} fontWeight={400}>
              New apps
            </Text>
            <br />
            <Text  cursor={"pointer"}fontSize={"sm"} fontWeight={400}>
              Free apps
            </Text>
            <br />
            <Text  cursor={"pointer"}fontSize={"sm"} fontWeight={400}>
              Built by HubSpot
            </Text>
            <br />
            <Text  cursor={"pointer"}fontSize={"sm"} fontWeight={400}>
              Workflow integrations
            </Text>
            <br />

            <Text cursor={"pointer"} fontSize={"sm"} fontWeight={400}>
              Customizable CRM
            </Text>
            <br />
            <Text  cursor={"pointer"}fontSize={"sm"} fontWeight={400}>
              Apps for ABM
            </Text>
            <br />
          </Box>}
          <br />
          <Text  cursor={"pointer"}> {">"} Categories</Text>
        </Box>
        <Box border={"1px solid teal"} minW="75%" p={1}>
          <Box border={"1px solid teal"} h={"31vh"} textAlign={"left"}>
            <Box
              textColor={"#ffffff"}
              px={4}
              py={3}
              border={"1px solid red"}
              h={"18vh"}
              bg={"#ff8d59"}
              textAlign={"left"}
            >
              <Text fontSize={"2xl"}>Connected Sales & Marketing</Text>
              <Text fontSize={"md"}>
                Connect your marketing and sales apps to deliver an outstanding
                customer experience.
              </Text>
            </Box>
            <br />
            <Button
              marginLeft={4}
              rounded={"sm"}
              textColor={"white"}
              bg={"#425b76"}
              colorScheme={"gray"}
            >
              View App Collection
            </Button>
          </Box>
          {/* Popular apps */}
          <Box border={"1px solid teal"} textAlign={"left"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text fontSize={"3xl"} fontWeight={"medium"}>
                Popular apps
              </Text>
              <Link>Explore all Popular apps</Link>
            </Flex>
            <Text>
              Explore the most installed apps in the HubSpot Marketplace
            </Text>
            <SimpleGrid spacing='10px' columns={[null, 1,2, 3]} px={[6, 10, 1]}>
              <Box bg="tomato" height={{ base: "32vh", md: "33vh", lg: "35vh" }}></Box>
              <Box bg="tomato"height={{ base: "32vh", md: "33vh", lg: "35vh" }}></Box>
              <Box bg="tomato"height={{ base: "32vh", md: "33vh", lg: "35vh" }}></Box>
            </SimpleGrid>
          </Box>

          {/*  */}
          <Box border={"1px solid teal"} textAlign={"left"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text fontSize={"3xl"} fontWeight={"medium"}>
              New apps
              </Text>
              <Link>Explore all New apps</Link>
            </Flex>
            <Text>
            Recent additions worth checking out
            </Text>
            <SimpleGrid spacing='10px' columns={[null, 1,2, 3]} px={[6, 10, 1]}>
              <Box bg="tomato" height={{ base: "32vh", md: "33vh", lg: "35vh" }}></Box>
              <Box bg="tomato"height={{ base: "32vh", md: "33vh", lg: "35vh" }}></Box>
              <Box bg="tomato"height={{ base: "32vh", md: "33vh", lg: "35vh" }}></Box>
            </SimpleGrid>
          </Box>

          {/*  */}
          <Box border={"1px solid teal"} textAlign={"left"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text fontSize={"3xl"} fontWeight={"medium"}>
              Free apps

              </Text>
              <Link>Explore all Free apps</Link>
            </Flex>
            <Text>
            Explore free apps in the HubSpot Marketplace
            </Text>
            <SimpleGrid spacing='10px' columns={[null, 1,2, 3]} px={[6, 10, 1]}>
              <Box bg="tomato" height={{ base: "32vh", md: "33vh", lg: "35vh" }}></Box>
              <Box bg="tomato"height={{ base: "32vh", md: "33vh", lg: "35vh" }}></Box>
              <Box bg="tomato"height={{ base: "32vh", md: "33vh", lg: "35vh" }}></Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Marketplace;
