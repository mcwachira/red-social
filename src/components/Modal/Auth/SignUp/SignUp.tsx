import { authModalState } from '@/src/atoms/AuthModalAtom';
import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { auth } from '@/src/firebase/client.App';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { FirebaseErrors } from '@/src/firebase/errors';


const SignUp:React.FC= () => {
    
     const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
        confirmPassword:'',
    })


    const [error, setError] = useState("")
    const [
        createUserWithEmailAndPassword,
        user,
        loading, 
        userError,
    ] = useCreateUserWithEmailAndPassword(auth)

    const setAuthModalState = useSetRecoilState(authModalState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setSignUpForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const { email, password , confirmPassword} = signUpForm

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

         e.preventDefault()


if(error) setError('');
      if(password !== confirmPassword){
       setError('Passwords  do not match')
         }
         createUserWithEmailAndPassword(email, password)

    }

    return (
        <form onSubmit={handleSubmit}>

            <Input type='email'
            name='email'
                placeholder='Email'
                mb={2}
                onChange={handleChange} 
                value={email}
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
          

<Input type='password' 
name='password'
 placeholder='Password'  mb={2}
  onChange={handleChange} 
value={password}
 required
  fontSize='18pt'
              _placeholder={{ color: 'gray.500' }} 
              _hover={{ bg: 'white', 
              border: '1px solid',
               borderColor: 'blue.500' }}
               _focus={{ outline: 'none', 
               bg: 'white',
                border: '1px solid',
                 borderColor: 'blue.500' }}
                bg='gray.50'/>

<Input type='password'
 name='confirmPassword'
  placeholder='Confirm Password'
   mb={2}
   onChange={handleChange}
     value={confirmPassword}
      required fontSize='18pt'
              _placeholder={{ color: 'gray.500' }} 
              _hover={{ bg: 'white', 
              border: '1px solid',
               borderColor: 'blue.500' }}
               _focus={{ outline: 'none', 
               bg: 'white',
                border: '1px solid',
                 borderColor: 'blue.500' }}
                bg='gray.50'/>

{error || userError && (
    <Text textAlign='center' fontWeight='10pt' color='red'>{error || FirebaseErrors[userError?.message as keyof typeof FirebaseErrors ]}</Text>
)}
            <Button width='100%' height='36px' mt={2} mb={2} type='submit' isLoading={loading}> Sign Up</Button>

        <Flex justifyContent='center' fontSize='9pt'>
        <Text mr={1}> Have an  account ?</Text>
        <Text color='blue.500' fontWeight={700} cursor='pointer' onClick={() => setAuthModalState((prev) => ({
            ...prev,
            view:'login'

        }))}>Log in</Text>
        </Flex>
        </form>
    )
}

export default SignUp;