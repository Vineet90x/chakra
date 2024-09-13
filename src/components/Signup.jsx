import {Text, Button, Container, Heading, Input, VStack, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <Container maxW={'container.xl'} p={'16'}>
          <form>
            <VStack
                alignItems={'stretch'}
                spacing={'8'}
                w={['full','96']}
                m={'auto'}
                my={'16'}
            >   
                <Heading textAlign={'center'}>Mp4ForU</Heading>
                <Avatar alignSelf={'center'} boxSize={['10','20']}/>

            <Input
                placeholder='Enter your Name'
                type='text'
                required
                focusBorderColor={'purple.600'}
            />

            <Input
                placeholder='Enter your email'
                type='email'
                required
                focusBorderColor={'purple.600'}
            />
    
            <Input
                placeholder={'Enter your password'}
                type={'password'}
                required
                focusBorderColor={'purple.600'}
            />
    
            <Button colorScheme='purple' type='submit'>
                Log In
            </Button>
    
            <Text textAlign={'center'}>
                Already have an account?{' '}
                <Button variant={'link'}>
                <Link to= '/login'>Login</Link>
                
            </Button>
            </Text>
            </VStack>
          </form>
        </Container>
      )
}

export default Signup
