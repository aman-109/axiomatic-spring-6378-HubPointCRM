import { Center, Heading, useToast } from '@chakra-ui/react';
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


export default function VerifyEmailForm(){
  
    const [text,setText]=useState("")
    const toast=useToast()
    const navigate=useNavigate()
    const email=JSON.parse(localStorage.getItem("user"))

    const verifyOtp=async(e)=>{
        e.preventDefault()
      try{
        await axios.post("https://hubpointserver.onrender.com/user/verify-otp",{email:email,otp:text})
       
        toaster()
          setTimeout(()=>{
            navigate("/marketplace")
          },3000)
      }catch(e){
        console.log(e)
      }
    }


    const toaster=()=>{
      return toast({
        title: 'Otp Verified Successfully.',
        description: "Redirecting to Dashboard.",
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
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Verify your Email
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          We have sent code to your email
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'gray.400')}>
          {email}
        </Center>
        <form onSubmit={verifyOtp}>
        <FormControl>
          <Center>
            <HStack>
              <PinInput onChange={(e)=>setText(e)} type="alphanumeric">
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            type="submit"
            _hover={{
              bg: 'blue.500',
            }}>
            Verify
          </Button>
        </Stack>
        </form>
      </Stack>
    </Flex>
  );
}