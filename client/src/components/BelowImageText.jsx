import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import styles from "../Styles/BelowImageText.module.css";

const BelowImageText = () => {
    return (
        <Box marginTop={'5%'}>
                <Heading as='h3' size='lg' className={styles.mainhead}>The CRM Platform Your Whole Business Will Love</Heading>
                <Text className={styles.description}>HubSpot’s CRM platform has all the tools and integrations you need for marketing, sales, content management, and customer service. Each product in the platform is powerful alone, but the real magic happens when you use them together.</Text>
                <Flex className={styles.buttons}>
                    <Button borderRadius={'0px'}  bgColor={'#ff5c35'} className={styles.getbutton}>Get free CRM</Button>
                    <Button borderRadius={'0px'} bgColor={'white'} className={styles.demobutton}>Demo premium CRM</Button>
                </Flex>
        </Box>
    );
}

export default BelowImageText;
