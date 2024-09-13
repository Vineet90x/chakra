import { Heading, Stack, VStack,Text, Button ,Box} from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {

const videosArr=[
    "https://www.youtube.com/embed/IgkngRoszq8?autoplay=1",
    "https://www.youtube.com/embed/jCYan-M02sk?autoplay=1",
    "https://www.youtube.com/embed/g5MtQueNJaU?autoplay=1",
    "https://www.youtube.com/embed/u7YR3dHIOhI?autoplay=1",
    "https://www.youtube.com/embed/-QXXs1DUrd4?autoplay=1", 
]

// const videosTitle=[
//    "Omen Gameplay",
//     "Raze Gameplay",
//     "Sage Gameplay",
//     "Vyas Gameplay",
//     "Breach Gameplay",
//  ]

const [videoSrc,setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack 
    direction={['column','row']}
    h={'100vh'}
    mt={['50px','40px']}>
    <VStack w={'full'}>
    <Box 
        width={['300', '800']} // Responsive width for mobile, tablet, and desktop
        height={['200' , '500']}   // Responsive height for mobile, tablet, and deskto
        overflow={'hidden'}      >         // Ensures proper scaling
    <iframe
    title='videos'
    src={videoSrc}
    allow="accelerometer; autoplay;"
    allowFullScreen
    >   
    </iframe> 
    </Box>
    <VStack alignItems={'flex-start'} p={'8'} w={'full'} >
    <Heading>Title</Heading>
    <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing.
    </Text>
    </VStack>
    </VStack>
    <VStack
    w={['full','xl']}
    alignItems={'stretch'} 
    p='8' 
    spacing={'8'}
    overflowY={'auto'}
    >
    
    {
    videosArr.map((item, index) => (
    <Button 
      variant={'ghost'} 
      colorScheme={'purple'} 
      onClick={() => setVideoSrc(item)}
    >
      Video {index + 1}
    </Button>
  ))
}
    </VStack>
    </Stack>
  )
}

export default Videos
