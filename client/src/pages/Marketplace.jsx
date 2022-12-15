import React from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaLeaf } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

const getCompanies = async () => {
  let res = await fetch("http://localhost:8179/products");
  let data = await res.json();
  //  console.log(data);
  return data;
};
const Marketplace = () => {
  const navigate = useNavigate()
  const [allcompanies, setAllcompanies] = useState([]);
  // const [popular, setPopular] = useState([]);
  const [visible, setVisible] = useState(false);

  const [popular, setPopular] = useState(false);
  const getPopularApps = async () => {
    let popularApps = await allcompanies.filter((el) => {
      return el.type === "Popular apps" && el;
    });
    setAllcompanies(popularApps);
    setPopular(!popular);
  };

  useEffect(() => {
    getCompanies().then((res) => setAllcompanies(res));
    // setPopular(popularApps);
  }, []);
  let popularApps = allcompanies.filter((el) => {
    return el.type === "Popular apps" && el;
  });
  let newApps = allcompanies.filter((el) => {
    return el.type === "New apps" && el;
  });
  let freeApps = allcompanies.filter((el) => {
    return el.type === "Free apps" && el;
  });
  let builtApps = allcompanies.filter((el) => {
    return el.type === "Built by HubSpot" && el;
  });
  let workFlowApps = allcompanies.filter((el) => {
    return el.type === "Workflow integrations" && el;
  });
  let customizableApps = allcompanies.filter((el) => {
    return el.type === "Customizable CRM" && el;
  });
  let abmApps = allcompanies.filter((el) => {
    return el.type === "Apps for ABM" && el;
  });
  let automationApps = allcompanies.filter((el) => {
    return el.type === "Automation Apps" && el;
  });
 // Go to the single product page:
  const goSingleProductPage=(id)=>{
     return navigate(`/products/${id}`)
  }

  //
  console.log(workFlowApps);
  console.log(automationApps);
  // console.log(popular);
  // if (popular) {
  //   return (
  //     <Box border={"1px solid gray"} textAlign={"left"}>
  //       <Flex justifyContent={"space-between"} alignItems={"center"}>
  //         <Text fontSize={"3xl"} fontWeight={"medium"}>
  //           Popular apps
  //         </Text>
  //         <Link>Explore all Popular apps</Link>
  //       </Flex>
  //       <Text>Explore the most installed apps in the HubSpot Marketplace</Text>
  //       <SimpleGrid
  //         spacing="10px"
  //         columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
  //         px={[6, 10, 1]}
  //         border={"1px solid purple"}
  //       >
  //         {allcompanies.map((el) => (
  //           <Box
  //             p={5}
  //             key={el._id}
  //             border={"1px solid teal"}
  //             height={{ base: "40vh", md: "45vh", lg: "45vh" }}
  //           >
  //             <Image boxSize={"50px"} src={el.image}></Image>
  //             <br />
  //             <Text fontSize={"xl"}>{el.name}</Text>
  //             <Text fontSize={"sm"}>{el.info}</Text>

  //             <Text marginTop={"5px"}>{el.desc}</Text>
  //             <br />
  //             <Text>{el.installs}</Text>
  //           </Box>
  //         ))}
  //       </SimpleGrid>
  //     </Box>
  //   );
  // }
  return (
    <Container maxW="9xl" bg="#ffffff" centerContent>
      <Box
        py={5}
        px={3}
        bg="#5680cd"
        color="black"
        minW="full"
        h={{ base: "50vh", md: "55vh" }}
        textAlign={"center"}
      >
        <Flex
          justifyContent={"flex-end"}
          display={{ base: "none", md: "flex" }}
        >
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
          /><Button bg={"white"} h={"12vh"} alignItems={"center"}><BsSearch h={"full"}/></Button>
        </Flex>
      </Box>
      <Flex
        width={"full"}
        border={"1px solid red"}
        justifyContent="space-between"
        direction={{ base: "column", md: "row", lg: "row" }}
      >
        <Box
          p={3}
          border={"1px solid red"}
          w={{ base: "95%", md: "25%", lg: "22%" }}
          textAlign={"left"}
        >
          <Text cursor={"pointer"} onClick={() => setVisible(!visible)}>
            {" "}
            {">"} Discover
          </Text>
          {visible === true && (
            <Box p={3}>
              <Text cursor={"pointer"} fontSize={"sm"} fontWeight={400}>
                All Collections
              </Text>
              <br />
              <Text
                onClick={getPopularApps}
                cursor={"pointer"}
                fontSize={"sm"}
                fontWeight={400}
              >
                Popular apps
              </Text>
              <br />
              <Text cursor={"pointer"} fontSize={"sm"} fontWeight={400}>
                New apps
              </Text>
              <br />
              <Text cursor={"pointer"} fontSize={"sm"} fontWeight={400}>
                Free apps
              </Text>
              <br />
              <Text cursor={"pointer"} fontSize={"sm"} fontWeight={400}>
                Built by HubSpot
              </Text>
              <br />
              <Text cursor={"pointer"} fontSize={"sm"} fontWeight={400}>
                Workflow integrations
              </Text>
              <br />

              <Text cursor={"pointer"} fontSize={"sm"} fontWeight={400}>
                Customizable CRM
              </Text>
              <br />
              <Text cursor={"pointer"} fontSize={"sm"} fontWeight={400}>
                Apps for ABM
              </Text>
              <br />
            </Box>
          )}
          <br />
          <Text cursor={"pointer"}> {">"}Categories</Text>
        </Box>
         
        {/* Right Box Content */}
        <Box border={"1px solid teal"} minW="75%" p={1}>
          <Box border={"1px solid teal"} h={"47vh"} textAlign={"left"}>
            <Box
              textColor={"#ffffff"}
              px={4}
              py={3}
              border={"1px solid red"}
              h={"24vh"}
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

          <Box>
            <Box border={"1px solid gray"} textAlign={"left"}>
              <Flex justifyContent={"space-between"} alignItems={"center"} paddingRight={2}>
                <Text fontSize={"3xl"} fontWeight={"medium"}>
                  Popular apps
                </Text>
                <Link>Explore all Popular apps</Link>
              </Flex>
              <Text>
                Explore the most installed apps in the HubSpot Marketplace
              </Text>
              <SimpleGrid
                spacing="10px"
                columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                px={[6, 10, 1]}
                border={"1px solid purple"}
              >
                {popularApps.map((el) => (
                  <Box
                    p={5}
                    key={el._id}
                    border={"1px solid teal"}
                    height={{ base: "67vh", md: "69vh", lg: "75vh" }}
                    onClick={()=>goSingleProductPage(el._id)}
                    cursor={"pointer"}
                  >
                    <Image boxSize={"50px"} src={el.image}></Image>
                    <br />
                    <Text fontSize={"xl"}>{el.name}</Text>
                    <Text fontSize={"sm"}>{el.info}</Text>

                    <Text marginTop={"5px"}>{el.desc}</Text>
                    <br />
                    <Text>{el.installs}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            <Box border={"1px solid teal"} textAlign={"left"}>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text fontSize={"3xl"} fontWeight={"medium"}>
                  New apps
                </Text>
                <Link>Explore all New apps</Link>
              </Flex>
              <Text>Recent additions worth checking out</Text>
              <SimpleGrid
                spacing="10px"
                columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                px={[6, 10, 1]}
                border={"1px solid purple"}
              >
                {newApps.map((el) => (
                  <Box
                    p={5}
                    key={el._id}
                    border={"1px solid teal"}
                    height={{ base: "67vh", md: "69vh", lg: "75vh" }}
                    onClick={()=>goSingleProductPage(el._id)}
                    cursor={"pointer"}
                  >
                    <Image boxSize={"50px"} src={el.image}></Image>
                    <br />
                    <Text fontSize={"xl"}>{el.name}</Text>
                    <Text fontSize={"sm"}>{el.info}</Text>

                    <Text marginTop={"5px"}>{el.desc}</Text>
                    <br />
                    <Text>{el.installs}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            <Box border={"1px solid yellow"} textAlign={"left"}>
              <Flex
                justifyContent={"space-between"}
                border={"1px solid blue"}
                alignItems={"center"}
              >
                <Text fontSize={"3xl"} fontWeight={"medium"}>
                  Free apps
                </Text>
                <Link>Explore all Free apps</Link>
              </Flex>
              <Text>Explore free apps in the HubSpot Marketplace</Text>
              <SimpleGrid
                spacing="10px"
                columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                px={[6, 10, 1]}
                border={"1px solid purple"}
              >
                {freeApps.map((el) => (
                  <Box
                    p={5}
                    key={el._id}
                    border={"1px solid teal"}
                    height={{ base: "67vh", md: "69vh", lg: "75vh" }}
                    onClick={()=>goSingleProductPage(el._id)}
                    cursor={"pointer"}
                  >
                    <Image boxSize={"50px"} src={el.image}></Image>
                    <br />
                    <Text fontSize={"xl"}>{el.name}</Text>
                    <Text fontSize={"sm"}>{el.info}</Text>

                    <Text marginTop={"5px"}>{el.desc}</Text>
                    <br />
                    <Text>{el.installs}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
            <Box border={"1px solid yellow"} textAlign={"left"}>
              <Flex
                justifyContent={"space-between"}
                border={"1px solid blue"}
                alignItems={"center"}
              >
                <Text fontSize={"3xl"} fontWeight={"medium"}>
                  Built by Hubspot
                </Text>
                <Link>Explore all Free apps</Link>
              </Flex>
              <Text>Explore apps built and supported by HubSpot</Text>
              <SimpleGrid
                spacing="10px"
                columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                px={[6, 10, 1]}
                border={"1px solid purple"}
              >
                {builtApps.map((el) => (
                  <Box
                    p={5}
                    key={el._id}
                    border={"1px solid teal"}
                    height={{ base: "67vh", md: "69vh", lg: "75vh" }}
                    onClick={()=>goSingleProductPage(el._id)}
                    cursor={"pointer"}
                  >
                    <Image boxSize={"50px"} src={el.image}></Image>
                    <br />
                    <Text fontSize={"xl"}>{el.name}</Text>
                    <Text fontSize={"sm"}>{el.info}</Text>

                    <Text marginTop={"5px"}>{el.desc}</Text>
                    <br />
                    <Text>{el.installs}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
            <Box border={"1px solid yellow"} textAlign={"left"}>
              <Flex
                justifyContent={"space-between"}
                border={"1px solid blue"}
                alignItems={"center"}
              >
                <Text fontSize={"3xl"} fontWeight={"medium"}>
                  Workflow integrations
                </Text>
                <Link>Explore all Free apps</Link>
              </Flex>
              <Text>
                Explore apps you can leverage within HubSpot workflows.
              </Text>
              <SimpleGrid
                spacing="10px"
                columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                px={[6, 10, 1]}
                border={"1px solid purple"}
              >
                {workFlowApps.map((el) => (
                  <Box
                    p={5}
                    key={el._id}
                    border={"1px solid teal"}
                    height={{ base: "67vh", md: "69vh", lg: "75vh" }}
                    onClick={()=>goSingleProductPage(el._id)}
                    cursor={"pointer"}
                  >
                    <Image boxSize={"50px"} src={el.image}></Image>
                    <br />
                    <Text fontSize={"xl"}>{el.name}</Text>
                    <Text fontSize={"sm"}>{el.info}</Text>

                    <Text marginTop={"5px"}>{el.desc}</Text>
                    <br />
                    <Text>{el.installs}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
            <Box border={"1px solid yellow"} textAlign={"left"}>
              <Flex
                justifyContent={"space-between"}
                border={"1px solid blue"}
                alignItems={"center"}
              >
                <Text fontSize={"3xl"} fontWeight={"medium"}>
                  Customizable CRM
                </Text>
                <Link>Explore all Free apps</Link>
              </Flex>
              <Text>
                Explore apps that can help you customize your HubSpot CRM
                Platform
              </Text>
              <SimpleGrid
                spacing="10px"
                columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                px={[6, 10, 1]}
                border={"1px solid purple"}
              >
                {customizableApps.map((el) => (
                  <Box
                    p={5}
                    key={el._id}
                    border={"1px solid gray"}
                    height={{ base: "67vh", md: "69vh", lg: "75vh" }}
                    onClick={()=>goSingleProductPage(el._id)}
                    cursor={"pointer"}
                  >
                    <Image boxSize={"50px"} src={el.image}></Image>
                    <br />
                    <Text fontSize={"xl"}>{el.name}</Text>
                    <Text fontSize={"sm"}>{el.info}</Text>

                    <Text marginTop={"5px"}>{el.desc}</Text>
                    <br />
                    <Text>{el.installs}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
            <Box border={"1px solid yellow"} textAlign={"left"}>
              <Flex
                justifyContent={"space-between"}
                border={"1px solid blue"}
                alignItems={"center"}
              >
                <Text fontSize={"3xl"} fontWeight={"medium"}>
                  Apps for ABM
                </Text>
                <Link>Explore all Free apps</Link>
              </Flex>
              <Text>
                Explore these ABM apps to better align your sales and marketing
                teams and strategies.
              </Text>
              <SimpleGrid
                spacing="10px"
                columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                px={[6, 10, 1]}
                border={"1px solid purple"}
              >
                {abmApps.map((el) => (
                  <Box
                    p={5}
                    key={el._id}
                    border={"1px solid teal"}
                    height={{ base: "67vh", md: "69vh", lg: "75vh" }}
                    onClick={()=>goSingleProductPage(el._id)}
                    cursor={"pointer"}
                  >
                    <Image boxSize={"50px"} src={el.image}></Image>
                    <br />
                    <Text fontSize={"xl"}>{el.name}</Text>
                    <Text fontSize={"sm"}>{el.info}</Text>

                    <Text marginTop={"5px"}>{el.desc}</Text>
                    <br />
                    <Text>{el.installs}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
            <Box border={"1px solid yellow"} textAlign={"left"}>
              <Flex
                justifyContent={"space-between"}
                border={"1px solid blue"}
                alignItems={"center"}
              >
                <Text fontSize={"3xl"} fontWeight={"medium"}>
                  Automation Apps
                </Text>
                <Link>Explore all Free apps</Link>
              </Flex>
              <Text>
                Connect HubSpot to these apps to automate marketing processes.
              </Text>
              <SimpleGrid
                spacing="10px"
                columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                px={[6, 10, 1]}
                border={"1px solid purple"}
              >
                {automationApps.map((el) => (
                  <Box
                    p={5}
                    key={el._id}
                    border={"1px solid teal"}
                    height={{ base: "67vh", md: "69vh", lg: "75vh" }}
                    onClick={()=>goSingleProductPage(el._id)}
                    cursor={"pointer"}
                  >
                    <Image boxSize={"50px"} src={el.image}></Image>
                    <br />
                    <Text fontSize={"xl"}>{el.name}</Text>
                    <Text fontSize={"sm"}>{el.info}</Text>

                    <Text marginTop={"5px"}>{el.desc}</Text>
                    <br />
                    <Text>{el.installs}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
          {/*  */}
        </Box>
      </Flex>
    </Container>
  );
};

export default Marketplace;
