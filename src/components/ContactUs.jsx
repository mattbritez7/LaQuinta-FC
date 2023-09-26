import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react'
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
  import GoogleMap from './GoogleMap';
  
  export default function Contact() {
    return (
      <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="#02054B"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4} textAlign={"center"} mb={"20px"}>
                <Heading>Contactanos</Heading>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Nombre</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Comentario</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="none">
                          <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                            Enviar
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
                          <Box>
                              <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                <VStack pl={0} spacing={3} alignItems="flex-start">
                                  <Button
                                    size="md"
                                    height="48px"
                                    width="200px"
                                    variant="ghost"
                                    color="#DCE2FF"
                                    _hover={{ border: '2px solid #1C6FEB' }}
                                    leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                                    info@laquintafc.com.ar
                                  </Button>
                                  <Button
                                    size="md"
                                    height="48px"
                                    width="200px"
                                    variant="ghost"
                                    color="#DCE2FF"
                                    _hover={{ border: '2px solid #1C6FEB' }}
                                    leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                                    +54 9 11 6228 6543
                                  </Button>
                                  <Button
                                    size="md"
                                    height="48px"
                                    width="200px"
                                    variant="ghost"
                                    color="#DCE2FF"
                                    _hover={{ border: '2px solid #1C6FEB' }}
                                    leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                                    Av. Republica Argentina al 6500, esquina Pedro de Irigoyen
                                  </Button>
                                </VStack>
                              </Box>
                             
                        </Box>
              </Wrap>
            </Box>
          <GoogleMap />
        </Box>
      </Flex>    
    </Container>
   )
 }