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
  import LogoQuintaSVG from "../assets/LogoQuintaSVG";
  
  const Links = ['Home', 'Nosotros', 'Contacto'];
  
  const NavLink = (props) => {
    const { children } = props;
  
    return (
      <Box
        as="a"
        px={6}
        mt={6}
        py={5}
        rounded={'md'}
        href={'#'}
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
            <Flex alignItems={'center'}>
            <LogoQuintaSVG/>
            </Flex>
            <HStack spacing={8} alignItems={'center'}>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    );
  }
  