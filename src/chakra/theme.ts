import { extendTheme } from '@chakra-ui/react'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
import { Button } from './button'

export const theme = extendTheme({
    colors:{
        brand:{
            1000:'#ff3c00'
        },
    },
    fonts:{
        body:'Open Sans, sans-serif'
    },
    //global styles provide default styles for the body
    styles:{
        global:() => ({
            body:{
            bg:'gray.200'
            }
        })
    },

    //components provide styles for chakra ui components
 components:{
    Button
 }

})