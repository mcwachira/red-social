import { authModalState } from '@/src/atoms/AuthModalAtom';
import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';


const SignUp:React.FC= () => {
    
    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
        confirmPassword:'',
    })

    const setAuthModalState = useSetRecoilState(authModalState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setSignUpForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    const handleSubmit = () => {

        // e.preventDefault()
    }
    const { email, password , confirmPassword} = signUpForm
    return (
        <form onSubmit={handleSubmit}>

            <Input type='email'
            name='email'
                placeholder='Email'
                mb={2}
                onChange={() => { }} value={email}
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
          

<Input type='password' name='password' placeholder='Password' mb={2}onChange = {() => { }}  value={password} required fontSize='18pt'
              _placeholder={{ color: 'gray.500' }} 
              _hover={{ bg: 'white', 
              border: '1px solid',
               borderColor: 'blue.500' }}
               _focus={{ outline: 'none', 
               bg: 'white',
                border: '1px solid',
                 borderColor: 'blue.500' }}
                bg='gray.50'/>

<Input type='password' name='confirmPassword' placeholder='Confirm Password' mb={2}onChange = {() => { }}  value={confirmPassword} required fontSize='18pt'
              _placeholder={{ color: 'gray.500' }} 
              _hover={{ bg: 'white', 
              border: '1px solid',
               borderColor: 'blue.500' }}
               _focus={{ outline: 'none', 
               bg: 'white',
                border: '1px solid',
                 borderColor: 'blue.500' }}
                bg='gray.50'/>

            <Button width='100%' height='36px' mt={2} mb={2} type='submit'> Sign Up</Button>

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