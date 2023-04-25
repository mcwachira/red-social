import React from 'react';
import AuthButtons from './AuthButtons';
import { Flex } from '@chakra-ui/react';
import AuthModal from '../../Modal/Auth/AuthModal';

type RightContentProps = {
    //usewr
};

const RightContent:React.FC<RightContentProps> = () => {
    
    return(
        <>

<AuthModal/>
        <Flex align='center' justify='space-between'>
            <AuthButtons/>
        </Flex>
        </>
      
    )
}
export default RightContent;