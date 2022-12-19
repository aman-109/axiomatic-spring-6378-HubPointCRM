import { Box,
    Heading,
    Avatar,
    Center,
    Text,
    Stack,
    Button,
    Link,
  
    useColorModeValue,
    Modal,
 
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
    useDisclosure,
    Image, } from '@chakra-ui/react'
import React from 'react'

const UserCard = ({name,email,company_name,company_website,purchased_product}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Box py={4}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&usqp=CAU'
          }
          alt={'Avatar Alt'}
          mb={4}
         
          
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {name}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          {email}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
         Company :
          <Link href={'#'} color={'blue.400'}>
            {company_name}
          </Link>
         
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
         Website :
          <Link href={'#'} color={'blue.400'}>
            {company_website}
          </Link>
         
        </Text>


        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            onClick={onOpen}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Services Installed
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
       
        <ModalContent>
          <ModalHeader>services</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Center >
           {
            purchased_product.length>0 ? (purchased_product?.map((ele)=>(
                <Box p={2} >
                <Image src={ele.product_id.image} width="60px"/>
                <Text>{ele.product_id.name}</Text>
                <Text>{ele.product_id.rating} ⭐</Text>
                </Box>
            ))) : (<Text>No service Installed</Text>)
            }
        </Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Stack>
      </Box>
    </Box>
    </>
  )
}

export default UserCard