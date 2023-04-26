import React from 'react';
import AuthButtons from './AuthButtons';
import { Button, Flex } from '@chakra-ui/react';
import AuthModal from '../../Modal/Auth/AuthModal';
import { signOut } from 'firebase/auth';
import { auth } from '@/src/firebase/client.App';

type RightContentProps = {
    user:any
};

const RightContent:React.FC<RightContentProps> = ({user}) => {
    
    return(
        <>

<AuthModal/>
        <Flex align='center' justify='space-between'>

            {user? <Button onClick={ () => signOut(auth)}> Sign Out</Button> :       <AuthButtons/>}
     
        </Flex>
        </>
      
    )
}
export default RightContent;