import { Box, Flex, Spacer, Text } from "@chakra-ui/react";


const MisionsValues = () => {

  return (
    <>
    <Flex justifyContent="center" flexDirection={{ base: "column", md: "row" }} alignItems={'center'}>      
    <Box mt={'20px'} width={{ base: "90%", md: "47%" }} height={'110%'} bg={'#00ac31'} ml={{ base: 0, md: "2%" }}>
      <Box>
      <Text fontSize={'32px'} color={'white'} margin={'10px'}>Nuestra Visión</Text>
      <Text fontSize={'16px'} color={'white'} margin={'10px'}>Queremos que todos los jugadores amateurs 
      <br/>puedan encontrar siempre canchas en óptimas condiciones  <br/> para que el balón nunca se detenga; que puedan ampliar su círculo de amigos y camaradas,  <br/>mientras contribuyen al crecimiento de la comunidad.</Text>
      </Box>
      </Box>
      <Spacer/>
      <Box mt={'20px'} height={'110%'} width={{ base: "90%", md: "47%" }} bg={'#2e9dff'} mr={{ base: 0, md: "2%" }}>
      <Box>
      <Text fontSize={'32px'} color={'white'} margin={'10px'}>Nuestros Valores</Text>
      <Text fontSize={'16px'} color={'white'} margin={'10px'}>
        La amistad y la camaradería
        <br/>
        El respeto, la integración y los buenas modales
        <br/>
        La honestidad y el compromiso con tus pares
        <br/>
        El juego limpio que preserva la integridad física.
        </Text>
      </Box>
      </Box>
      </Flex>
    </>
  )
};

export default MisionsValues;