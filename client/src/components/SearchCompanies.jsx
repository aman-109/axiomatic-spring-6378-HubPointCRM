import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchCompanies = ({id,image, name, info, desc, installs}) => {
    const navigate = useNavigate();
    const goSingleProductPage=(id)=>{
        return navigate(`/products/${id}`);
    }
  return (
    <Box
      p={5}
    
      // border={"1px solid teal"}
      _hover={{ border: "1px solid #0037ff" }}
      height={{ base: "47vh", md: "40vh", lg: "52vh" }}
      onClick={() => goSingleProductPage(id)}
      cursor={"pointer"}
      boxShadow="md"
    >
      <Image boxSize={"50px"} src={image}></Image>
      <br />
      <Text fontSize={"xl"}>{name}</Text>
      <Text fontSize={"sm"}>{info}</Text>

      <Text fontSize={"17px"} marginTop={"5px"}>
        {desc}
      </Text>
      <br />
      <Text>{installs}</Text>
    </Box>
  );
};

export default SearchCompanies;
