import { TableContainer, Table, Thead, Tr, Th, Tfoot, Tbody, Td, Text} from '@chakra-ui/react'
  
export default function DinamicTable({tableData, boolean}) {

    return (
        <>
            <TableContainer 
                p="30px" 
                m="25px" 
                border={'1px solid #00BFFF'} 
                textAlign={'center'} 
                borderTop="4px solid #2e9dff" 
                borderRadius="5px" 
                bg={'white'} mt={'5%'}
            >    
            <Text fontSize={'18px'} mb={'20px'}><b>{tableData[0]?.tableName}</b></Text>
                <Table width={'20%'}>
                    <Thead borderTop="1px solid black"> 
                    <Tr>
                        <Th fontSize={'18px'}><b>Jugador</b></Th>
                        <Th fontSize={'18px'}><b>Equipo</b></Th>
                        {
                            boolean ? 
                            <Th fontSize={'18px'}><b>Razon</b></Th>
                            :
                            <Th fontSize={'18px'}><b>Goles</b></Th>
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