import CaptionCarousel from "./Carrousel";
import {Box, Text, Flex, Spacer, Button, Link} from '@chakra-ui/react';
import imagesectionligas from "../assets/imagesectionligas.jpg";
import imagesectionligas1 from "../assets/imagesectionligas1.jpg";
import imagesectionligas2 from "../assets/imagesectionligas2.jpg";
import referis from "../assets/referis.jpeg";
import f11LIGA from "../assets/F11LIGA.jpg";
import { useState } from "react";


function SectionLigas() { 

    const size = [
        {
          width: '45vw', 
          height: '55vh',
          widthMobile: 'full'
        },
    ]
    const borderRadius = [
     {
         size: "10px",
     },
    ]

    const [league, setLeague] = useState({
        title: 'ACG Liga | Temporada 2022',
        link: '',
        descripcion: { 
          desc1: 'INSCRIPCION ABIERTA!! TORNEO EDAD LIBRE!!', 
          desc2: '⚽️☑️TORNEO SENIOR +35', 
          desc3: '🏆🎨🥇Premios inmediatos🔺', 
          desc4: 'Comunícate a nuestros tel 📞 de contacto 📲 1159577511 📲1124083521',
          desc5: 'Via WhatsApp o llamada!! Compartí con nosotros esta PASIÓN'
        },
        cards: [{
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
                }]
            })

    function leagueAGC () {
        setLeague({
            title: 'ACG Liga | Temporada 2022',
            link: '',
            descripcion: { 
              desc1: 'INSCRIPCION ABIERTA!! TORNEO EDAD LIBRE!!', 
              desc2: '⚽️☑️TORNEO SENIOR +35', 
              desc3: '🏆🎨🥇Premios inmediatos🔺', 
              desc4: 'Comunícate a nuestros tel 📞 de contacto 📲 1159577511 📲1124083521',
              desc5: 'Via WhatsApp o llamada!! Compartí con nosotros esta PASIÓN'
            },
            cards: [{
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
                    }]
                })
    }
    
    function leagueF11 () {
        setLeague({
            title: 'F11 La Reserva Apertura 2022',
            link: "https://www.instagram.com/f11lareserva?igsh=enh0dms3NzRoOGt3",
            descripcion: { 
            desc1: 'Torneo de Fútbol 11🏆', 
            desc2: 'Actualmente 26 equipos ⚽', 
            desc3: 'Nuevos desafios, se renueva la ilusión para todos.', 
            desc4: 'Éxitos y nuevamente gracias a cada equipo.',
            desc5: '',
            },
            cards: [{
                    title: '', 
                    text: '',
                    image:
                     f11LIGA, 
                    },
                    { 
                    title: '', 
                    text: '',
                    image:
                     f11LIGA, 
                    },
                    { 
                    title: '', 
                    text: '',
                    image:
                     f11LIGA, 
                    }]
                })
    }

    function amateursReferis () {
        setLeague({
            title: 'Capacitación de arbitros amateurs',
            link: '',
            descripcion: { 
            desc1: 'Clases con instructor', 
            desc2: 'Todos los Sábados', 
            desc3: 'De 10am a 12am', 
            desc4: 'Mas info - Jair Medina', 
            desc5: '📲  1136122715', 
            },
            cards: [{
                    title: '', 
                    text: '',
                    image:
                    referis, 
            },]
        })
    }

    return ( 
        <>
        <Box bg="white" px={6} height={"20vh"} pt={"10px"}>
        <Text fontSize={"45px"} color="#404047" textAlign={"center"} mt={"3%"}>LIGAS Y EVENTOS</Text>
            <Flex justify={'center'}>
                <Button onClick={amateursReferis} variant="outline" mr="10px">Capacitación de arbitros amateurs</Button>
                <Button onClick={leagueAGC} variant="outline" mr="10px">AGC</Button>
                <Button onClick={leagueF11} variant="outline" mr="10px">F11</Button>
            </Flex>
        </Box>
        <Box bg="white" px={6} height={"100%"} pt={{ base: 0, md: '20px' }} mt={{ base: 0, md: '1%' }}>
        <Flex flexDirection={{ base: "column", md: "row" }}>
        <Box width={{ base: "100%", md: "40vw" }} mt={{ base: '3%', md: 0 }}>
        <Box mb={{ base: '5vh', md: '10vh' }} mt={{ base: '5vh', md: '10vh' }}>
                    <CaptionCarousel cards={league.cards} size={size} borderRadius={borderRadius}/> 
                </Box>
            </Box>
                <Spacer />
                <Box
                    width={{ base: "100%", md: "40vw" }}
                    display={'flex'}
                    justifyContent="center"
                    flexDirection={'column'}
                    alignItems="center"
                    textAlign={{ base: "center", md: "left" }}
                >
                  <Text fontSize={"31px"} color="#404047" textAlign={"left"}>
                  {league.title}
                    </Text>
                    <Text fontSize={"14px"} color="#6a859c" textAlign={"left"} mt={"15px"} mb={{ base: '5vh', md: 0 }}>
                    {league.descripcion.desc1}
                        <br/>
                        {league.descripcion.desc2}
                        <br/>

                        {league.descripcion.desc3}
                        <br/>

                        {league.descripcion.desc4}
                        <br/>

                        {league.descripcion.desc5}
                    </Text>
                    
                    {league.link ? (
                        <>
                        <br/>
                        <Link href={league.link} target="_blank" _hover={{ textDecoration: 'none' }}>
                            <Button variant="outline" mr="10px">Click para ir al instagram de F11 La Reserva</Button>
                        </Link>
                        </>
                    ) : (
                        <p></p>
                    )}
                </Box>
            </Flex>
        </Box>
    </>    
  )
}
export default SectionLigas;