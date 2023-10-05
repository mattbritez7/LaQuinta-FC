import CaptionCarousel from "./Carrousel";
import {Box, Text, Flex, Spacer} from '@chakra-ui/react';
import imagesectionligas from "../assets/imagesectionligas.jpg";
import imagesectionligas1 from "../assets/imagesectionligas1.jpg";
import imagesectionligas2 from "../assets/imagesectionligas2.jpg";


function SectionLigas() { 
    const cards = [
        { 
            title: '', 
            text: '',
            image:
            imagesectionligas, 
        },
        { 
            title: '', 
            text: '',
            image:
            imagesectionligas1, 
        },
        { 
            title: '', 
            text: '',
            image:
            imagesectionligas2, 
        },
    ]
    const size = [
        {
          width: '620px', 
          height: '400px',
        },
    ]
     const borderRadius = [
     {
         size: "10px",
     },
    ]

    return ( 
        <>
        <Box bg="white" px={6} height={"115vh"} pt={"20px"}>
             <Flex>
            <Box width={"40vw"} ml={"40px"}>
                <Box>
                    <CaptionCarousel cards={cards} size={size} borderRadius={borderRadius}/> 
                </Box>
            </Box>
                <Spacer />
                <Box width={"40vw"} ml={"25px"} alignItems={"center"}>
                  <Text fontSize={"31px"} color="#404047" textAlign={"left"} mt={"15px"}>
                    ACG Liga | Temporada 2022
                    </Text>
                    <Text fontSize={"14px"} color="#6a859c" textAlign={"left"} mt={"15px"}>
                        INSCRIPCION ABIERTA!! TORNEO EDAD LIBRE!!
                        <br/>
                        ⚽️☑️TORNEO SENIOR +35
                        <br/>

                        🏆🎨🥇Premios inmediatos🔺
                        <br/>

                        Comunícate a nuestros tel 📞 de contacto 📲 1159577511 📲1124083521
                        <br/>

                        Via WhatsApp o llamada!! Compartí con nosotros esta PASIÓN
                    </Text>
                </Box>
            </Flex>
        </Box>
        </>    
  )
}
export default SectionLigas;