import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Text} from '@chakra-ui/react';

const PosicionsTable = ({tableData}) => {

  return (
    <>
    <Text 
        fontSize={"25px"} 
        color={'#6a859c'} 
        textAlign={'center'} 
        pt={"25px"} 
        pb={"25px"} 
        borderTop={'1px solid black'}
      >
        POSICIONAMIENTO
      </Text>
    <TableContainer 
       p={{base: 0, md: "30px" }} 
       m={{base: 0, md: "25px" }} 
       ml={{base: '5px', md: '1%' }} 
       border={'1px solid #00BFFF'}
       bg={'white'} 
       borderTop="4px solid #2e9dff" 
       borderRadius="5px" 
       mt={'5%'}
       width={'98%'}
   >  
    <Text fontSize={'18px'} mb={'20px'} mt={{base: '16px', md: 0 }}><b>{tableData[0]?.tableName}</b></Text>
           <Table width={{base:'90%', md: '100%'}}>
             <Thead borderTop="1px solid black"> 
               <Tr>
                   <Th fontSize={{base: '16px', md: "18px" }}><b>N°</b></Th>
                   <Th fontSize={{base: '16px', md: "18px" }}><b>EQUIPOS</b></Th>
                   <Th fontSize={{base: '16px', md: "18px" }}><b>J</b></Th>              
                   <Th fontSize={{base: '16px', md: "18px" }}><b>G</b></Th>
                   <Th fontSize={{base: '16px', md: "18px" }}><b>P</b></Th>
                   <Th fontSize={{base: '16px', md: "18px" }}><b>GF</b></Th>
                   <Th fontSize={{base: '16px', md: "18px" }}><b>GE</b></Th>
                   <Th fontSize={{base: '16px', md: "18px" }}><b>DG</b></Th>
                   <Th fontSize={{base: '16px', md: "18px" }}><b>PTS</b></Th>
               </Tr>
               </Thead>
               {tableData?.map((data, index) => (
                   <Tbody key={index}>
                       <Tr>
                           <Td>{index + 1}</Td>
                           <Td>{data.club}</Td>
                           <Td>{data.j}</Td>
                           <Td>{data.g}</Td>
                           <Td>{data.p}</Td>
                           <Td>{data.gf}</Td>
                           <Td>{data.ge}</Td>
                           <Td>{data.dg}</Td>
                           <Td>{data.pts}</Td>
                       </Tr>
                   </Tbody>
               ))}
           </Table>
       </TableContainer>
   </>
  )
}

export default PosicionsTable;