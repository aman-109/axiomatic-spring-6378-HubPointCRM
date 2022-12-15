import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import styles from "../Styles/GrowthHome.module.css";
import homehuman from "./assets/homehuman.webp";

const GrowthHome = () => {
    return (
        <Box className={styles.maingrowthbox}>
                <Flex alignItems={'center'} className={styles.maingrowthflex}>
                    <Box className={styles.secondarygrowthbox}>
                        <Heading as='h4' size='md' className={styles.maingrowthheading}>Start Growing With HubSpot Today</Heading>
                        <Text className={styles.maingrowthtext}>With tools to make every part of your process more human and a support team excited to help you, getting started with inbound has never been easier.</Text>
                        <Button colorScheme={'ff5c35'} padding='5%' borderRadius={'0px'} className={styles.maingrowthbutton}>Start free or get a demo</Button>
                        <Text className={styles.maingrowthbottomtext}>Get started with free tools, or get more with our premium software.</Text>
                    </Box>
                    <Image className={styles.image}  src={homehuman}></Image>
                </Flex>
        </Box>
    );
}

export default GrowthHome;
