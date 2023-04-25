import { ComponentStyleConfig } from "@chakra-ui/react";


export const Button:ComponentStyleConfig = {
    baseStyle:{
        borderRadius:'60px',
        fontSize:'10pt',
        fontWeight:700,
        _focus:{
            boxShadow:'none'
        }
    },

    sizes:{
sm:{
    fontSizes:'8pt',
},
    md:{
        fontSize:'10pt'
    }
},

variants:{
    solid:{
        color:'white',
        bg:'blue',
        _hover:{
            bg:'blue.400'
        }
    },


outline:{
    color:'blue.50',
    border:'1px solid',
    borderColor:"blue.500"
},

oauth:{
    height:'34px',
    border:'1px solid',
    borderColor:"gray.300",
    hover:{
        bg:'gray.50',
    },
},
    },
};