import { TableContainer, Table, Thead, Tr, Th, Tfoot, Tbody, Td, Text} from '@chakra-ui/react'
  
export default function DinamicTable({tableData, boolean}) {

    return (
        <>
            <TableContainer 
                p={{base: 0, md: "30px" }} 
                m={{base: 0, md: "25px" }} 
                border={'1px solid #00BFFF'}
                ml={{base: '5px', md: 0 }} 
                textAlign={'center'} 
                borderTop="4px solid #2e9dff" 
                borderRadius="5px" 
                bg={'white'} 
                mt={'5%'}
                width={{ base: '98%', md: '27%' }}
            >    
            <Text fontSize={{base: '16px', md: "18px" }} mb={'20px'} mt={{base: '16px', md: 0 }}><b>{tableData[0]?.tableName}</b></Text>
                <Table>
                    <Thead borderTop="1px solid black"> 
                    <Tr>
                        <Th fontSize={{base: '16px', md: "18px" }}><b>Jugador</b></Th>
                        <Th fontSize={{base: '16px', md: "18px" }}><b>Equipo</b></Th>
                        {
                            boolean ? 
                            <Th fontSize={{base: '16px', md: "18px" }}><b>Razon</b></Th>
                            :
                            <Th fontSize={{base: '16px', md: "18px" }}><b>Cantidad</b></Th>
                        }
                    </Tr>
                    </Thead>
                {tableData?.map((data, index) => (
                    <Tbody key={index} color={'#6a859c'}>
                        <Tr>
                            <Td>{data.player}</Td>
                            <Td>{data.club}</Td>
                            {
                                boolean ? 
                                <Td>{data.reason}</Td>
                                : 
                                <Td>{data.count}</Td>
                            }
                        </Tr>
                    </Tbody>
                ))}
                </Table>
            </TableContainer>
        </>
    )
}