import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';


const NavLink = (props) => {
  const { children, to } = props;

  const handleNavigation = (event) => {
    event.preventDefault();
    window.location.href = to;
  };


  return (
    <Box
      as="a"
      px={3}
      py={5}
      mt={{base: 0, md: '20px'}}
      rounded={'md'}
      onClick={handleNavigation}
      fontSize={'18px'}
      bg={'white'}
      zIndex={999}  
    _hover={{ cursor: 'pointer' }}
    >
      {children}
    </Box>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const LinksHome = [
    { text: 'Torneos', url: '/#/stats' }
  ];

  const LinksStats = [
    { text: 'Home', url: '/' },
    { text: 'Tablero informativo', url: '/#/#InformativeTable' },
  ];

  return (
    <>
      <Box bg={useColorModeValue('rgba(0, 0, 0, 0)')} px={6} height={"90px"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
           <Box mt={{base: '7%', md: '1%'}}>
            <img src="https://uploads-ssl.webflow.com/631148da51884ca834c1d47c/6336df61918a105a4197b13c_Logo%20vector%20La%20Quinta%20FC.svg" loading="lazy" width="70" alt="Logo La Quinta"/>
          </Box>
          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {location.pathname === '/' ? LinksHome.map((link) => (
                <NavLink key={link.text}  to={link.url}>{link.text}</NavLink>
              ))
              :
              LinksStats.map((link) => (
                <NavLink key={link.text} to={link.url}>{link.text}</NavLink>
              ))
            }
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} mt={5}>
              {location.pathname === '/' ? LinksHome.map((link) => (
                <NavLink key={link.text} href={link.url}>{link.text}</NavLink>
              )) 
              : 
              LinksStats.map((link) => (
                <NavLink key={link.text} href={link.url}>{link.text}</NavLink>
              ))
            } 
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}