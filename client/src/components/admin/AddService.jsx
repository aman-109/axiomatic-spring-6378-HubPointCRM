import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import AdminNavbar from "./AdminNavbar";

const AddService = () => {
  const [temp, setTemp]=useState({})
  const [state, setState] = useState({
    type: "",
    name: "",
    image: "",
    info: "",
    desc: "",
    installs: "",
    rating: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

console.log(state)
  const handleSubmit = async(e) =>{
    e.preventDefault()
    let data= await axios.post('https://hubpointserver.onrender.com/admin/create-service',state,{
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
    }})
    if(data.status != 200 && data.data.status=== false){
            alert(data.data.message)
    }
    else{
 
        setTemp(data.data.new)
    }
}

  return (
    <Box>
      <AdminNavbar />
      <Flex
      mt={"70px"}
        minH={"100vh"}
        align={"center"}
        justify={"space-around"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Create Install Services
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="Name" isRequired>
                      <FormLabel>Name</FormLabel>
                      <Input
                        type="text"
                        autoComplete='off'
                        onChange={handleChange}
                        name="name"
                        value={state.name}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="type">
                      <FormLabel>Type</FormLabel>
                      <Input
                        type="text"
                        autoComplete='off'
                        onChange={handleChange}
                        name="type"
                        value={state.type}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="image" isRequired>
                  <FormLabel>Service Logo Url</FormLabel>
                  <Input
                    type="text"
                    autoComplete='off'
                    onChange={handleChange}
                    name="image"
                    value={state.image}
                  />
                </FormControl>
                <FormControl id="info" isRequired>
                  <FormLabel>Information</FormLabel>

                  <Input
                    type="text"
                    autoComplete='off'
                    onChange={handleChange}
                    name="info"
                    value={state.info}
                  />
                </FormControl>
                <FormControl id="desc" isRequired>
                  <FormLabel>Description</FormLabel>

                  <Input
                    type="text"
                    autoComplete='off'
                    onChange={handleChange}
                    name="desc"
                    value={state.desc}
                  />
                </FormControl>
                <FormControl id="install" isRequired>
                  <FormLabel>Downloads</FormLabel>

                  <Input
                    type="text"
                    autoComplete='off'
                    onChange={handleChange}
                    name="installs"
                    value={state.installs}
                  />
                </FormControl>
                <FormControl id="rating" isRequired>
                  <FormLabel>Rating ⭐</FormLabel>

                  <Input
                    type="text"
                    autoComplete='off'
                    onChange={handleChange}
                    name="rating"
                    value={state.rating}
                  />
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    type="submit"
                  >
                    Add Service
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>

        {/* new added service */}

       {<Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            boxShadow={"2xl"}
            rounded={"lg"}
            zIndex={1}
          >
            <Box rounded={"lg"}>
              <Image
                rounded={"lg"}
                width={"100%"}
                objectFit={"cover"}
                src={temp.image}
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"xl"}
                textTransform={"uppercase"}
              >
                {temp.name}
              </Text>
              <Heading fontSize={"lg"} fontFamily={"body"} fontWeight={500}>
                {temp.installs}
              </Heading>
              <Stack align={"center"}>
                <Text fontWeight={800} fontSize={"md"}>
                  {temp.type}
                </Text>
                <Text color={"gray.600"}>{temp.rating} </Text>
              </Stack>
            </Stack>
          </Box>}
      </Flex>
    </Box>
  );
};

export default AddService;
