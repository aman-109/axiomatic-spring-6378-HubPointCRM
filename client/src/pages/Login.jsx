import { Box, Button, Checkbox, Container, Divider, Flex, FormControl, FormLabel, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiExternalLink } from 'react-icons/fi';
import { ImFacebook } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import hub from "../components/assets/Hub point.png";
import styles from "../Styles/Login.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/auth/auth.actions';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import jwtDecode from 'jwt-decode';

const Login = () => {
    const navigate=useNavigate()
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

    const handleSubmit = async(e) =>{
        e.preventDefault()
        let data= await axios.post('https://hubpointserver.onrender.com/user/login',loginCreds,{
            withCredentials: true,
            headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
        }})
        if(data.status != 200 && data.data.status=== false){
                alert(data.data.message)
        }
        else{
            let x=jwtDecode(data.data.token)
            if(x.role !== "admin"){

                navigate("/marketplace")
            }
            else{
                navigate("/admin")
            }
        }
    }

    
    return (
        <Box>
                <VStack>
                    <Link to='/'><Image src={hub}></Image></Link>
                    <Text>Don't have an account?<Link className={styles.linksignup} to='/signup'>Sign up</Link></Text>
                </VStack>

        <Box className={styles.bottombox}>  
        <form onSubmit={handleSubmit}>
                <FormControl >
                <Container className={styles.emailcont}>
                    <FormLabel>Enter Email</FormLabel>
                    <Input 
                    name='email'
                    type="email"
                    autoComplete='off'
                    value={loginCreds.email}
                    onChange={handleChange}></Input>
                </Container>
                 <Container className={styles.passcont}>
                    <FormLabel>Password</FormLabel>
                    <Input 
                    name='password'
                    type="password"
                    autoComplete='off'
                    value={loginCreds.password}
                    onChange={handleChange}></Input>
                    <Flex alignItem='center' justifyContent={'space-between'} marginTop='2%'>
                        <Link to='/forgetpassword'><Text color='blue'>Forget password?</Text></Link>
                        <Link to='/otp'><Text color='blue'>Sign in using OTP</Text></Link>
                    </Flex>
                </Container>
                <Container>
                    <Button type="submit" disabled={!loginCreds.email || !loginCreds.password} bgColor={'tomato'} color='white' className={styles.buttonlogin}>Log in</Button>
                </Container>
                </FormControl>
                </form>
                <Container>
                    <Divider className={styles.divider}></Divider>
                </Container>
                <Container className={styles.buttoncont}>
                    <a href="https://hubpointserver.onrender.com/user/auth/google"><Button  bgColor={'skyblue'}   className={styles.buttongoogle}><FcGoogle className={styles.icons}/>Signin with Google</Button></a>
                    <br/>
                   <a href="https://hubpointserver.onrender.com/user/auth/facebook"><Button bgColor={'darkblue'}  className={styles.buttonfb}><ImFacebook className={styles.icons}/>Signin with Facebook</Button></a>
                </Container>

                <Text className={styles.bottomtext}>©2022 HubSpot, Inc. All Rights Reserved.</Text>
                <Flex className={styles.flexbottom} justifyContent={'center'} alignItems={'center'}><Text className={styles.privacytext}>Privacy Policy</Text><FiExternalLink/></Flex>
            </Box>
        </Box>
    );
}

export default Login;
