import React, { useEffect, useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

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
};

export default function CaptionCarousel({ cards, size, borderRadius }) {
  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  useEffect(() => {
    // Check if slider exists before accessing its methods
    if (slider) {
      slider.slickNext(); // You can also use slickPrev or other methods here if needed
    }
  }, [slider]);

  console.log(cards)

  return (
    <Box
      position={'relative'}
      height={size[0].height}
      width={{ base: size[0].widthMobile, md: size[0].width }}
      overflow={'hidden'}
      borderRadius={borderRadius[0].size}
    >
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
        onClick={() => slider?.slickPrev()}
      >
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
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            height="85vh"
            backgroundImage={`linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                width={'100%'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
                pr={'6%'}
              >
                <Heading
                  color="white"
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  textAlign={'center'}
                >
                  {card.title}
                </Heading>
                <Text fontSize={'30px'} color="#fd0505" textAlign={'center'}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}