import React ,{useRef, useState}from 'react';
import {Box, Button, Flex, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, Switch, Text, Textarea} from "@chakra-ui/react";
import styles from "../Styles/Navbar.module.css";
import {BiWorld} from "react-icons/bi";
import {RiUser3Fill} from "react-icons/ri";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import {FiChevronDown} from "react-icons/fi";
import {AiFillStar} from "react-icons/ai";
import {BsHeartFill} from "react-icons/bs";
import {SiDatabricks} from "react-icons/si";
import {RiSettings2Fill} from "react-icons/ri";
import {MdCastForEducation} from "react-icons/md";
import {BiMessage} from "react-icons/bi";
import {FcServices} from "react-icons/fc";
import {ImUsers} from "react-icons/im";
import {FaBars} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";
import hub from "./assets/Hub point.png";
import {FaHubspot} from "react-icons/fa";

const Navbar = () => {

      const [click , setClick ] = useState(false)
    const [color , setColor] = useState(false)
    const handleClick = () =>setClick(!click)
    
    const changeColor = () =>{
        if(window.scrollY >= 50){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener("scroll" , changeColor)

    return (
        <Box className={styles.mainBox}>
            <Flex className={styles.topHeader}>
                <Flex className={styles.leftSide}>
                    <Flex alignItems={'center'} className={styles.leftSideFlex}>
                    <BiWorld fontSize={'20px'} marginRight='20px' />
                    <Popover>
                            <PopoverTrigger>
                               <Text cursor={'pointer'}>English</Text>
                            </PopoverTrigger>
                            <PopoverContent width='120px'>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverBody className={styles.languages}>日本語</PopoverBody>
                                <PopoverBody className={styles.languages}>Deutsch</PopoverBody>
                                <PopoverBody className={styles.languages}>English</PopoverBody>
                                <PopoverBody className={styles.languages}>Español</PopoverBody>
                                <PopoverBody className={styles.languages}>Português</PopoverBody>
                                <PopoverBody className={styles.languages}>Français</PopoverBody>
                            </PopoverContent>
                    </Popover>
                </Flex>
                <Flex  alignItems={'center'}><Stack direction='row-reverse'><Switch marginRight={'10px'}/></Stack><Text>High Contrast</Text></Flex>
                <Flex alignItems={'center'}><RiUser3Fill fontSize={'20px'} marginRight='10px'/><Text> Contact Sales</Text></Flex>
            </Flex>

    
            <Flex className={styles.rightSide}>
                <Flex alignItems={'center'} justifyContent='space-evenly'><AiOutlineSearch fontSize={'20px'}/><Text>Login</Text></Flex>
                <Flex alignItems={'center'}><Text>Customer Support</Text></Flex>
                <Flex>
                    <Popover>
                            <PopoverTrigger>
                                <Text cursor={'pointer'}>About</Text>
                            </PopoverTrigger>
                            <PopoverContent width='150px'>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverBody className={styles.aboutSection}>About Us</PopoverBody>
                                <PopoverBody className={styles.aboutSection}>Careers</PopoverBody>
                                <PopoverBody className={styles.aboutSection}>Contact Us</PopoverBody>
                                <PopoverBody className={styles.aboutSection}>Investor Relations</PopoverBody>
                                <PopoverBody className={styles.aboutSection}>Management Team</PopoverBody>
                            </PopoverContent>
                         </Popover>
                    </Flex>
                </Flex>
            </Flex>

        <Flex className={styles.bottomnavbar} alignItem='center'>
            <Flex alignItems={'center'} className={styles.bottomNavbarleft}>
                    <Box className={styles.logoBox}>
                        <Image className={styles.logo}  src={hub}></Image>
                    </Box>
                    <Box className={styles.softwareMenuBox}>
                            <Menu className={styles.softwareMenu}>
                                <MenuButton as={Text}>
                                   <Flex alignItems={'center'}> Software<FiChevronDown/></Flex>
                                </MenuButton>
                                <MenuList>
                                    <Heading as='h2' size='md'>The HubSpot CRM Platform</Heading>

                                    <Text>All of HubSpot’s marketing, sales CRM, customer service, CMS, and operations software on one platform.</Text>

                                    <Button colorScheme={'white'} color='blue' className={styles.softwareMenuButton}>Free HubPoint CRM <AiOutlineArrowRight/></Button>
                                    <Button colorScheme={'white'} color='blue'  className={styles.softwareMenuButton}>Overview of all products <AiOutlineArrowRight/></Button>

                                <Flex className={styles.menuSoftwareTopThreeFlex}>
                                    <Box>
                                        <Flex alignItems={'center'}><FaHubspot className={styles.softwareMenuIcons}/><Heading as='h2' size='md'>Marketing Hub</Heading></Flex>
                                        <Text>Marketing automation software. Free and premium plans</Text>    
                                    </Box>

                                    <Box>
                                         <Flex alignItems={'center'}><AiFillStar className={styles.softwareMenuIcons}/><Heading as='h2' size='md'>Sales Hub</Heading></Flex>
                                        <Text>Sales CRM software. Free and premium plans</Text>    
                                    </Box>

                                    <Box>
                                         <Flex alignItems={'center'}><BsHeartFill className={styles.softwareMenuIcons}/><Heading as='h2' size='md'>Service Hub</Heading></Flex>
                                        <Text>Customer service software. Free and premium plans</Text>    
                                    </Box>

                                </Flex>
                                <Flex className={styles.menuSoftwareBottomTwoFlex}>
                                    <Box>
                                         <Flex alignItems={'center'}><SiDatabricks className={styles.softwareMenuIcons}/><Heading as='h2' size='md'>CMS Hub</Heading></Flex>
                                        <Text>Content management software. Free and premium plans</Text>
                                    </Box>
                                    <Box>
                                         <Flex alignItems={'center'}><RiSettings2Fill className={styles.softwareMenuIcons}/><Heading as='h2' size='md'>Operations Hub</Heading></Flex>
                                        <Text>Operations software. Free and premium plans</Text>
                                    </Box>
                                </Flex>
                                <Button className={styles.appmarketPlaceButton}>App Marketplace</Button>
                                </MenuList>
                            </Menu>
                    </Box>
                    <Box className={styles.pricingBox}>
                        <Text className={styles.pricingText}>Pricing</Text>
                    </Box>
                    <Box className={styles.resourcesBox}>
                            <Menu>
                                    <MenuButton as={Text} >
                                        <Flex alignItems={'center'}>Resources<FiChevronDown/></Flex>
                                    </MenuButton>
                                   
                                    <MenuList>
                                        <Flex>
                                            <Box className={styles.resoursesLeftSide}>
                                                <Flex className={styles.education} alignItems={'center'} gap='10px'><Button><MdCastForEducation fontSize={'20px'}/></Button><Heading as='h2' size={'md'}>Education</Heading></Flex>
                                                <MenuItem>Blog</MenuItem>
                                                <MenuItem>Ebooks, Guides & More</MenuItem>
                                                <MenuItem>Free Courses & Certifications</MenuItem>
                                                <MenuItem>Free Courses & Certifications</MenuItem>

                                                <Flex className={styles.whyhub}  alignItems={'center'} gap='10px'><Button><BiMessage fontSize={'20px'}/></Button><Heading as='h2' size={'md'}>Why HubPoint?</Heading></Flex>
                                                <MenuItem>Case Studies</MenuItem>
                                                <MenuItem>Why Choose HubSpot?</MenuItem>
                                            </Box>

                                            <Box className={styles.resoursesRightSide}>
                                                <Flex className={styles.services}  alignItems={'center'} gap='10px'><Button><FcServices fontSize={'20px'}/></Button><Heading as='h2' size={'md'}>Services</Heading></Flex>
                                                <MenuItem>Onboarding & Consulting Services</MenuItem>
                                                <MenuItem>Hire a Service Provider</MenuItem>

                                                <Flex className={styles.user}  alignItems={'center'} gap='10px'><Button><ImUsers fontSize={'20px'}/></Button><Heading as='h2' size={'md'}>User Resources</Heading></Flex>
                                                <MenuItem>Partner Programs</MenuItem>
                                                <MenuItem>Developer Tools</MenuItem>
                                                <MenuItem>Community</MenuItem>
                                                <MenuItem>HubSpot Ecosystem</MenuItem>
                                            </Box>
                                        </Flex>
                                    </MenuList>  
                            </Menu>
                    </Box>
                </Flex>
                <Box className={styles.demobuttonBox}>
                        <Button borderRadius='0px'  colorScheme='#ff5c35' className={styles.demobutton}>Start free or get a demo</Button>
                </Box>
            </Flex>
            <Box className={styles.hamberger} onClick={handleClick}>
                  {!click ? (
                     <FaBars  size={25} style ={{color:'white'}} />
                ):(

                   <FaTimes  size={25} style ={{color:'white'}}  />
                )
            }
            </Box>
        </Box>
    );
}

export default Navbar;

/*


User Resources
Partner Programs

Developer Tools

Community

HubSpot Ecosystem
*/