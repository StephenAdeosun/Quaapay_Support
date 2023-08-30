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
function Support() {
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
   
    <Box textAlign="center" maxWidth="700px" m="auto" bgColor="white" p={{base:'6', sm:'6', lg:'10'}} borderColor='gray.600'>
      <Text color="black"  mb="4"  fontSize="34px" fontWeight="900">Support Quaapay</Text>
      <Text mt={3} color="black" maxWidth="480px" m="auto">Support quaapay company to create more massive features you will enjoy later on.</Text>


<Box mt="8" display={"flex"} flexDir='row' w='100%' justifyContent="space-between">
      <Button variant="outline" borderColor=" gray.600"  color="black" w='49%' mt={5}  py={"26px"}>
        Give Once
      </Button> 
      <Button variant="outline" borderColor=" gray.600"  color="black" w='49%' mt={5} py={"26px"}>
       Give Monthly
      </Button>
      </Box>

      <form >
        <FormControl mt={12} color="black">
          <Input type="email"  borderColor="#CCCCCC"
          placeholder="Name"
          py="28px"
          _placeholder={{color:'#545454'}}
          _hover={{borderColor:"gray.600"}}
          // _focus={{outline:"none"}}
          />
          
        </FormControl>

        <FormControl mt={8} color="black">
          <Input type="email"  borderColor="#CCCCCC"
          placeholder="Email address"
          py="28px"
          _placeholder={{color:'#545454'}}
          _hover={{borderColor:"gray.600"}}
          />
        </FormControl>

        <FormControl mt={8} color="black">
            {/* Use the Select component for the dropdown */}
            <Select options={countryOptions} styles={customStyles} placeholder="Select a country"
            // placeholder={{textAlign:'right'}}
            />
          </FormControl>



        <Button type="submit" w="100%" color='white' bgColor="#4335E2" _hover={{bgColor:"#4335E2"}} py='6' mt={6}>
          <Link to='/payment' color='white'>Continue</Link>
        </Button>
      </form>
    </Box>
    </Box>
  );
}

export default Support;
