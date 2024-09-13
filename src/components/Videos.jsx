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

    mt={['50px','60px']}>
    <VStack w={'full'}>   
    <Box 
        w={'full'}
        position="relative" 
        paddingBottom="56.25%"  
        height={0}
        overflow="hidden"
        ml={['0','20']}
        mt={['4','5']}
      >
        <iframe
          title="videos"
          src={videoSrc}
          allow="accelerometer; autoplay;"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "0"
          }}
        ></iframe>
      </Box>
     
    <VStack alignItems={'flex-start'} p={'8'} w={'full'} >
    <Heading>Title</Heading>
    <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae hic distinctio maxime consectetur qui nesciunt explicabo ex nulla dolorem assumenda eos, quidem architecto tempora quo voluptate cum ab! Aspernatur?
    </Text>
    </VStack>
    </VStack>

    <VStack
    w={['full','xl']}
    alignItems={['center','stretch']} 
    p='8' 
    spacing={'8'}
    mt={['0','20']}
    >
    {
    videosArr.map((item, index) => (
    <Button 
      variant={'ghost'} 
      colorScheme={'purple'} 
      onClick={() => setVideoSrc(item)}
      overflow="hidden"
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
