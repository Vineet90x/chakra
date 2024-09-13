import {Text, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
            <Heading textAlign={'center'}>Welcome Back</Heading>
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

        <Button variant={'link'}>
            <Link top={'/forgetpassword'}>Forget password?</Link>
        </Button>

        <Text textAlign={'center'}>
                Don't have an account?{' '}
                <Button variant={'link'}>
                <Link to = '/signup' >Signup</Link>
        </Button>            
        </Text>
        </VStack>
      </form>
    </Container>
  )
}

export default Login
