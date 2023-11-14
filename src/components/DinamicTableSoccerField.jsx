import { TableContainer, Table, Thead, Tr, Th, Tfoot, Tbody, Td} from '@chakra-ui/react'
  
export default function Contact({tableData, boolean }) {

    return (
        <>
        <TableContainer>    
            <h1>{tableData[0]?.tableName}</h1>
                <Table width={'20%'}>
                    <Thead>
                    <Tr>
                        <Th><b>Equipo 1</b></Th>
                        {
                            boolean ?  
                            <Th><b>Resultado</b></Th>
                            : 
                            <Th><b>Fecha</b></Th>
                        }                  
                        <Th><b>Equipo 2</b></Th>
                    </Tr>
                    </Thead>
                    {tableData?.map((data, index) => (
                        <Tbody key={index}>
                            <Tr>
                                <Td>{data.club1}</Td>
                                {
                                    boolean ?  
                                    <Td>{data.result}</Td>
                                    :
                                    <Td>{data.date}</Td>
                                }
                                <Td>{data.club2}</Td>
                            </Tr>
                        </Tbody>
                    ))}
                </Table>
            </TableContainer>
        </>
    )
}