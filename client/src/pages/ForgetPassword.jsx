import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SimpleCard() {
  const [loginCreds , setLoginCreds] = useState({
    email:'',
    password:'',
})
  const toast=useToast()
  const navigate=useNavigate()


  const handleChange = (e) =>{
    const {name,value} = e.target;
    setLoginCreds({
        ...loginCreds,
        [name]:value
    })
}

  

  const handleSubmit = async(e) =>{
    e.preventDefault()
    let data= await axios .post('https://hubpointserver.onrender.com/user/reset-password',loginCreds,{
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
    }})
    if(data.data==='user not found !' || data.data=== 'Please Enter New Password'){
            alert(data.data)
    }
    else{
      toaster()
      setTimeout(()=>{
        navigate("/login")
      },3000)
    }
}

  const toaster=()=>{
    return toast({
      title: 'Password Change Successfully.',
      description: "Redirecting to Login.",
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
   }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Reset your password</Heading>
         
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
            <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input name="email" type="email" value={loginCreds.email} onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>New Password</FormLabel>
              <Input name="password" type="password" value={loginCreds.password} onChange={handleChange} />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                type="submit"
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Submit
              </Button>
            </Stack>
          </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}