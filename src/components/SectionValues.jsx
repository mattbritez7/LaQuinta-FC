import { Box, Flex, Text } from "@chakra-ui/react";
import CampoDeFutbol5 from '../assets/Campodefutbol5.jpg'

const SectionValues = () => {
    
    return (
      <>
         <Box 
            display={'flex'}
            justifyContent="center"
            alignItems="center"
            textAlign={"center"}
            background={`linear-gradient(rgba(0, 0, 0, 0.69), rgba(0, 0, 0, 0.69)), url(${CampoDeFutbol5})`}
            backgroundSize="cover"
            backgroundAttachment="fixed"
            maxW="100%"
            height={'30vh'}
        >
        <Text fontSize={'32px'} color="white">9 CANCHAS DE FÚTBOL DE CESPED NATURAL CON CUIDADO <br /> PROFECIONAL Y MEDIDAS REGLAMENTARIAS.</Text>
        </Box>
        <Box 
            display={'flex'}
            justifyContent="center"
            alignItems="center"
            textAlign={"center"}
            background={'white'}
            maxW="100%"
            height={'10vh'}
        >
        <Text fontSize={'32px'} color="black" fontWeight={'700'}>NUESTROS PILARES</Text>
        </Box>
        <Flex justifyContent="space-between" mb={'5%'}  flexDirection={{ base: 'column', md: 'row' }}>
            <Box flex="1" margin="0 1% 0 10%">
            <img src="https://uploads-ssl.webflow.com/631148da51884ca834c1d47c/6324960bbd8cb0ff38190bc0_Group.svg" width='45%' loading="lazy" alt="Medio ambiente" />
                <Text fontSize={'16px'} color="black">Medio ambiente</Text>
            </Box>
            <Box flex="1" margin="0 1%">
            <img src="https://uploads-ssl.webflow.com/631148da51884ca834c1d47c/6324960b9a3f628ed9d4b206_Group%20302.svg" width='45%' loading="lazy" alt="Amor por el Fútbol" />
                <Text fontSize={'16px'} color="black">Amor por el Fútbol</Text>
            </Box>
            <Box flex="1" margin="0 1%">
            <img src="https://uploads-ssl.webflow.com/631148da51884ca834c1d47c/6324960b9a3f628ed9d4b206_Group%20302.svg" width='45%' loading="lazy" alt="Compañerismo" />
                <Text fontSize={'16px'} color="#6a859c">Compañerismo</Text>
            </Box>
            <Box flex="1" margin="0 1%">
            <img src="https://uploads-ssl.webflow.com/631148da51884ca834c1d47c/6324960b311a3a48fab186c6_Group%20300.svg" width='45%' loading="lazy" alt="Juego limpio" />
                <Text fontSize={'16px'} color="black">Juego limpio</Text>
            </Box>
        </Flex>
      </>
    )
  };
  
  export default SectionValues;