import React from 'react';
import {Box,Flex,VStack,Text,Heading,Grid,GridItem,Image} from "@chakra-ui/react";
import wwf from "./assets/wwf.webp"
import ww from "./assets/ww.webp"
import event from "./assets/event.webp"
import sound from "./assets/sound.webp"
import momem from "./assets/momem.webp"
import reddit from "./assets/reddit.webp"
import tre from "./assets/tre.webp"
import doorsh from "./assets/doorsh.webp";
import styles from "../Styles/AdsComponent.module.css";

const AdsComponent = () => {
    return (
        <Box className={styles.adsbox}>
            <Flex className={styles.adsflex}>
                <Box className={styles.adsvstack}>
                    <Heading className={styles.heading}>158,000+</Heading>
                    <Text className={styles.text}>customers in over 120 countries growing their businesses with HubSpot</Text>    
                </Box>    
                <Grid className={styles.grid}>
                    <GridItem className={styles.griditem}><Image className={styles.image} src={wwf}></Image></GridItem>
                    <GridItem className={styles.griditem}><Image className={styles.image} src={tre}></Image></GridItem>
                    <GridItem className={styles.griditem}><Image className={styles.image} src={reddit}></Image></GridItem>
                    <GridItem className={styles.griditem}><Image className={styles.image} src={ww}></Image></GridItem>
                    <GridItem className={styles.griditem}><Image marginTop={'20%'} className={styles.image} src={sound}></Image></GridItem>
                    <GridItem className={styles.griditem}><Image className={styles.image} src={momem}></Image></GridItem>
                    <GridItem className={styles.griditem}><Image marginTop={'5%'} className={styles.image} src={doorsh}></Image></GridItem>
                    <GridItem className={styles.griditem}><Image marginTop={'5%'} className={styles.image} src={event}></Image></GridItem>
                </Grid>
            </Flex>       
        </Box>
    );
}

export default AdsComponent;
