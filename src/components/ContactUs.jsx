import {
    Flex,
    Box,
    Button,
    VStack,
    FormControl,
    Input,
    InputGroup,
    Textarea,
    Text,
  } from '@chakra-ui/react'
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
  } from 'react-icons/md';
  import GoogleMap from './GoogleMap';
  import CampoDeFutbol from '../assets/Campodefutbol.jpg';
  
  export default function Contact() {

    return (
      <>
            <Box 
              textAlign={"center"}
              background={`linear-gradient(rgba(0, 0, 0, 0.69), rgba(0, 0, 0, 0.69)), url(${CampoDeFutbol})`}
              backgroundSize="cover"
              backgroundAttachment="fixed"
              maxW="100%"
              height={{ base: '100%', md: '50%' }}
            >
              <Text color='white' fontSize={'24px'} pt={'20px'}>CONTACTANOS</Text>
              <Flex  direction={{ base: 'column', md: 'row' }} justify={'center'}>
                  <Box 
                    width={{ base: '100%', md: '50%' }}
                  >
                        <FormControl id="name" >
                          <InputGroup borderColor="#E0E1E7" display="flex" justifyContent="center">
                            <Input type="text" size="md" placeholder="Nombre" mt={"25px"} width={'80%'} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <InputGroup borderColor="#E0E1E7" display="flex" justifyContent="center">
                            <Input type="text" size="md" placeholder="Email" mt={"25px"} width={'80%'} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <Textarea
                            borderColor="gray.300"
                            mt={"25px"}
                            width={'80%'}
                            placeholder="Comentario"
                          />
                        </FormControl>
                        <FormControl id="name" float="none">
                          <Button variant="solid" bg="#0D74FF" color="white" mt={"25px"}>
                            Enviar
                          </Button>
                        </FormControl>
                    </Box>
                                <VStack spacing={3} textAlign={"start"} justifyContent={"center"} width={{ base: '100%', md: '50%' }} alignItems={{ base: 'center' }} mt={"25px"}>
                                  <Button
                                    size="md"
                                    height="48px"
                                    width="auto"
                                    variant="ghost"
                                    color="#DCE2FF"
                                    _hover={{ border: '2px solid #1C6FEB' }}
                                    leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                                    info@laquintafc.com.ar
                                  </Button>
                                  <Button
                                    size="md"
                                    height="48px"
                                    width="auto"
                                    variant="ghost"
                                    color="#DCE2FF"
                                    _hover={{ border: '2px solid #1C6FEB' }}
                                    leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                                    +54 9 11 6228 6543
                                  </Button>
                                  <Button
                                    size="md"
                                    height="48px"
                                    width="auto"
                                    mb={'20%'}
                                    variant="ghost"
                                    color="#DCE2FF"
                                    _hover={{ border: '2px solid #1C6FEB' }}
                                    leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                                    Av. Republica Argentina al 6500, esquina Pedro de Irigoyen
                                  </Button>
                                </VStack>           
                            </Flex>    
                      {/* <GoogleMap /> */}
                    </Box>
          </>
   )
 }