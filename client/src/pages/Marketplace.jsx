import React from "react";
import axios from "axios";
import {
  background,
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
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaLeaf } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import SearchCompanies from "../components/SearchCompanies";

import NavbarTwo from "../components/dashboard/Navbar";
const getCompanies = async () => {
  let res = await fetch("https://hubpointserver.onrender.com/products",{credentials:"include"});
  let data = await res.json();
  //  console.log(data);
  return data;
};
const getPopularTypeapps = async () => {
  let res = await fetch("https://hubpointserver.onrender.com/products",{credentials:"include"}, {
    type: "Popular apps",
  });
  let data = await res.json();
  console.log(data);
  return data;
};
const getnewTypeApps = async () => {
  let res = await fetch("https://hubpointserver.onrender.com/products",{credentials:"include"}, { type: "New apps" });
  let data = await res.json();
  console.log(data);
  return data;
};
const getfreeTypeApps = async () => {
  let res = await fetch("https://hubpointserver.onrender.com/products",{credentials:"include"}, {
    type: "Free apps",
  });
  let data = await res.json();
  console.log(data);
  return data;
};
const getbuiltbyTypeApps = async () => {
  let res = await fetch("https://hubpointserver.onrender.com/products",{credentials:"include"}, {
    type: "Built by HubSpot",
  });
  let data = await res.json();
  console.log(data);
  return data;
};
const getWorkFlowTypeApps = async () => {
  let res = await fetch("https://hubpointserver.onrender.com/products",{credentials:"include"}, {
    type: "Workflow integrations",
  });
  let data = await res.json();
  console.log(data);
  return data;
};
const getCustomizeTypeApps = async () => {
  let res = await fetch("https://hubpointserver.onrender.com/products",{credentials:"include"}, {
    type: "Customizable CRM",
  });
  let data = await res.json();
  console.log(data);
  return data;
};
const getAbmTypeApps = async () => {
  let res = await fetch("https://hubpointserver.onrender.com/products",{credentials:"include"}, {
    type: "Apps for ABM",
  });
  let data = await res.json();
  console.log(data);
  return data;
};
const getAutomationTypeApps = async () => {
  let res = await fetch("https://hubpointserver.onrender.com/products",{credentials:"include"}, {
    type: "Apps for ABM",
  });
  let data = await res.json();
  console.log(data);
  return data;
};
const Marketplace = () => {
  const navigate = useNavigate();
  const [allcompanies, setAllcompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState("");
  const [searchApps, setSearchApps] = useState([]);
  const [option, setOption] = useState("All categories");
  
  const [showSearch, setShowSearch] = useState(false);
  // const [popular, setPopular] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [popular, setPopular] = useState(false);
  const [newapps, setNewapps] = useState(false);
  const [freeapps, setFreeapps] = useState(false);
  const [builtapps, setBuiltApps] = useState(false);
  const [workflowapps, setWorkflowApps] = useState(false);
  const [customizapps, setCustomizableApps] = useState(false);
  const [abmapps, setAbmApps] = useState(false);
  const [automationapps, setAutomationApps] = useState(false);

  const [paidapps, setPaidApps] = useState(false);

  // Filtering ------>>
  const getAllApps = async () => {
    setLoading(true);
    await getCompanies().then((res) => setAllcompanies(res));
    setLoading(false);
    setPopular(false);
    setNewapps(false);
    setFreeapps(false);
    setBuiltApps(false);
    setWorkflowApps(false);
    setCustomizableApps(false);
    setAbmApps(false);
    setAutomationApps(false);
    setPaidApps(false);
    setIsActive((current) => !current);
  };
  const getPopularApps = async () => {
    setLoading(true);
    // let popularApps =await allcompanies.filter((el) => {

    //   return el.type === "Popular apps" && el;
    // });
    await getPopularTypeapps().then((res) => setAllcompanies(res));
    setLoading(false);
    setNewapps(false);
    setFreeapps(false);
    setBuiltApps(false);
    setWorkflowApps(false);
    setCustomizableApps(false);
    setAbmApps(false);
    setAutomationApps(false);
    setIsActive(false);
    setPaidApps(false);
    // setAllcompanies(popularApps);
    setPopular(!popular);
  };
  const getNewApps = async () => {
    setLoading(true);
    await getnewTypeApps().then((res) => setAllcompanies(res));
    setLoading(false);
    setPopular(false);
    setIsActive(false);
    setFreeapps(false);
    setBuiltApps(false);
    setWorkflowApps(false);
    setCustomizableApps(false);
    setAbmApps(false);
    setPaidApps(false);
    setAutomationApps(false);
    // setAllcompanies(newApps);
    setNewapps(!newapps);
  };
  const getFreeApps = async () => {
    setLoading(true);
    await getfreeTypeApps().then((res) => setAllcompanies(res));
    setLoading(false);
    setPopular(false);
    setNewapps(false);
    setPaidApps(false);
    setBuiltApps(false);
    setWorkflowApps(false);
    setCustomizableApps(false);
    setAbmApps(false);
    setIsActive(false);
    setAutomationApps(false);

    // setAllcompanies(freeApps);
    setFreeapps(!freeapps);
  };
  const getBuildbyApps = async () => {
    setLoading(true);
    await getbuiltbyTypeApps().then((res) => setAllcompanies(res));
    setLoading(false);
    setPopular(false);
    setNewapps(false);
    setFreeapps(false);
    setIsActive(false);
    setWorkflowApps(false);
    setCustomizableApps(false);
    setAbmApps(false);
    setPaidApps(false);
    setAutomationApps(false);
    // setAllcompanies(builtApps);
    setBuiltApps(!builtapps);
  };
  const getWorkFlowApps = async () => {
    setLoading(true);
    await getWorkFlowTypeApps().then((res) => setAllcompanies(res));
    setLoading(false);
    setPopular(false);
    setNewapps(false);
    setFreeapps(false);
    setBuiltApps(false);
    setIsActive(false);
    setCustomizableApps(false);
    setAbmApps(false);
    setAutomationApps(false);
    setPaidApps(false);
    // setAllcompanies(workFlowApps);
    setWorkflowApps(!workflowapps);
  };
  const getCustomizeApps = async () => {
    setLoading(true);
    await getCustomizeTypeApps().then((res) => setAllcompanies(res));
    setLoading(false);
    setPopular(false);
    setNewapps(false);
    setFreeapps(false);
    setBuiltApps(false);
    setWorkflowApps(false);
    setIsActive(false);
    setAbmApps(false);
    setPaidApps(false);
    setAutomationApps(false);
    // setAllcompanies(customizableApps);
    setCustomizableApps(!customizapps);
  };
  const getAbmApps = async () => {
    setLoading(true);
    await getAbmTypeApps().then((res) => setAllcompanies(res));
    setLoading(false);
    setPopular(false);
    setNewapps(false);
    setFreeapps(false);
    setBuiltApps(false);
    setWorkflowApps(false);
    setCustomizableApps(false);
    setIsActive(false);
    setPaidApps(false);
    setAutomationApps(false);
    // setAllcompanies(abmApps);
    setAbmApps(!abmapps);
  };
  const getAutomationApps = async () => {
    setLoading(true);
    await getAutomationTypeApps().then((res) => setAllcompanies(res));
    setLoading(false);
    setPopular(false);
    setNewapps(false);
    setFreeapps(false);
    setBuiltApps(false);
    setPaidApps(false);
    setWorkflowApps(false);
    setCustomizableApps(false);
    setAbmApps(false);
    setIsActive(false);
    // setAllcompanies(automationApps);
    setAutomationApps(!automationapps);
  };

  // filter by pricing:
  let getPaidApps = () => {
    setLoading(true);
    let paidApps = allcompanies.filter((el) => {
      return el.type != "Free apps" && el;
    });
    setLoading(false);
    setPopular(false);
    setNewapps(false);
    setFreeapps(false);
    setBuiltApps(false);
    setWorkflowApps(false);
    setCustomizableApps(false);
    setAbmApps(false);
    setIsActive(false);
    setAutomationApps(false);
    setAllcompanies(paidApps);
    setPaidApps(!paidapps);
  };

  // ------>>>>

  // Search Products:

  console.log("q", q);
  useEffect(() => {
    getCompanies().then((res) => setAllcompanies(res));
    // setPopular(popularApps);
  }, [
    popular,
    newapps,
    freeapps,
    builtapps,
    workflowapps,
    customizapps,
    abmapps,
    automationapps,
    paidapps,
    loading,
    isActive,
    showSearch,
  ]);
  let popularApps = allcompanies.filter((el) => {
    return el.type === "Popular apps" && el;
  });
  
  const getSearchProducts = async (q) => {
 setQ(q)
 setShowSearch(true);
    if(q == ""){
      return setShowSearch(false);
     
    }
    let data = await axios.get(`https://hubpointserver.onrender.com/products?q=${q}`,{
      withCredentials: true,
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
  }});

    setSearchApps(data.data);
  };
console.log(q);
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
  let paidApps = allcompanies.filter((el) => {
    return el.type != "Free apps" && el;
  });
  // Go to the single product page:
  const goSingleProductPage = (id) => {
    return navigate(`/products/${id}`);
  };

  //
  console.log("option", showSearch);
  console.log(allcompanies);

  return (
    <>
    <NavbarTwo/>
    <Container maxW="9xl" bg="#ffffff" centerContent>
      <Box
        py={5}
        px={3}
        bg="#5680cd"
        color="black"
        minW="full"
        h={{ base: "38vh", md: "43vh" }}
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
        <Flex justifyContent={"center"} bg={"white"} maxW="3xl" margin={"auto"} alignItems={"center"}>
          <Select
            placeholder="All categories"
            rounded={"none"}
            size="lg"
            border={"none"}
            w={40}
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="Marketting">Marketting</option>
            <option value="Sales">Sales</option>
            <option value="Finance">Finance</option>
          </Select>
          <Input
           border={"none"}
            size="lg"
            rounded={"none"}
            type={"text"}
            placeholder="Search app name or bussiness needs...."
            onChange={(e) => getSearchProducts(e.target.value)}
          />
          <Button
            bg={"white"}
            h={"7vh"}
            alignItems={"center"}
            border={"none"}
            onClick={()=>getSearchProducts(q)}
          >
            <BsSearch h={"full"} />
          </Button>
        </Flex>
      </Box>
      <Flex
        width={"full"}
        justifyContent="space-between"
        direction={{ base: "column", md: "row", lg: "row" }}
      >
        <Box
          px={6}
          py={3}
          w={{ base: "35%", md: "28%", lg: "28%" }}
          textAlign={"left"}
        >
          <Text
            cursor={"pointer"}
            fontWeight={500}
            onClick={() => setVisible(!visible)}
          >
            {">"} Discover
          </Text>
          {visible === true && (
            <Box p={1}>
              <Text
                margin={1}
                onClick={getAllApps}
                py={1}
                cursor={"pointer"}
                fontSize={"sm"}
                fontWeight={400}
                _hover={{ background: "#a8d5ff" }}
                backgroundColor={isActive === true ? "#a8d5ff" : ""}
              >
                All Collections
              </Text>
              <Spacer />
              <Text
                onClick={getPopularApps}
                cursor={"pointer"}
                py={1}
                margin={1}
                fontSize={"sm"}
                fontWeight={400}
                _hover={{ background: "#a8d5ff" }}
                backgroundColor={popular === true ? "#a8d5ff" : ""}
              >
                Popular apps
              </Text>

              <Text
                onClick={getNewApps}
                cursor={"pointer"}
                py={1}
                margin={1}
                fontSize={"sm"}
                fontWeight={400}
                _hover={{ background: "#a8d5ff" }}
                backgroundColor={newapps === true ? "#a8d5ff" : ""}
              >
                New apps
              </Text>

              <Text
                onClick={getFreeApps}
                cursor={"pointer"}
                py={1}
                margin={1}
                fontSize={"sm"}
                fontWeight={400}
                _hover={{ background: "#a8d5ff" }}
                backgroundColor={freeapps === true ? "#a8d5ff" : ""}
              >
                Free apps
              </Text>

              <Text
                onClick={getBuildbyApps}
                cursor={"pointer"}
                py={1}
                margin={1}
                fontSize={"sm"}
                fontWeight={400}
                _hover={{ background: "#a8d5ff" }}
                backgroundColor={builtapps === true ? "#a8d5ff" : ""}
              >
                Built by HubSpot
              </Text>

              <Text
                onClick={getWorkFlowApps}
                cursor={"pointer"}
                py={1}
                margin={1}
                fontSize={"sm"}
                fontWeight={400}
                _hover={{ background: "#a8d5ff" }}
                backgroundColor={workflowapps === true ? "#a8d5ff" : ""}
              >
                Workflow integrations
              </Text>

              <Text
                onClick={getCustomizeApps}
                cursor={"pointer"}
                py={1}
                margin={1}
                fontSize={"sm"}
                fontWeight={400}
                _hover={{ background: "#a8d5ff" }}
                backgroundColor={customizapps === true ? "#a8d5ff" : ""}
              >
                Customizable CRM
              </Text>

              <Text
                onClick={getAbmApps}
                cursor={"pointer"}
                py={1}
                margin={1}
                fontSize={"sm"}
                fontWeight={400}
                _hover={{ background: "#a8d5ff" }}
                backgroundColor={abmapps === true ? "#a8d5ff" : ""}
              >
                Apps for ABM
              </Text>

              <Text
                onClick={getAutomationApps}
                cursor={"pointer"}
                py={1}
                margin={1}
                fontSize={"sm"}
                fontWeight={400}
                _hover={{ background: "#a8d5ff" }}
                backgroundColor={automationapps === true ? "#a8d5ff" : ""}
              >
                Automation Apps
              </Text>
            </Box>
          )}
          <br />
          <Text
            cursor={"pointer"}
            fontWeight={500}
            onClick={() => setVisible2(!visible2)}
          >
            {" "}
            {">"}Pricing
          </Text>
          {visible2 === true && (
            <Box p={3}>
              <Text
                onClick={getAllApps}
                py={1}
                margin={1}
                cursor={"pointer"}
                fontSize={"sm"}
                fontWeight={400}
                _hover={{ background: "#a8d5ff" }}
                backgroundColor={isActive === true ? "#a8d5ff" : ""}
              >
                All
              </Text>

              <Text
                onClick={getFreeApps}
                py={1}
                margin={1}
                cursor={"pointer"}
                fontSize={"sm"}
                fontWeight={400}
                _hover={{ background: "#a8d5ff" }}
                backgroundColor={freeapps === true ? "#a8d5ff" : ""}
              >
                Free apps
              </Text>

              <Text
                onClick={getPaidApps}
                py={1}
                margin={1}
                cursor={"pointer"}
                fontSize={"sm"}
                fontWeight={400}
                _hover={{ background: "#a8d5ff" }}
                backgroundColor={paidapps === true ? "#a8d5ff" : ""}
              >
                Monthly Paid Apps
              </Text>
              <br />
            </Box>
          )}
        </Box>

        {/* Right Box Content */}
        <Box minW="73%" p={5}>
          {/*  */}
          {showSearch === true ? (
            <Box>
              <Text fontSize={["xl", "2xl"]}>Search Results</Text>
              <Text fontSize={["md", "lg"]}>
                {searchApps.length} of {searchApps.length} results for "{q}" in{" "}
                {option}
              </Text>
              <br />
              <SimpleGrid
                spacing="10px"
                columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                px={[6, 10, 1]}
              >
                {searchApps.map((el) => (
                  <SearchCompanies
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    info={el.info}
                    desc={el.desc}
                    installs={el.installs}
                    image={el.image}
                  />
                ))}
              </SimpleGrid>
            </Box>
          ) : (
            <Box
              h={"37vh"}
              textAlign={"left"}
              boxShadow="md"
              p="2"
              rounded="sm"
              bg="white"
            >
              <Box
                textColor={"#ffffff"}
                px={4}
                py={3}
                // border={"1px solid red"}
                h={"22vh"}
                bg={"#ff8d59"}
                textAlign={"left"}
              >
                <Text fontSize={["xl", "2xl"]}>
                  Connected Sales & Marketing
                </Text>
                <Text fontSize={["sm", "md"]}>
                  Connect your marketing and sales apps to deliver an
                  outstanding customer experience.
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
          )}
          {/*  */}

          <br />
          {/* Popular apps */}
          {loading === true ? (
            <Box width={"full"} textAlign={"center"}>
              <Spinner
                margin={"auto"}
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Box>
          ) : (
            <Box>
              {loading === true && <h1>....Loading</h1>}
              {newapps === false &&
                freeapps === false &&
                builtapps === false &&
                workflowapps === false &&
                customizapps === false &&
                abmapps === false &&
                automationapps === false &&
                paidapps === false && (
                  <Box textAlign={"left"}>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      paddingRight={2}
                    >
                      <Text fontSize={["2xl", "3xl"]} fontWeight={"medium"}>
                        Popular apps
                      </Text>
                      <Link>Explore all Popular apps</Link>
                    </Flex>
                    <Text>
                      Explore the most installed apps in the HubSpot Marketplace
                    </Text>
                    <br />
                    <SimpleGrid
                      spacing="10px"
                      columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                      px={[6, 10, 1]}
                      // border={"1px solid purple"}
                    >
                      {popularApps.map((el) => (
                        <Box
                          p={5}
                          key={el._id}
                          // border={"1px solid teal"}
                          _hover={{ border: "1px solid #0037ff" }}
                          height={{ base: "47vh", md: "40vh", lg: "52vh" }}
                          onClick={() => goSingleProductPage(el._id)}
                          cursor={"pointer"}
                          boxShadow="md"
                        >
                          <Image boxSize={"50px"} src={el.image}></Image>
                          <br />
                          <Text fontSize={"xl"}>{el.name}</Text>
                          <Text fontSize={"sm"}>{el.info}</Text>

                          <Text fontSize={"17px"} marginTop={"5px"}>
                            {el.desc}
                          </Text>
                          <br />
                          <Text>{el.installs}</Text>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Box>
                )}
              {/* <Spacer/> */}
              {popular == false &&
                freeapps === false &&
                builtapps === false &&
                workflowapps === false &&
                customizapps === false &&
                abmapps === false &&
                automationapps === false &&
                paidapps === false && (
                  <Box textAlign={"left"} marginTop={10}>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      paddingRight={2}
                    >
                      <Text fontSize={["2xl", "3xl"]} fontWeight={"medium"}>
                        New apps
                      </Text>
                      <Link>Explore all New apps</Link>
                    </Flex>
                    <Text>Recent additions worth checking out</Text>
                    <br />
                    <SimpleGrid
                      spacing="10px"
                      columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                      px={[6, 10, 1]}
                      // border={"1px solid purple"}
                    >
                      {newApps.map((el) => (
                        <Box
                          p={5}
                          key={el._id}
                          _hover={{ border: "1px solid #0037ff" }}
                          // border={"1px solid teal"}
                          height={{ base: "47vh", md: "53vh", lg: "55vh" }}
                          onClick={() => goSingleProductPage(el._id)}
                          cursor={"pointer"}
                          boxShadow="md"
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
                )}

              {popular == false &&
                newapps == false &&
                builtapps === false &&
                workflowapps === false &&
                customizapps === false &&
                abmapps === false &&
                automationapps === false &&
                paidapps === false && (
                  <Box textAlign={"left"} marginTop={10}>
                    <Flex
                      justifyContent={"space-between"}
                      paddingRight={2}
                      // border={"1px solid blue"}
                      alignItems={"center"}
                    >
                      <Text fontSize={["2xl", "3xl"]} fontWeight={"medium"}>
                        Free apps
                      </Text>
                      <Link>Explore all Free apps</Link>
                    </Flex>
                    <Text>Explore free apps in the HubSpot Marketplace</Text>
                    <br />
                    <SimpleGrid
                      spacing="10px"
                      columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                      px={[6, 10, 1]}
                      // border={"1px solid purple"}
                    >
                      {freeApps.map((el) => (
                        <Box
                          p={5}
                          key={el._id}
                          _hover={{ border: "1px solid #0037ff" }}
                          // border={"1px solid teal"}
                          height={{ base: "47vh", md: "53vh", lg: "55vh" }}
                          onClick={() => goSingleProductPage(el._id)}
                          cursor={"pointer"}
                          boxShadow="md"
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
                )}

              {popular == false &&
                newapps == false &&
                freeapps === false &&
                workflowapps === false &&
                customizapps === false &&
                abmapps === false &&
                automationapps === false &&
                paidapps === false && (
                  <Box textAlign={"left"} marginTop={10}>
                    <Flex
                      paddingRight={2}
                      justifyContent={"space-between"}
                      // border={"1px solid blue"}
                      alignItems={"center"}
                    >
                      <Text fontSize={["2xl", "3xl"]} fontWeight={"medium"}>
                        Built by Hubspot
                      </Text>
                      <Link>Explore all Free apps</Link>
                    </Flex>
                    <Text>Explore apps built and supported by HubSpot</Text>
                    <br />
                    <SimpleGrid
                      spacing="10px"
                      columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                      px={[6, 10, 1]}
                      // border={"1px solid purple"}
                    >
                      {builtApps.map((el) => (
                        <Box
                          p={5}
                          key={el._id}
                          height={{ base: "47vh", md: "53vh", lg: "55vh" }}
                          onClick={() => goSingleProductPage(el._id)}
                          cursor={"pointer"}
                          boxShadow="md"
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
                )}

              {popular == false &&
                newapps == false &&
                freeapps === false &&
                builtapps === false &&
                customizapps === false &&
                abmapps === false &&
                automationapps === false &&
                paidapps === false && (
                  <Box textAlign={"left"} marginTop={10}>
                    <Flex
                      paddingRight={2}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Text fontSize={["2xl", "3xl"]} fontWeight={"medium"}>
                        Workflow integrations
                      </Text>
                      <Link>Explore all Free apps</Link>
                    </Flex>
                    <Text>
                      Explore apps you can leverage within HubSpot workflows.
                    </Text>
                    <br />
                    <SimpleGrid
                      spacing="10px"
                      columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                      px={[6, 10, 1]}
                    >
                      {workFlowApps.map((el) => (
                        <Box
                          p={5}
                          _hover={{ border: "1px solid #0037ff" }}
                          key={el._id}
                          height={{ base: "47vh", md: "53vh", lg: "55vh" }}
                          onClick={() => goSingleProductPage(el._id)}
                          cursor={"pointer"}
                          boxShadow="md"
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
                )}

              {popular == false &&
                newapps == false &&
                freeapps === false &&
                builtapps === false &&
                workflowapps === false &&
                abmapps === false &&
                automationapps === false &&
                paidapps === false && (
                  <Box textAlign={"left"} marginTop={10}>
                    <Flex
                      paddingRight={2}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Text fontSize={["2xl", "3xl"]} fontWeight={"medium"}>
                        Customizable CRM
                      </Text>
                      <Link>Explore all Free apps</Link>
                    </Flex>
                    <Text>
                      Explore apps that can help you customize your HubSpot CRM
                      Platform
                    </Text>
                    <br />
                    <SimpleGrid
                      spacing="10px"
                      columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                      px={[6, 10, 1]}
                    >
                      {customizableApps.map((el) => (
                        <Box
                          p={5}
                          _hover={{ border: "1px solid #0037ff" }}
                          key={el._id}
                          height={{ base: "47vh", md: "53vh", lg: "55vh" }}
                          onClick={() => goSingleProductPage(el._id)}
                          cursor={"pointer"}
                          boxShadow="md"
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
                )}

              {popular == false &&
                newapps == false &&
                freeapps === false &&
                builtapps === false &&
                workflowapps === false &&
                customizapps === false &&
                automationapps === false &&
                paidapps === false && (
                  <Box textAlign={"left"} marginTop={10}>
                    <Flex
                      paddingRight={2}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Text fontSize={["2xl", "3xl"]} fontWeight={"medium"}>
                        Apps for ABM
                      </Text>
                      <Link>Explore all Free apps</Link>
                    </Flex>
                    <Text>
                      Explore these ABM apps to better align your sales and
                      marketing teams and strategies.
                    </Text>
                    <br />
                    <SimpleGrid
                      spacing="10px"
                      columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                      px={[6, 10, 1]}
                    >
                      {abmApps.map((el) => (
                        <Box
                          p={5}
                          _hover={{ border: "1px solid #0037ff" }}
                          key={el._id}
                          height={{ base: "47vh", md: "53vh", lg: "55vh" }}
                          onClick={() => goSingleProductPage(el._id)}
                          cursor={"pointer"}
                          boxShadow="md"
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
                )}

              {popular == false &&
                newapps == false &&
                freeapps === false &&
                builtapps === false &&
                workflowapps === false &&
                customizapps === false &&
                abmapps === false &&
                paidapps === false && (
                  <Box textAlign={"left"} marginTop={10}>
                    <Flex
                      paddingRight={2}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Text fontSize={["2xl", "3xl"]} fontWeight={"medium"}>
                        Automation Apps
                      </Text>
                      <Link>Explore all Free apps</Link>
                    </Flex>
                    <Text>
                      Connect HubSpot to these apps to automate marketing
                      processes.
                    </Text>
                    <br />
                    <SimpleGrid
                      spacing="10px"
                      columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                      px={[6, 10, 1]}
                    >
                      {automationApps.map((el) => (
                        <Box
                          p={5}
                          _hover={{ border: "1px solid #0037ff" }}
                          key={el._id}
                          height={{ base: "47vh", md: "53vh", lg: "55vh" }}
                          onClick={() => goSingleProductPage(el._id)}
                          cursor={"pointer"}
                          boxShadow="md"
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
                )}

              {popular == false &&
                freeapps === false &&
                newapps == false &&
                builtapps === false &&
                workflowapps === false &&
                customizapps === false &&
                abmapps === false &&
                automationapps === false && (
                  <Box
                    textAlign={"left"}
                    display={paidapps === false ? "none" : "block"}
                    marginTop={10}
                  >
                    <Flex
                      paddingRight={2}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Text fontSize={["2xl", "3xl"]} fontWeight={"medium"}>
                        Top Paid Apps
                      </Text>
                      <Link>Explore all Paid apps</Link>
                    </Flex>
                    <Text>Explore Paid apps in the HubSpot Marketplace</Text>
                    <br />
                    <SimpleGrid
                      spacing="10px"
                      columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
                      px={[6, 10, 1]}
                    >
                      {paidApps.map((el) => (
                        <Box
                          p={5}
                          _hover={{ border: "1px solid #0037ff" }}
                          key={el._id}
                          height={{ base: "47vh", md: "53vh", lg: "55vh" }}
                          onClick={() => goSingleProductPage(el._id)}
                          cursor={"pointer"}
                          boxShadow="md"
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
                )}
            </Box>
          )}
          {/*  */}
        </Box>
      </Flex>
    </Container>
    </>
  );
};

export default Marketplace;
