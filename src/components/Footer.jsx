import { Box, Button, Heading, HStack, Input, Stack, VStack ,Text} from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineSend } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <Box 
      bgColor={'blackAlpha.900'} 
      
      p={'10'} 
      color={'white'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} 
            w={'full'} 
            px={'3'}>
                <Heading 
                size='md' 
                textTransform={'uppercase'}
                textAlign={['center','left']}>
                    Subscribe to get updates
                </Heading>
                <HStack
                borderBottom = {'2px solid white'}
                py="2"
                >
                    <Input 
                    placeholder='Enter Email Here..' border={'none'} 
                    borderRadius={'10'}
                    focusBorderColor={'none'}
                    />
                    <Button
                    p={'0'}
                    colorScheme={'purple'}
                    variant={'ghost'}
                    borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={'20'}/>
                    </Button>
                </HStack>
            </VStack>

            <VStack 
            w={'full'}
            borderLeft = {['none','1px solid white']}
            borderRight = {['none','1px solid white']}
            >
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                MP4forU
                </Heading>
                <Text>All Rights Reserved</Text>
            </VStack>

            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>

                <HStack>
                <Button varient={'link'} colorScheme={'white'}>
                    <Link to = "https://www.youtube.com/channel/UC0cOqC8C-3S7WO5NNlm7yGQ">
                    <AiFillYoutube color='white'/>
                    </Link>
                </Button>

                <Button varient={'link'} colorScheme={'white'}>
                    <Link to = "https://www.linkedin.com/in/vsa2">
                    <AiFillInstagram color='white'/>
                    </Link>
                </Button>

                <Button varient={'link'} colorScheme={'white'}>
                    <Link to = "https://github.com/Vineet90x">
                    <AiFillGithub color='white'/>
                    </Link>
                </Button>
                </HStack>
                
            </VStack>
        </Stack>
      </Box>
    </div>
  )
}

export default Footer
