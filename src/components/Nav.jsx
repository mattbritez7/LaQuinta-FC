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

const Links = [
  { text: 'Home', url: '/' },
  { text: 'Nosotros', url: '#AboutUs' },
  { text: 'Contactanos', url: '#Contactus' },
];

const NavLink = (props) => {
  const { children, href } = props;

  return (
    <Box
      as="a"
      px={6}
      mt={6}
      py={5}
      rounded={'md'}
      href={href}
      fontSize={'18px'}
    >
      {children}
    </Box>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <img src="https://uploads-ssl.webflow.com/631148da51884ca834c1d47c/6336df61918a105a4197b13c_Logo%20vector%20La%20Quinta%20FC.svg" loading="lazy" width="70" alt="Logo La Quinta"/>
          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.text} href={link.url}>{link.text}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.text} href={link.url}>{link.text}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}