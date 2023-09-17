import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react'
import InstagramSVG from "../assets/InstagramSVG";
import TwitterSVG from "../assets/TwitterSVG";
import FacebookSVG from "../assets/FacebookSVG";

const Footer = () => {
  return (
    <Box
      bg={"#F0F0F0"}
      color={"black"}
      mt={"200px"}
    >
      <Container maxW={'55%'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={1}>
          <Stack align={'inline-start'} maxW={"500px"}>
            <Text fontSize='18px'>
              LA QUINTA FC
            </Text>      
            <Box as="a" color="#668cad">
             © 2023 La Quinta FC Predio deportivo.
            </Box>  
          </Stack>
          <Stack align={'inline-start'} maxW={"500px"}>      
            <Text fontSize='18px'>
             PARTNERS
            </Text>
            <Box as="a" href={'https://www.gyotechnologies.com'} target="_blank">
                <Text fontSize='14px' color="#668cad">
                    Web Design by:<br/>
                    GYO Technologies.
                </Text>
            </Box>
            <hr/>
            <Box as="a" href={'https://www.gyotechnologies.com'} target="_blank">
                <Text fontSize='14px' color="#668cad">
                    www.gyotechnologies.com
                </Text>
            </Box>
            <hr/>
          </Stack>
          <Stack align={'inline-start'} maxW={"500px"}>
            <Text fontSize='18px'>
              SOCIAL
            </Text>  
            <Box as="a" href={'#'} target="_blank" display={"flex"} mr={2}>
                <TwitterSVG />
                <Text fontSize='14px' color="#668cad">@LaQuintaFC</Text> 
            </Box>
            <hr/>
            <Box as="a" href={'#'} target="_blank" display={"flex"} mr={2}>
                <FacebookSVG />
                <Text fontSize='14px' color="#668cad">@LaQuintaFC</Text> 
            </Box>
            <hr/>
            <Box as="a" href={'#'} target="_blank" display={"flex"}>
                <InstagramSVG mr={10}/>
                <Text fontSize='14px' color="#668cad">@LaQuintaFC</Text> 
            </Box>
            <hr/>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: "#F0F0F0",
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: "#F0F0F0",
            flexGrow: 1,
            ml: 8,
          }}>
        
        </Flex>
      </Box>
    </Box>
  )
}

export default Footer;