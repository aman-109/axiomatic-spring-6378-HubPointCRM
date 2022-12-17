
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {SlMagnifier} from "react-icons/sl"
import {AiOutlineShop} from "react-icons/ai"
import {FiSettings} from "react-icons/fi"
import {IoNotificationsSharp} from "react-icons/io5"

const Links = ['Contacts', 'Conversations', 'Marketing','Sales','Service','Automation','Reports'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function NavbarTwo() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('#1a202c', '#1a202c')} px={4} color="white">
        <Flex h={14} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            {/* <Box display={{base:"none",md:"block"}}>
                <Image width="100px" src="https://user-images.githubusercontent.com/101388858/208071519-6c0ed1b3-e686-46c8-9048-aa1eec2deb0e.png"/>
            </Box> */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'} display={{md:"none",lg:"block"}} width={{base:"76%",lg:"20%"}}  >
            <Button
              bg={"none"}
              size={'md'}
              mr={4}
              // width={{base:"100px",md:"200px",lg:"50px"}}
              >

              <SlMagnifier/>
            </Button>
            <Button
              bg={"none"}
              size={'md'}
              mr={4}
              >
              <AiOutlineShop/>
            </Button>
            <Button
              bg={"none"}
              size={'md'}
              mr={4}
              >
              <FiSettings/>
            </Button>
            
            <Button
              bg={"none"}
              size={'md'}
              mr={4}
              >
              <IoNotificationsSharp/>
            </Button>
            
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}