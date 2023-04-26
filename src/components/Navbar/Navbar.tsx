import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import SearchInput from './SearchInput';
import RightContent from './RightContent/RightContent';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/src/firebase/client.App';

   



const Navbar:React.FC = () => {
    
    const [user, loading, error] = useAuthState(auth);
    return (
        <Flex bg='white' height='48px' padding='6px 12px'>
            <Flex align='center'>
                
                <Image src='/images/redditFace.svg' height={46} width={30} alt='logo'/>
                <Image src="/images/redditText.svg" height={46} width={46} display={{base:'none', md:'unset'}} alt='logo'/>
                           </Flex>

<SearchInput/>

<RightContent user={user}/>
            
        </Flex>
    )
}
export default Navbar;