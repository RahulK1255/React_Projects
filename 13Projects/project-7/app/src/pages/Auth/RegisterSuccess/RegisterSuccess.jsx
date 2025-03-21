import React from 'react'
import Card from '../../../components/Card'
import { Button, Icon, VStack, Text, Box, Center, Container } from '@chakra-ui/react'
import {MdEmail} from 'react-icons/md';
import { BsPatchCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const RegisterSuccess = () => {
  return (
    <Container>
            <Center minH="100vh">
        <Card 
        p={{
            base: "4",
            md: "10"
        }}
        showCard={true}
        >
            <VStack spacing={6}>
                <Icon as={BsPatchCheck} boxSize='48px' color='green'/>
                <Text 
                textstyle='h4'
                color='p.black'
                fontWeight='medium'
                >
                    Successfully Registration
                </Text>
                <Text textAlign='center' textstyle='p2' color='black.60'>
                    Hurray! You have successfully created your account. Enterthe app to explore all it's features.
                </Text>
                <Box w='full'>
                    <Link to="/signin">
                        <Button w='full'>Enter the app</Button>
                    </Link>
                </Box>
            </VStack>
        </Card>
            </Center>
    </Container>
  )
} 

export default RegisterSuccess