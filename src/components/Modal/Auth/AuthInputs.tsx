import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { authModalState } from '@/src/atoms/AuthModalAtom';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';



const AuthInputs:React.FC = () => {
    
    const modalState =  useRecoilValue(authModalState)
    return (
        <Flex direction='column' align='center' width='100%' mt={4}>

{modalState.view ==='login' && <Login/>}
              {modalState.view ==='signup' && <SignUp/>}
        </Flex>
    )
}
export default AuthInputs;