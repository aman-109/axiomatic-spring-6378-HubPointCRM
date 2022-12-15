import { Box, Button, Checkbox, Container, Divider, Flex, FormControl, FormLabel, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiExternalLink } from 'react-icons/fi';
import { ImFacebook } from 'react-icons/im';
import { Link } from 'react-router-dom';
import hub from "../components/assets/Hub point.png";
import styles from "../Styles/Login.module.css";

const Login = () => {
    return (
        <Box>
                <VStack>
                    <Image src={hub}></Image>
                    <Text>Don't have an account?<Link className={styles.linksignup} to='/signup'>Sign up</Link></Text>
                </VStack>

        <Box className={styles.bottombox}>  
                <FormControl>
                <Container className={styles.emailcont}>
                    <FormLabel>Enter Email</FormLabel>
                    <Input></Input>
                </Container>
                 <Container className={styles.passcont}>
                    <FormLabel>Password</FormLabel>
                    <Input></Input>
                </Container>
                <Container>
                    <Button bgColor={'tomato'} color='white' className={styles.buttonlogin}>Log in</Button>
                </Container>
                </FormControl>
                <Container>
                    <Divider className={styles.divider}></Divider>
                </Container>
                <Container className={styles.buttoncont}>
                    <Button  bgColor={'skyblue'}   className={styles.buttongoogle}><FcGoogle className={styles.icons}/>Signin with Google</Button>
                    <br/>
                    <Button bgColor={'darkblue'}  className={styles.buttonfb}><ImFacebook className={styles.icons}/>Signin with Facebook</Button>
                </Container>

                <Text className={styles.bottomtext}>©2022 HubSpot, Inc. All Rights Reserved.</Text>
                <Flex className={styles.flexbottom} justifyContent={'center'} alignItems={'center'}><Text className={styles.privacytext}>Privacy Policy</Text><FiExternalLink/></Flex>
            </Box>
        </Box>
    );
}

export default Login;
