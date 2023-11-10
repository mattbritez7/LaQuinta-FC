import { TableContainer, Table, Thead, Tr, Th, Tfoot, Tbody, Td} from '@chakra-ui/react'
  
export default function Contact({ tableName, player, club, goals }) {

    return (
        <>
        <TableContainer>
        <h1>{tableName}</h1>
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
                    <Td>{player}</Td>
                    <Td>{club}</Td>
                    <Td>{goals}</Td>
                </Tr>
                </Tbody>
            </Table>
            </TableContainer>
        </>
    )
}