import React from 'react';
import {Box, Button, Flex, Heading, Image, Text} from "@chakra-ui/react";
import styles from "../Styles/HomeimageComponent.module.css";
import headerimg from "./assets/headerimg.png";
import { Link } from 'react-router-dom';

const HomeimageComponent = () => {
    return (
        <Flex className={styles.imagetop}>

            <Box className={styles.textbox}>
                <Text className={styles.firsttext}>HUBSPOT CRM PLATFORM</Text>
                <Heading className={styles.headingmain} as='h1' size='xlg'>Powerful, </Heading>
                <Heading className={styles.headingmain2} as='h1' size='xlg'>not overpowering</Heading>
                <Text className={styles.textboxdesc}>Finally, a CRM platform that’s both powerful and easy to use.</Text>
                <Text className={styles.textboxdesc2}>Create delightful customer experiences. Have a delightful time doing it.</Text>
                <Link to='/login'><Button className={styles.buttonStyle}>Start free or get a demo</Button></Link>
                <Text className={styles.getStarted}>Get started with free tools, or get </Text>
                <Text className={styles.getStarted2}>more with our premium software.</Text>
            </Box>
                <Box>
                    <Image className={styles.headerimage} src={headerimg}></Image>
                </Box>
        </Flex>
    );
}

export default HomeimageComponent;
