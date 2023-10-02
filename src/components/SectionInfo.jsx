import {Box, Text, WrapItem, Flex, Spacer} from '@chakra-ui/react';
import Carrousel from './Carrousel.jsx';
import Section1 from "../assets/section1.jpg";
import Section2 from "../assets/section2.jpeg";
import Section3 from "../assets/section3.jpeg";



export default function SectionInfo() {

    const cards = [
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
            <Box bg="#30ad64" px={6} height={"100vh"} border={"1px solid black"}>
                <Text fontSize={"30px"} color="#fff" textAlign={"center"}>
                    +15 HECTAREAS DEDICADAS AL FUTBOL
                </Text>
                <Text fontSize={"18px"} color="#e8e8e8" textAlign={"center"}>
                    CANCHAS CON MEDIDAS REGLAMENTARIAS
                </Text>
                
                <Flex color='white'>

                <Box width={"40vw"} border={"1px solid black"} ml={"30px"}>
                <Box>
                  <Carrousel cards={cards} size={size} borderRadius={BorderRadius}/> 
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
                <Box width={"40vw"} border={"1px solid black"} mr={"30px"}>
                <Box>
                <Carrousel cards={cards} borderRadius={BorderRadius}/>
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