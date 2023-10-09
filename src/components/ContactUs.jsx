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
    Spacer,
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
      <>
  
            <Box textAlign={"center"}
             bg="#02054B"
             color="white"
             maxW="100%">
              <Flex>
              
                  <Box width={"40vw"}>
                    <Box m={10} color="white" ml={"55px"}>
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
                    </Box>
                  </Box>
                  <Spacer/>  
                                <VStack spacing={3} textAlign={"start"} justifyContent={"center"} width={"40vw"}  alignItems={"center"}>
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
                       
      </Flex>    
            </Box>
       
          <GoogleMap />
          </>
   )
 }