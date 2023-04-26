import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { authModalState } from '@/src/atoms/AuthModalAtom';
import { auth } from '@/src/firebase/client.App';
import { useSetRecoilState } from 'recoil';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FIREBASE_ERRORS } from '@/src/firebase/errors';

type LoginProps = {

};

const Login: React.FC<LoginProps> = () => {

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const setAuthModalState = useSetRecoilState(authModalState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setLoginForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const { email, password } = loginForm

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        signInWithEmailAndPassword(email, password)
    }

    return (
        <form onSubmit={handleSubmit}>

            <Input type='email'
            name='email'
                placeholder='Email'
                mb={2}
                onChange={handleChange} value={email}
                required fontSize='18pt'
                _placeholder={{ color: 'gray.500' }}
                _hover={{
                    bg: 'white',
                    border: '1px solid', 
                    borderColor: 'blue.500'
                }}
                 _focus={{ 
                    outline: 'none',
                     bg: 'white', 
                     border: '1px solid', 
                     borderColor: 'blue.500' }}
                 bg='gray.50'/>
            <Input type='password' name='password' placeholder='Password' mb={2} onChange = {handleChange}  value={password} required fontSize='18pt'
              _placeholder={{ color: 'gray.500' }} 
              _hover={{ bg: 'white', 
              border: '1px solid',
               borderColor: 'blue.500' }}
               _focus={{ outline: 'none', 
               bg: 'white',
                border: '1px solid',
                 borderColor: 'blue.500' }}
                bg='gray.50'/>

{error && <Text textAlign='center' mt={2} mb={2} color='red'> {error?.message}</Text>}
            
            <Button width='100%' height='36px' mt={2} mb={2} type='submit'  isLoading={loading}> Log In</Button>
 

            <Flex justifyContent='center' fontSize='9pt'>
        <Text mr={1}> Forgot Password</Text>
        <Text color='blue.500' fontWeight={700} cursor='pointer' onClick={() => setAuthModalState((prev) => ({
            ...prev,
            view:'resetPassword'

        }))}>Reset </Text>

</Flex>
        <Flex justifyContent='center' fontSize='9pt'>
        <Text mr={1}> New Here ?</Text>
        <Text color='blue.500' fontWeight={700} cursor='pointer' onClick={() => setAuthModalState((prev) => ({
            ...prev,
            view:'signup'

        }))}> Sign Up</Text>
        </Flex>
        </form>
    )
}
export default Login;