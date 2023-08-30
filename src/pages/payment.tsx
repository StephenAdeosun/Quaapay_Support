// pages/Support.js
import React from 'react';
import {Link} from 'react-router-dom'
import { ChakraProvider, extendTheme, CSSReset,Box, Heading,Image, Text, Button, Input, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';
import Select, { StylesConfig } from 'react-select';
import ArrowLeftIcon from './arrow-left.png';
import payCard from './payCard.png';
import payBank from './PayBank.png';
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
function Payment() {
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
    <Box bgColor="white">
      
      <Box display={{base:"none", sm:'block'}}>
         <Link to="/" >
          <img
            src={ArrowLeftIcon}
            alt="Back"
            style={{ position: 'absolute', top: '10px', left:'10px', margin: '0 45px 12px 12px ' , width: '44px', cursor: 'pointer' }}
          />
               </Link>
       </Box>
    <Box  maxWidth="700px" m="auto" bgColor="white" p={{base:'2', sm:'4', lg:'10'}} borderColor='gray.600'>
      <Text color="black"  mb="4" textAlign="center" fontSize="34px" fontWeight="900">Select payment method</Text>
      <Text mt={3}  color="black" maxWidth="480px" textAlign="center" m="auto">How do you want to support quapaay</Text>
{/* 

      <Box mt="8" display={"flex"} flexDir='column' w='100%' justifyContent="space-between">
      <Button variant="outline" borderColor=" gray.600"  color="black" w='70%' m='auto' mt={5}   display="flex" justifyContent="space-between" // Use display: flex to create a flex container
    alignItems="center" // Align content to th
    >
       <img src={payCard} alt="" width='40px' />
      <Text>Pay with Card</Text>
      </Button> 
      <Button variant="outline" borderColor=" gray.600"  color="black" w='49%' mt={5} py={"26px"}>
       Give Monthly
      </Button>
      </Box> */}
  <Box display="flex" alignItems="center" w="80%" border='1px solid' mb='4' mt='12' rounded='lg' mx='auto' py='4' px='2' borderColor='#CCCCCC' cursor='pointer'>
      <img src={payCard} alt="Image" width="45px" height="40px" />
      <Box marginLeft="8px" color="black">Pay with Card</Box>
    </Box>
    <Box display="flex" alignItems="center" w="80%" border='1px solid' my='4' rounded='lg' mx='auto' py='4' px='2' borderColor='#CCCCCC' cursor='pointer'>
      <img src={payBank} alt="Image" width="45px" height="40px" />
      <Box marginLeft="8px" color="black">Pay with Bank</Box>
    </Box>
      <Box display="flex" alignItems="center" w="80%" border='1px solid' my='4' rounded='lg' mx='auto' py='4' px='2' borderColor='#CCCCCC' cursor='pointer'>
      <img src={payCard} alt="Image" width="45px" height="40px" />
      <Box marginLeft="8px" color="black">Pay with Quaapay Wallet</Box>
    </Box>
    <Button type="submit" w="100%" bgColor="#4335E2" _hover={{bgColor:"#4335E2"}} py='6' mt={6}>
          <Link to='/card'  color='white'>Continue</Link>
          
        </Button>
    </Box>
    </Box>
  );
}

export default Payment;
