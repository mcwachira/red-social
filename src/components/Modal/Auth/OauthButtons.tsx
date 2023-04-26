import React from 'react';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '@/src/firebase/client.App';




const OauthButtons:React.FC = () => {

    const [
        signInWithGoogle,
        user,
        loading, 
        error,
    ] = useSignInWithGoogle(auth)

    const loginWithGoogle = async () => {

        await signInWithGoogle()
    }
    
    return(
        <Flex direction='column' width='100%' mb={4}>
            <Button variant='oauth' mb={2}  isLoading={loading} onClick={loginWithGoogle}>
                <Image src='/images/googlelogo.png' height='20px' mr={4} alt='logo'/>
                Continue with Google 
            </Button>
            <Button variant='oauth' mb={2} isLoading={loading}>
                Some Other Provider
            </Button>

            {error && <Text>{error.message}</Text>}
        </Flex>    )
}
export default OauthButtons;