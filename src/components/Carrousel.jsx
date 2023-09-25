import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import CampoDeFutbol from '../assets/Campodefutbol.jpg';
import CampoDeFutbol2 from '../assets/Campodefutbol2.jpg';
import CampoDeFutbol3 from '../assets/Campodefutbol3.jpg';
import CampoDeFutbol4 from '../assets/Campodefutbol4.jpeg';

import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 200,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: '"Sigue trabajando incluso cuando nadie está mirando".', 
      text: 'Alex Morgan',
      image:
        CampoDeFutbol,
    },
    {
      
      title: '"Toqué a Messi para asegurarme de que es un ser humano".',
      text: 'Gianluigi Buffon',
      image:
      CampoDeFutbol2,
    },
    {
      title: '"Sin la ayuda de mis compañeros no sería nada de nada".', 
      text: 'Leo Messi',
      image:
      CampoDeFutbol3,
    },
    {
      title: '"Todos mis héroes fueron jugadores de fútbol".',
      text: '‍Zlatan Ibrahimovic',
      image:
      CampoDeFutbol4,
    },
  ]

  return (
    <Box position={'relative'} height={'85vh'} width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            width={"1500px"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                width={1000}
                maxW={'lg'}
                position="absolute"
                top="70%"
                transform="translate(0, -50%)">
                <Heading color="white" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} width={1000} textAlign={"center"}>
                  {card.title}
                </Heading>
                <Text fontSize={"30px"} color="#fd0505" width={1000}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}