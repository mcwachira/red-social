import React from 'react';
import { Button, Flex, Image } from '@chakra-ui/react';



const OauthButtons:React.FC = () => {
    
    return(
        <Flex direction='column' width='100%' mb={4}>
            <Button variant='oauth' mb={2}>
                <Image src='/images/googlelogo.png' height='20px' mr={4} alt='logo'/>
                Continue with Google 
            </Button>
            <Button variant='oauth' mb={2}>
                Some Other Provider
            </Button>
        </Flex>    )
}
export default OauthButtons;