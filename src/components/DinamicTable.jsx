import { TableContainer, Table, Thead, Tr, Th, Tfoot, Tbody, Td} from '@chakra-ui/react'
  
export default function Contact({fencesData}) {
    
    return (
        <>
        <TableContainer>
        {fencesData.map((fences, index) => (
            <>
            <h1 key={index}>{fences.tableName}</h1>
                <Table width={'20%'}>
                    <Thead>
                    <Tr>
                        <Th><b>Jugador</b></Th>
                        <Th><b>Equipo</b></Th>
                        <Th><b>Goles</b></Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>{fences.player}</Td>
                            <Td>{fences.club}</Td>
                            <Td>{fences.goals}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </>
        ))}
            </TableContainer>
        </>
    )
}