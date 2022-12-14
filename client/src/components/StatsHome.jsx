import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { FaRegHandshake } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import styles from "../Styles/StatsHome.module.css";

const StatsHome = () => {
    return (
        <Box className={styles.statsmainbox}>
                <Heading className={styles.mainheading}>Learn and grow with award-winning support and a thriving community behind you.</Heading>
                <Text className={styles.maindesc}>You don't have to go it alone. Master the inbound methodology and get the most out of your tools with HubSpot's legendary customer support team and a community of thousands of marketing and sales pros just like you.</Text>
                <Grid className={styles.grid}>
                    <GridItem className={styles.griditem}>
                        <FaRegHandshake className={styles.icons}/>
                         <Flex className={styles.flex}><Heading className={styles.heading}>150 </Heading><Text className={styles.plussign}>+</Text></Flex>
                        <Text className={styles.textbottom}>HubSpot user groups</Text>
                    </GridItem>
                    <GridItem className={styles.griditem}>
                       <Text className={styles.textbottom}>HubPoint <br />BLOGS</Text>
                        <Flex className={styles.flex}><Heading className={styles.heading}>7M</Heading><Text className={styles.plussign}>+</Text></Flex>
                        <Text className={styles.textbottom}>Monthly visits</Text>
                    </GridItem>
                    <GridItem className={styles.griditem}>
                          <Text className={styles.textbottom}>HubPoint <br />Academy</Text>
                        <Flex className={styles.flex}><Heading className={styles.heading}>463 </Heading><Text className={styles.plussign}>+</Text></Flex>
                        <Text className={styles.textbottom}>certified professionals</Text>
                    </GridItem>
                    <GridItem className={styles.griditem}>
                          <Text className={styles.textbottom}>INBOUND</Text>
                        <Heading className={styles.heading70}>70K</Heading>
                        <Text className={styles.textbottom}>registered attendees</Text>
                    </GridItem>
                    <GridItem className={styles.griditem1}>
                          <Text className={styles.textbottom}>HubPoint <br />App Marketplace</Text>
                        <Flex className={styles.flex}><Heading className={styles.heading}>1250</Heading><Text className={styles.plussign}>+</Text></Flex>
                        <Text className={styles.textbottom}>integrations</Text>
                    </GridItem>
                    <GridItem className={styles.griditem1}>
                          <BiWorld className={styles.icons}/>
                        <Heading className={styles.heading70}>6</Heading>
                        <Text className={styles.textbottom}>languages</Text>
                    </GridItem>
                    <GridItem className={styles.griditem1}>
                         <AiOutlineMessage className={styles.icons}/>
                         <Flex className={styles.flex}><Heading className={styles.heading}>3.1M </Heading><Text className={styles.plussign}>+</Text></Flex>
                        <Text className={styles.textbottom}>social followers</Text>
                    </GridItem>
                    <GridItem className={styles.griditem1}>
                          <FiUsers className={styles.icons}/>
                         <Flex className={styles.flex}><Heading className={styles.heading}>158,000</Heading><Text className={styles.plussign}>+</Text></Flex>
                        <Text className={styles.textbottom}>customers</Text>
                    </GridItem>
                </Grid>
        </Box>
    );
}

export default StatsHome;
