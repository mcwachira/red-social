import { authModalState } from '@/src/atoms/AuthModalAtom';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex, Text } from '@chakra-ui/react';
import React, {useEffect} from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';
import OauthButtons from './OauthButtons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/src/firebase/client.App';
import ResetPassword from './Reset/ResetPassword';

const AuthModal:React.FC = () => {
    
    const [modalState, setModalState] =  useRecoilState(authModalState)


    const [user, loading, error] = useAuthState(auth);



    const handleClose = () => {
setModalState((prev) => ({
    ...prev,
    open:false

}))
    }


    useEffect(() => {
      if (user)  handleClose()
    }, [ user])
    return (
      <>

  
        <Modal isOpen={modalState.open} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign ='center'>


              {modalState.view ==='login' && 'Login'}
              {modalState.view ==='signup' && 'Sign up'}
              {modalState.view ==='resetPassword' && 'Reset Password'}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody
             display='flex'
             flexDirection='column'
             alignItems='center'
             justifyContent='space-between'
             pb={5}
             >
           
           <Flex

           direction='column'
           align='center'
           justify='center'
           width='70%'
        >
            {modalState.view ==='login' && 'Login'|| modalState.view ==='signup' && 'Sign up' ? (
              <>
<OauthButtons/>
<Text color='gray.400' fontWeight={700}>

  OR
</Text>
<AuthInputs/>
              </>
            ): (
              <ResetPassword/>
            )}


           </Flex>
            </ModalBody>
  
          
          </ModalContent>
        </Modal>
      </>
    )
}
export default AuthModal;