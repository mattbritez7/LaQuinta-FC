import { TableContainer, Table, Thead, Tr, Th, Tfoot, Tbody, Td} from '@chakra-ui/react'
  
export default function Contact({goleadores}) {
    
    return (
        <>
        <TableContainer>
        <h1>{goleadores.tableName}</h1>
            <Table width={'20%'}>
                <Thead>
                <Tr>
                    <Th><b>Jugador</b></Th>
                    <Th><b>Equipo</b></Th>
                    <Th><b>Goles</b></Th>
                </Tr>
                </Thead>
                <Tbody>
                {goleadores.map((goleador, index) => (
                    <Tr key={index}>
                        <Td>{goleador.player}</Td>
                        <Td>{goleador.club}</Td>
                        <Td>{goleador.goals}</Td>
                    </Tr>
                    ))}
                </Tbody>
            </Table>
            </TableContainer>
        </>
    )
}