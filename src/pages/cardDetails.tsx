// pages/Support.js
import React from 'react';
import {Link} from 'react-router-dom'
import { ChakraProvider, extendTheme, CSSReset,Box, Heading, Text, Button, Input, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';
import Select, { StylesConfig } from 'react-select';
import ArrowLeftIcon from './arrow-left.png';
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
function Card() {
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
         <Link to="/payment" >
          <img
            src={ArrowLeftIcon}
            alt="Back"
            style={{ position: 'absolute', top: '10px', left:'10px', margin: '0 45px 12px 12px ' , width: '44px', cursor: 'pointer' }}
          />
               </Link>
       </Box>
    <Box textAlign="center" maxWidth="700px" m="auto" bgColor="white" p={{base:'2', sm:'6', lg:'10'}} borderColor='gray.600'>
      <Text color="black"  mb="4"  fontSize="34px" fontWeight="900">Input card details</Text>
      <Text mt={3} color="black" maxWidth="480px" m="auto">Kindly input your card details to pay for quaapay support.</Text>


{/* <Box mt="8" display={"flex"} flexDir='row' w='100%' justifyContent="space-between">
      <Button variant="outline" borderColor=" gray.600"  color="black" w='49%' mt={5}  py={"26px"}>
        Give Once
      </Button> 
      <Button variant="outline" borderColor=" gray.600"  color="black" w='49%' mt={5} py={"26px"}>
       Give Monthly
      </Button>
      </Box> */}
      <Text mt={8} color="black" textAlign="left" fontSize="lg" fontWeight="xl">Input Card Details</Text>

      <form >
        <FormControl mt={4} color="black">
          <Input type="email"  borderColor="#CCCCCC"
          placeholder="Enter Card Name"
          py="28px"
          _placeholder={{color:'#545454'}}
          _hover={{borderColor:"gray.600"}}
          // _focus={{outline:"none"}}
          />
          
        </FormControl>

        <FormControl mt={8} color="black">
          <Input type="email"  borderColor="#CCCCCC"
          placeholder="Enter Card Number"
          py="28px"
          _placeholder={{color:'#545454'}}
          _hover={{borderColor:"gray.600"}}
          />
        </FormControl>

      
<Box  display={"flex"} textAlign="left" flexDir='row' w='100%' justifyContent="space-between">
      
       <FormControl mt={8} color="black" w='49%'>
          <Input type="email"  borderColor="#CCCCCC"
          placeholder="Expiry Date"
          py="28px"
          _placeholder={{color:'#545454'}}
          _hover={{borderColor:"gray.600"}}
          />
        </FormControl>
        <FormControl mt={8} color="black" w='49%'>
          <Input type="email"  borderColor="#CCCCCC"
          placeholder="CVV"
          py="28px"
          _placeholder={{color:'#545454'}}
          _hover={{borderColor:"gray.600"}}
          />
        </FormControl>

      </Box>

        <FormControl mt={8} color="black">
          <Input type="email"  borderColor="#CCCCCC"
          placeholder="Enter Amount"
          py="28px"
          _placeholder={{color:'#545454'}}
          _hover={{borderColor:"gray.600"}}
          />
        </FormControl>
        <Button type="submit" w="100%" color='white' bgColor="#4335E2" _hover={{bgColor:"#4335E2"}} py='6' mt={6}>
        <Link to='/successpay'  color='white'>Pay $100 now</Link>

        </Button>
      </form>
    </Box>
    </Box>
  );
}

export default Card;
