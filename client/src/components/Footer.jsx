import styles from "../Styles/Footer.module.css";
import {Box,UnorderedList,ListItem,Flex,Heading,Divider, Image, Text } from "@chakra-ui/react";
import React from 'react';
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { BsInstagram, BsMedium } from "react-icons/bs";
import { ImLinkedin2, ImYoutube, ImYoutube2 } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io";
import hub from "./assets/Hub point.png";
const Footer = () => {
    return (
        <Box className={styles.footer}>
            <Flex className={styles.footeflexmain}>
                <Flex className={styles.leftFlex}>
                            <UnorderedList className={styles.ul1}>
                                <Heading as='h5' size='sm' className={styles.popularheading}>Popular Features</Heading>   
                                <ListItem>All Products and Features</ListItem>
                                <ListItem>Free Meeting Scheduler App</ListItem>
                                <ListItem>Social Media Tools</ListItem>
                                <ListItem>Email Tracking Software</ListItem>
                                <ListItem>Sales Email Automation</ListItem>
                                <ListItem>Ads Software</ListItem>
                                <ListItem>Email Marketing Software</ListItem>
                                <ListItem>Lead Management Software</ListItem>
                                <ListItem>Pipeline Management Tools</ListItem>
                            </UnorderedList>

                             <UnorderedList className={styles.ul2}>
                                <ListItem marginTop='20px'>Free Website Builder</ListItem>
                                <ListItem>Sales Email Templates</ListItem>
                                <ListItem>Help Desk Software</ListItem>
                                <ListItem>Free Online Form Builder</ListItem>
                                <ListItem>Free Chatbot Builder</ListItem>
                                <ListItem>Free Live Chat Software</ListItem>
                                <ListItem>Marketing Analytics</ListItem>
                                <ListItem>Free Landing Page Builder</ListItem>
                                <ListItem>Free Web Hosting</ListItem>
                            </UnorderedList>
                            <Divider className={styles.divider}orientation='vertical'></Divider>
                </Flex>
                <Flex className={styles.rightFlex}>
                        <UnorderedList className={styles.ul2}>
                             <Heading as='h5' size='sm' className={styles.popularheading}>Popular Features</Heading>      
                            <ListItem>Website Grader</ListItem>
                            <ListItem>Make My Persona</ListItem>
                            <ListItem>Email Signature Generator</ListItem>
                            <ListItem>Blog Ideas Generator</ListItem>
                            <ListItem>Invoice Template Generator</ListItem>
                            <ListItem>Marketing Plan Generator</ListItem>
                            <ListItem>Free Business Templates</ListItem>
                            <ListItem>Industry Benchmark Data</ListItem>
                            <ListItem>Software Comparisons Library</ListItem>
                        </UnorderedList>
                        <UnorderedList className={styles.ul2}>
                            <Heading as='h5' size='sm' className={styles.popularheading}>Company</Heading>
                                <ListItem>About Us</ListItem>
                                <ListItem>Careers</ListItem>
                                <ListItem>Management Team</ListItem>
                                <ListItem>Board of Directors</ListItem>
                                <ListItem>Investor Relations</ListItem>
                                <ListItem>Blog</ListItem>
                                <ListItem>Contact Us</ListItem>
                        </UnorderedList>
                        <UnorderedList className={styles.ul2}>
                            <Heading as='h5' size='sm' className={styles.popularheading}>Customers</Heading>
                            <ListItem>Customer Support</ListItem>
                            <ListItem>Join a Local User Group</ListItem>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Heading as='h5' size='sm' className={styles.popularheading}>Partners</Heading>
                        <ListItem>All Partner Programs</ListItem>
                        <ListItem>Solutions Partner Program</ListItem>
                        <ListItem>App Partner Program</ListItem>
                        <ListItem>HubSpot for Startups</ListItem>
                        <ListItem>Affiliate Program</ListItem>
                    </UnorderedList>
                </Flex>
            </Flex>

            <Box className={styles.footersocialbox}>
                   <Flex className={styles.footersocialflex}>
                        <Divider className={styles.bottomdivider1} orientation="horizontal"></Divider>
                        <Flex className={styles.socialiconsflex}>
                        <FaFacebookF className={styles.socialicons}/>
                        <BsInstagram className={styles.socialicons} />
                        <ImYoutube className={styles.socialicons}/>
                        <IoLogoTwitter className={styles.socialicons}/>
                        <ImLinkedin2 className={styles.socialicons}/>
                        <BsMedium className={styles.socialicons}/>
                        <FaTiktok className={styles.socialicons}/>
                        </Flex>
                        <Divider className={styles.bottomdivider2} orientation="horizontal"></Divider>
                   </Flex>
            </Box>

            <Box className={styles.legalbox}>
                    <Heading className={styles.legalheading} as='h3' size='md'>Hub P⭕int</Heading>
                    <Text className={styles.copytext}>Copyright © 2022 HubPoint, Inc.</Text>
                    <Flex className={styles.legalflex}>
                        <Text className={styles.legaltext}>Legal stuff</Text>
                        <Text className={styles.legaltext}>Privacy Policy</Text>
                        <Text className={styles.legaltext}>Security</Text>
                    </Flex>
            </Box>
        </Box>
    );
}
/*
Partners
All Partner Programs
Solutions Partner Program
App Partner Program
HubSpot for Startups
Affiliate Program
Facebook
Instagram
Youtube
Twitter
Linkedin
Medium

*/
export default Footer;
