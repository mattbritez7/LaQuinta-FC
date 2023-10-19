import {Box, Text, WrapItem, Flex, Spacer} from '@chakra-ui/react';
import Carrousel from './Carrousel.jsx';
import Section1 from "../assets/section1.jpg";
import Section2 from "../assets/section2.jpeg";
import Section3 from "../assets/section3.jpeg";
import Section4 from "../assets/imagesection.png";
import Section5 from "../assets/imagesection1.jpg";
import Section6 from "../assets/imagesection2.jpg";



export default function SectionInfo() {

    const cards1 = [
        {
          title: '', 
          text: '',
          image:
            Section1,
        },
        {
          
          title: '',
          text: '',
          image:
          Section2,
        },
        {
          title: '', 
          text: '',
          image:
          Section3,
        },
      ]

      const cards2 = [
        {
          title: '', 
          text: '',
          image:
            Section4,
        },
        {
          
          title: '',
          text: '',
          image:
          Section5,
        },
        {
          title: '', 
          text: '',
          image:
          Section6,
        },
      ]
    const size = [
        {
          width: 'auto', 
          height: '300px',
        },
    ]

     const BorderRadius = [
     {
         size: "20px",
     },
   ]

    return ( 
        <>
            <Box bg="#30ad64" px={6} height={"100%"} pt={"20px"} pb={'10%'}>
                <Text fontSize={"30px"} color="#fff" textAlign={"center"}>
                    +15 HECTAREAS DEDICADAS AL FUTBOL
                </Text>
                <Text fontSize={"18px"} color="#e8e8e8" textAlign={"center"} mb={"60px"}>
                    CANCHAS CON MEDIDAS REGLAMENTARIAS
                </Text>
                
                <Flex color='white'>

                <Box width={"40vw"} ml={"30px"}>
                <Box>
                  <Carrousel cards={cards1} size={size} borderRadius={BorderRadius}/> 
                  <Text fontSize={"20px"} color="#e8e8e8" textAlign={"center"}>
                   MANTENIMIENTO PROFESIONAL
                  </Text>
                </Box>
                
                <Text fontSize={"14px"} color="#e8e8e8" textAlign={"center"} mt={"15px"}>
                    Los campos deportivos requieren para su mantenimiento de personas con conocimientos específicos en áreas como el césped, riego, maquinaria, suelos y gerenciamiento. <br/>
                    El complejo deportivo La Quinta cuenta con estos requisitos para brindar la mejor experiencia del Fútbol.
                </Text>
                </Box>  
                <Spacer />
                <Box width={"40vw"} mr={"30px"}>
                <Box>
                <Carrousel cards={cards2} size={size} borderRadius={BorderRadius}/>
                <Text fontSize={"20px"} color="#e8e8e8" textAlign={"center"}>
                    VESTIDORES, ESTACIONAMIENTO Y BUFFET                
                </Text> 
                </Box>
                <Text fontSize={"14px"} color="#e8e8e8" textAlign={"center"} mt={"15px"}>
                    Las instalaciones de La Quinta FC. cuentan con 2 Vestuarios de capacidad para 100 personas con 22 duchas y servicio de Guardaropa. Estacionamiento propio con capacidad para 400 autos, rodeado de árboles y Posee un amplio Buffet donde podrán refrescarse y recuperar energías después de cada partido.
                </Text>  
                </Box>
                </Flex>
            </Box>
        </>
    );
}