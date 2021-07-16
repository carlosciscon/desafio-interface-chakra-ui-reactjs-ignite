import { Box, Flex } from "@chakra-ui/react";
import Head from 'next/head'
import Image from 'next/image'
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Travels } from "../components/Travels";


export default function Home() {
  return (
    
    <Box>
      <Header />
      <Flex
        w="100%"
      >
        <Banner />
      </Flex>
      <Travels />
      
    </Box>      

  )
}
