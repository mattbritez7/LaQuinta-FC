import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Text} from '@chakra-ui/react'
  
export default function DinamicTableSoccerField({tableData, boolean }) {

    return (
        <>
         <TableContainer 
            p={{base: 0, md: "30px" }} 
            m={{base: 0, md: "25px" }} 
            ml={{base: '5px', md: 0 }} 
            border={'1px solid #00BFFF'} 
            textAlign={'center'} 
            bg={'white'} 
            borderTop="4px solid #2e9dff" 
            borderRadius="5px" 
            mt={'5%'}
            width={{ base: '98%', md: '27%' }}
        >  
         <Text fontSize={'18px'} mb={'20px'} mt={{base: '16px', md: 0 }}><b>{tableData[0]?.tableName}</b></Text>
                <Table width={{ base: '90%', md: '20%' }}>
                  <Thead borderTop="1px solid black"> 
                    <Tr>
                        <Th fontSize={{base: '16px', md: "18px" }}><b>Equipo 1</b></Th>
                        {
                            boolean ?  
                            <Th fontSize={{base: '16px', md: "18px" }}><b>Resultado</b></Th>
                            : 
                            <Th fontSize={{base: '16px', md: "18px" }}><b>Fecha</b></Th>
                        }                  
                        <Th fontSize={{base: '16px', md: "18px" }}><b>Equipo 2</b></Th>
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