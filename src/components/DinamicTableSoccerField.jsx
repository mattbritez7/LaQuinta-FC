import { TableContainer, Table, Thead, Tr, Th, Tfoot, Tbody, Td, Text} from '@chakra-ui/react'
  
export default function DinamicTableSoccerField({tableData, boolean }) {

    return (
        <>
         <TableContainer p="30px" m="25px" border={'1px solid #00BFFF'} textAlign={'center'} borderTop="4px solid #2e9dff" borderRadius="5px">  
         <Text fontSize={'18px'} mb={'20px'}><b>{tableData[0]?.tableName}</b></Text>
                <Table width={'20%'}>
                  <Thead borderTop="1px solid black"> 
                    <Tr>
                        <Th fontSize={'18px'}><b>Equipo 1</b></Th>
                        {
                            boolean ?  
                            <Th fontSize={'18px'}><b>Resultado</b></Th>
                            : 
                            <Th fontSize={'18px'}><b>Fecha</b></Th>
                        }                  
                        <Th fontSize={'18px'}><b>Equipo 2</b></Th>
                    </Tr>
                    </Thead>
                    {tableData?.map((data, index) => (
                        <Tbody key={index}>
                            <Tr>
                                <Td textAlign={'center'}>{data.club1}</Td>
                                {
                                    boolean ?  
                                    <Td textAlign={'center'}>{data.result}</Td>
                                    :
                                    <Td textAlign={'center'}>{data.date}</Td>
                                }
                                <Td textAlign={'center'}>{data.club2}</Td>
                            </Tr>
                        </Tbody>
                    ))}
                </Table>
            </TableContainer>
        </>
    )
}