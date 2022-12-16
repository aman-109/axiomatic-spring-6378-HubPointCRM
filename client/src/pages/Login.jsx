import { Box, Button, Checkbox, Container, Divider, Flex, FormControl, FormLabel, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiExternalLink } from 'react-icons/fi';
import { ImFacebook } from 'react-icons/im';
import { Link } from 'react-router-dom';
import hub from "../components/assets/Hub point.png";
import styles from "../Styles/Login.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/auth/auth.actions';

const Login = () => {

     const isAuth = useSelector(store=>store.auth.isAuth)
    const dispatch = useDispatch()
    const [loginCreds , setLoginCreds] = useState({
        email:'',
        password:'',
    })

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setLoginCreds({
            ...loginCreds,
            [name]:value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(login(loginCreds))
    }

    
    return (
        <Box>
                <VStack>
                    <Link to='/'><Image src={hub}></Image></Link>
                    <Text>Don't have an account?<Link className={styles.linksignup} to='/signup'>Sign up</Link></Text>
                </VStack>

        <Box className={styles.bottombox}>  
                <FormControl onSubmit={handleSubmit}>
                <Container className={styles.emailcont}>
                    <FormLabel>Enter Email</FormLabel>
                    <Input 
                    name='email'
                    value={loginCreds.email}
                    onChange={handleChange}></Input>
                </Container>
                 <Container className={styles.passcont}>
                    <FormLabel>Password</FormLabel>
                    <Input 
                    name='password'
                    value={loginCreds.password}
                    onChange={handleChange}></Input>
                    <Flex alignItem='center' justifyContent={'space-between'} marginTop='2%'>
                        <Link to='/forgetpassword'><Text color='blue'>Forget password?</Text></Link>
                        <Link to='/otp'><Text color='blue'>Sign in using OTP</Text></Link>
                    </Flex>
                </Container>
                <Container>
                    <Button disabled={!loginCreds.email || !loginCreds.password} bgColor={'tomato'} color='white' className={styles.buttonlogin}>Log in</Button>
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
