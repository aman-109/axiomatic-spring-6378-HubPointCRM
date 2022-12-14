import { Box, Button, Divider, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';
import { FaHubspot } from 'react-icons/fa';
// import { HiCheck } from 'react-icons/fc';
import { RiSettings2Fill } from 'react-icons/ri';
import { SiDatabricks } from 'react-icons/si';
import styles from "../Styles/HeaderCards.module.css";
import {HiCheck} from "react-icons/hi";

const HeaderCards = () => {
    return (
        <Grid  className={styles.gridmain}>

                <GridItem className={styles.griditem}>
                    <Flex gap='20px' alignItems={'center'}><FaHubspot className={styles.icons}/><Heading as='h3'size={'md'} className={styles.heading}>Marketing Hub</Heading></Flex>
                    <Text className={styles.text}>Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.</Text>
                    <Divider className={styles.divider}></Divider>
                    <Text className={styles.textpopular}>Popular Features</Text>
                    <Flex className={styles.tickflex}><Box className={styles.tickbox}><HiCheck className={styles.ticks}/></Box>Lead generation</Flex>
                    <Flex className={styles.tickflex}><Box className={styles.tickbox}><HiCheck className={styles.ticks}/></Box>Marketing automation</Flex>
                    <Flex className={styles.tickflex}><Box className={styles.tickbox}><HiCheck className={styles.ticks}/></Box> Analytics</Flex>
                    <Button className={styles.button} borderRadius={'0px'}  bgColor={'#ff5c35'} color='white'>Get started</Button>
                </GridItem>

                <GridItem className={styles.griditem}>
                    <Flex gap='20px'  alignItems={'center'}><AiFillStar className={styles.icons}/><Heading className={styles.heading} as='h3'size={'md'}>Sales Hub</Heading></Flex>
                     <Text className={styles.text}>Sales CRM software to help you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.</Text>
                       <Divider className={styles.divider}></Divider>
                    <Text className={styles.textpopular}>Popular Features</Text>
                    <Flex className={styles.tickflex}><Box className={styles.tickbox}><HiCheck className={styles.ticks}/></Box>Advanced CRM</Flex>
                    <Flex className={styles.tickflex}><Box className={styles.tickbox}><HiCheck className={styles.ticks}/></Box>Meeting scheduling</Flex>
                    <Flex className={styles.tickflex}><Box className={styles.tickbox}><HiCheck className={styles.ticks}/></Box> Payments</Flex>
                     <Button  className={styles.button}  borderRadius={'0px'}  bgColor={'#ff5c35'} color='white'>Get started</Button>
                </GridItem>

                <GridItem className={styles.griditem}>
                    <Flex gap='20px'  alignItems={'center'}><BsHeartFill className={styles.icons}/><Heading className={styles.heading} as='h3'size={'md'}>Service Hub</Heading></Flex>
                     <Text className={styles.text}>Customer service software to help you connect with customers, exceed expectations, and turn them into promoters who grow your business.</Text>
                      <Divider className={styles.divider}></Divider>
                    <Text className={styles.textpopular}>Popular Features</Text>
                    <Flex className={styles.tickflex}><Box className={styles.tickbox}><HiCheck className={styles.ticks}/></Box> Tickets</Flex>
                    <Flex className={styles.tickflex}><Box className={styles.tickbox}><HiCheck className={styles.ticks}/></Box>Customer feedback</Flex>
                    <Flex className={styles.tickflex}><Box className={styles.tickbox}><HiCheck className={styles.ticks}/></Box> Knowledge base</Flex>
                     <Button className={styles.button}  borderRadius={'0px'}  bgColor={'#ff5c35'} color='white'>Get started</Button>
                </GridItem>

                <GridItem className={styles.griditem}>
                    <Flex gap='20px'  alignItems={'center'}><SiDatabricks className={styles.icons}/><Heading className={styles.heading} as='h3'size={'md'}>CMS Hub</Heading></Flex>
                     <Text className={styles.text}>Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.</Text>
                      <Divider className={styles.divider}></Divider>
                    <Text className={styles.textpopular}>Popular Features</Text>
                    <Flex className={styles.tickflex}><Box className={styles.tickbox}><HiCheck className={styles.ticks}/></Box> Drag-and-drop editor</Flex>
                    <Flex className={styles.tickflex}><Box className={styles.tickbox}><HiCheck className={styles.ticks}/></Box> SEO recommendations</Flex>
                    <Flex className={styles.tickflex}><Box className={styles.tickbox}><HiCheck className={styles.ticks}/></Box> Website themes</Flex>
                     <Button className={styles.button}  borderRadius={'0px'}  bgColor={'#ff5c35'} color='white'>Get started</Button>
                </GridItem>

                <GridItem className={styles.griditem}>
                    <Flex gap='20px'  alignItems={'center'}><RiSettings2Fill className={styles.icons}/><Heading className={styles.heading} as='h3'size={'md'}>Operations Hub</Heading></Flex>
                     <Text className={styles.text}>Operations software that syncs your apps, cleans and curates customer data, and automates processes — so all your systems and teams work better together.</Text>
                      <Divider className={styles.divider}></Divider>
                    <Text className={styles.textpopular}>Popular Features</Text>
                    <Flex className={styles.tickflex}><Box className={styles.tickbox}><HiCheck className={styles.ticks}/></Box>  Data sync</Flex>
                    <Flex className={styles.tickflex}><Box className={styles.tickbox}><HiCheck className={styles.ticks}/></Box>  Programmable automation</Flex>
                    <Flex className={styles.tickflex}><Box className={styles.tickbox}><HiCheck className={styles.ticks}/></Box> Data quality automation</Flex>
                     <Button className={styles.button}  borderRadius={'0px'}  bgColor={'#ff5c35'} color='white'>Get started</Button>
                </GridItem>
        </Grid>
    );
}

export default HeaderCards;
