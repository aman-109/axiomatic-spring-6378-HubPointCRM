import { Box, Button, Container, Divider, Flex, FormControl, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FcGoogle, FcNext } from 'react-icons/fc';
import { ImOpt } from 'react-icons/im';
import { TfiFacebook} from 'react-icons/tfi';
import { Link, useNavigate } from 'react-router-dom';
import hub from "../components/assets/Hub point.png";
import styles from "../Styles/Signup.module.css";
import signup from "../components/assets/signupimage.webp";
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../redux/auth/auth.actions';

const Signup = () => {
    const navigate= useNavigate()
   const [signupCreds,setSignupCreds] = useState({
    name:"",
    email:"",
    password:"",
    company_name:"",
    company_website:""
   })

   const handleChange = (e) =>{
    const {name,value} = e.target;
        setSignupCreds({
            ...signupCreds,
            [name]:value
        })
   }
   const handlesubmit = async(e) =>{

        e.preventDefault()
        try{
            let data= await axios.post("https://hubpointserver.onrender.com/user/signup",signupCreds)
            localStorage.setItem("user",JSON.stringify(data.data.user))
            navigate("/login")

        }catch(e){
            alert(e.data)
        }
   }
    return (

        <Box className={styles.mainflexsignup}>
            <Flex className={styles.header}>
                <Box>
                     <Link to='/'><Image className={styles.logo} src={hub}></Image></Link>
                </Box>
                <Box>
                      <Text className={styles.signintext}>Have an account?<Link className={styles.signinlink}to='/login'>Sign in</Link></Text>
                </Box>
            </Flex>

            <Flex className={styles.bottomflex}>
                <Box className={styles.leftside}>
                         <Heading className={styles.createHead}>Create your free account</Heading> 
                        <Text textAlign={'center'} padding='10px'>100% free. No credit card needed.</Text>
                    <VStack className={styles.buttonvsatck}>
                        <a href="https://hubpointserver.onrender.com/user/auth/google"> <Button bgColor={'skyblue'} borderRadius='5px' className={styles.googlesignup}>Signup with Google<FcGoogle fontSize={'25px'} padding='20px' borderRadius='0px'/></Button></a>
                        
                       <a href="https://hubpointserver.onrender.com/user/auth/facebook"> <Button marginTop={'3%'} bgColor={'darkblue'}  borderRadius='5px' className={styles.fbsignup}>Signup with Facebook<TfiFacebook fontSize={'25px'} padding='20px' borderRadius='0px'/></Button></a>
                    </VStack>

                         <Flex className={styles.dividerflex}>
                            <Divider  className={styles.divider1}orientation='horizontal'></Divider>
                            <Text className={styles.dividerText}>Or</Text>
                            <Divider className={styles.divider2} orientation='horizontal'></Divider>
                        </Flex>
                        <form onSubmit={handlesubmit}>
                         <FormControl >
                            <Flex><Container className={styles.inputHStack}>
                                <Input
                                autoComplete='off' 
                            onChange={handleChange}
                            value={signupCreds.firstname}
                            name='name'
                            placeholder='Enter Name' borderTop={'0px'} 
                            borderLeft='0px'
                            borderRight={'0px'}
                            className={styles.nameInput}></Input>
                            </Container>
                            </Flex>

                            <Container alignItems={'flex-start'}>
                            <Input
                            autoComplete='off'
                            onChange={handleChange}
                            name='email'
                            type="email"
                            value={signupCreds.email}
                            placeholder=' Email address'
                              borderTop={'0px'} 
                            borderLeft='0px'
                            borderRight={'0px'}
                            className={styles.emailinput}>
                            </Input>
                            </Container>

                            <Container alignItems={'flex-start'}>
                            <Input
                            autoComplete='off'
                            onChange={handleChange}
                            name='password'
                            type="password"
                            value={signupCreds.password}
                            placeholder=' Enter Password'
                            borderTop={'0px'} 
                            borderLeft='0px'
                            borderRight={'0px'}
                            className={styles.emailinput}>
                            </Input>
                            </Container>

                            <Container alignItems={'flex-start'}>
                            <Input
                            autoComplete='off'
                            onChange={handleChange}
                            name='company_name'
                            value={signupCreds.companyName}
                            placeholder=' Company name'
                              borderTop={'0px'} 
                            borderLeft='0px'
                            borderRight={'0px'}
                            className={styles.emailinput}>
                            </Input>
                            </Container>

                            <Container alignItems={'flex-start'}>
                            <Input
                            autoComplete='off'
                            onChange={handleChange}
                            name='company_website'
                            value={signupCreds.companyWebsite}
                            placeholder=' Company website'
                              borderTop={'0px'} 
                            borderLeft='0px'
                            borderRight={'0px'}
                            className={styles.emailinput}>
                            </Input>
                            </Container>

                            <Button type="submit" disabled={!signupCreds.name || !signupCreds.email || !signupCreds.password || !signupCreds.company_name || !signupCreds.company_website} bgColor={'tomato'} 
                            // onClick={handleSubmit}
                            className={styles.nextbutton}>Next<FcNext  fontSize={'20px'}/></Button>
                        </FormControl>
                        </form>
                    <Text className={styles.leftsidetext}>We’re committed to your privacy. HubSpot uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy</Text>

                </Box>
                <Box className={styles.rightSide}>
                     <Image className={styles.signupimage} src={signup}></Image>
                     <Heading className={styles.crmhead} marginTop={'2%'} as='h4' size={'md'} textAlign={'center'}>HubSpot's CRM is 100% free.</Heading>
                     <Text className={styles.crmtext}  textAlign={'center'} marginTop='3%'>No credit card needed.</Text>
                </Box>   
            </Flex>
        </Box>
    );
}

export default Signup;
