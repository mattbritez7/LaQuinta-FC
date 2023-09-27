import {Box, Text, WrapItem,} from '@chakra-ui/react';

export default function SectionInfo() {

    return ( 
        <>
            <Box bg="#30ad64" px={6} height={"100vh"}>
                <Text fontSize={"30px"} color="#fff" textAlign={"center"}>
                    +15 HECTAREAS DEDICADAS AL FUTBOL
                </Text>
                <Text fontSize={"18px"} color="#e8e8e8" textAlign={"center"}>
                    CANCHAS CON MEDIDAS REGLAMENTARIAS
                </Text>
                
                <WrapItem>
                <Box width={"50vw"}>
                <Text fontSize={"18px"} color="#e8e8e8" textAlign={"center"}>
                Los campos deportivos requieren para su mantenimiento de personas con conocimientos específicos en áreas como el césped, riego, maquinaria, suelos y gerenciamiento.
El complejo deportivo La Quinta cuenta con estos requisitos para brindar la mejor experiencia del Fútbol.
                </Text>
                </Box>
                </WrapItem>
                <WrapItem>
                <Box width={"50vw"}>
                <Text fontSize={"18px"} color="#e8e8e8" textAlign={"center"}>
                Las instalaciones de La Quinta FC. cuentan con 2 Vestuarios de capacidad para 100 personas con 22 duchas y servicio de Guardaropa. Estacionamiento propio con capacidad para 400 autos, rodeado de árboles y Posee un amplio Buffet donde podrán refrescarse y recuperar energías después de cada partido.


                </Text>
                
                </Box>
                </WrapItem>
            </Box>
        </>
    );
}