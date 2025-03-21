import React from 'react'
import Card from '../../../components/Card'
import { Button, Icon, VStack, Text, Box, Center, Container } from '@chakra-ui/react'
import {MdEmail} from 'react-icons/md';
const RegisterEmailVerify = () => {
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
                        <Icon as={MdEmail} boxSize='48px' color='p.purple'/>
                        <Text 
                        textstyle='h4'
                        color='p.black'
                        fontWeight='medium'
                        >
                            Email Verification
                        </Text>
                        <Text textAlign='center' textstyle='p2' color='black.60'>
                            We have sent you an email verification to <Box as='b' color='p.black'>jenny.wilson@gmail.com</Box> If you didn't receive it, click the button below.
                        </Text>
                        <Button w='full' variant='outline'>Re-send Email</Button>
                    </VStack>
                </Card>
            </Center>
    </Container>
  )
}

export default RegisterEmailVerify