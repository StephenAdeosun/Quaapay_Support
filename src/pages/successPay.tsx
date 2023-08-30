// pages/Support.js
import React from 'react';
import {Link} from 'react-router-dom'
import { ChakraProvider, extendTheme, CSSReset,Box, Heading,Image, Text, Button, Input, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';
import Select, { StylesConfig } from 'react-select';
import ArrowLeftIcon from './arrow-left.png';
import Successful from './success.png'
const theme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        _focus: {
          boxShadow: 'none', // Remove box shadow on focus
        },
      },
    },
  },
});
function successpay() {
  const countryOptions = [
    { value: 'usa', label: 'United States' },
    { value: 'canada', label: 'Canada' },
    // Add more country options
  ];
  const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      textAlign: 'left', // Align the text to the left
      borderColor: "#CCCCCC",
      py:"14",
      _hover: { borderColor: 'gray.600' },
      boxShadow:"none" // Remove box shadow

    }),
    placeholder: (provided) => ({
      ...provided,
      paddingTop:"14px",
      paddingBottom:"14px",
      color:"#545454",
      paddingLeft: '8px', // Add left padding to the placeholder
    }),
  };
  return (
    <Box bgColor="white" >
      
     

     
    <Box  maxWidth="700px" m="auto" bgColor="white" p={{base:'2', sm:'4', lg:'10'}}  textAlign='center' borderColor='gray.600'>
         <img src={Successful} width='150px'  alt="" style={{margin:'30px auto'}}/>
      <Text color="black"  mb="4" textAlign="center" fontSize="34px" fontWeight="900">Payment successful</Text>
      <Text mt={3}  color="black" maxWidth="460px" textAlign="center" m="auto">Thanks so much for supporting Quapaay!   </Text>
      <Text mt={3}  color="black" maxWidth="460px" textAlign="center" m="auto">   We’ll be in touch with you soon.</Text>


    <Button  w="100%" bgColor="#4335E2" color='white' _hover={{bgColor:"#4335E2"}} py='6' mt={14}>
          <Link to='/'  color='white'>Back Home</Link>
         
        </Button>
    </Box>
    </Box>
  );
}

export default successpay;
