import { Box, Heading, Text, Stack, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://hubpointserver.onrender.com/products", {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }).then((res) => setData(res.data));
  }, []);
  return (
    <Box>
      <AdminNavbar />
      <Box
        p={4}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          margin: "auto",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data?.map((ele) => (
          <Box
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
                src={ele.image}
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"xl"}
                textTransform={"uppercase"}
              >
                {ele.name}
              </Text>
              <Heading fontSize={"lg"} fontFamily={"body"} fontWeight={500}>
                {ele.installs}
              </Heading>
              <Stack align={"center"}>
                <Text fontWeight={800} fontSize={"md"}>
                  {ele.type}
                </Text>
                <Text color={"gray.600"}>{ele.rating} ⭐</Text>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
