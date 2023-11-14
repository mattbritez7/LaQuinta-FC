import { TableContainer, Table, Thead, Tr, Th, Tfoot, Tbody, Td} from '@chakra-ui/react'
  
export default function Contact({tableData, boolean}) {

    return (
        <>
        <TableContainer>    
            <h1>{tableData[0]?.tableName}</h1>
                <Table width={'20%'}>
                    <Thead>
                    <Tr>
                        <Th><b>Jugador</b></Th>
                        <Th><b>Equipo</b></Th>
                        {
                            boolean ? 
                            <Th><b>Razon</b></Th>
                            :
                            <Th><b>Goles</b></Th>
                        }
                    </Tr>
                    </Thead>
                {tableData?.map((data, index) => (
                    <Tbody key={index}>
                        <Tr>
                            <Td>{data.player}</Td>
                            <Td>{data.club}</Td>
                            {
                                boolean ? 
                                <Td>{data.reason}</Td>
                                : 
                                <Td>{data.goals}</Td>
                            }
                        </Tr>
                    </Tbody>
                ))}
                </Table>
           
            </TableContainer>
        </>
    )
}