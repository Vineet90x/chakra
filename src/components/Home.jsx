import { Box, Image ,Heading, Container, Stack, Text, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/h1.jpg';
import img2 from '../assets/h2.jpg';
import img3 from '../assets/h3.jpg';
import img4 from '../assets/h4.jpg';
import img5 from '../assets/h5.jpg';
import img6 from '../assets/h6.jpg';
import img7 from '../assets/m1.png';

const Home = () => {
  return (
    <Box >
      <MyCarousel />
      <Container 
      maxW={'container.xl'} 
      minH={'100vh'} 
      p={'16'}>
        <Heading 
          textTransform={'uppercase'} 
          py="2" 
          borderBottom={'2px solid'}
          w={"fit-content"}
          m={'auto'}
          >
          Services
        </Heading>

        <Stack
          h='auto'
          p={'4'}
          alignItems={'center'}
          direction={['column','row']}
        >
          <Image src={img7} alt='12' h={['40','400']}/>
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nulla debitis praesentium voluptas laudantium veniam eos consequatur consequuntur cum dolorum doloremque, corporis, nihil nam error soluta maxime dolore porro eligendi dignissimos reprehenderit in quod? Magnam sunt voluptate autem, beatae laboriosam eius reprehenderit mollitia odit suscipit sequi a. Omnis repudiandae iusto id libero exercitationem labore animi consectetur eum cumque, laborum incidunt a consequuntur odit ipsam quibusdam quos earum assumenda tenetur consequatur quis, ab iure magni, quasi magnam. Doloribus sapiente, ea esse, voluptatem animi natus fugiat numquam soluta eius perferendis error voluptas quisquam nisi. Rem numquam porro laborum accusamus commodi, doloremque reprehenderit.
          </Text>
         
        </Stack>
        <HStack  
          h='full'
          mb={10} 
          alignItems={'right'}
          direction={['column','row']}>
          <Button 
            variant='outline'
            size='lg' 

            aligntext={['center', 'flex-end']} 
            pos={'absolute'}
            right={'30%'}
          >
            Know More
          </Button>
        </HStack>
        
      </Container>
    </Box>
  )
}

const headingOptions = {
  pos : "absolute",
  left : "50%",
  top : "50%",
  transform:'translate(-50%,-50%)',
  fontWeight:"bold",
  textTransform:"uppercase",
  textShadow:"2px 2px 4px rgba(0, 0, 0, 0.7)",
  fontFamily:"Poppins, sans-serif",
  padding: '4',
  size: '4xl',
}

const MyCarousel = () => (
  <Carousel 
  
  autoPlay
  infiniteLoop
  interval={2000}
  transitionTime={2000}
  stopOnHover={false}
  showStatus={false}
  showArrows={false}
  showThumbs={false}
  >

    <Box w={'full'} h={'100vh'}>
      <Image src={img1}
          width="full" 
          height="full" 
          objectFit="cover"
          alt="Image 2"/>
      <Heading color = {'white'} {...headingOptions}>Beyond Reality</Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} 
       width="full" 
       height="full" 
       objectFit="cover"
       alt="Image 2"/>
      <Heading color = {'white'} {...headingOptions}>Gaming Redefined</Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3}
        width="full" 
        height="full" 
       objectFit="cover"
       alt="Image 2"/>
      <Heading color = {'white'} {...headingOptions}>Emmersive Experience</Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4}
        width="full" 
        height="full" 
       objectFit="cover"
       alt="Image 2"/>
      <Heading color = {'white'} {...headingOptions}>Level Up Your Game</Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img5}
        width="full" 
        height="full" 
       objectFit="cover"
       alt="Image 2"/>
      <Heading color = {'white'} {...headingOptions}>Fuel Your Passion</Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img6}
        width="full" 
        height="full" 
       objectFit="cover"
       alt="Image 2"/>
      <Heading color = {'white'} {...headingOptions}>Game On</Heading>
    </Box>


  </Carousel>
)
export default Home ;

