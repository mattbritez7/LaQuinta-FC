import { Select, Flex } from '@chakra-ui/react';

const SelectLeague = () => {
  return (
    <>
    <Flex
      height={'100px'} 
      width={"100%"} 
      id='#InformativeTable'
      justifyContent="center"
      alignItems="center"
    >
        <Select placeholder='Elegir Liga' width={'20%'}>
            <option value='Liga 1'>Liga 1</option>
            <option value='Liga 2'>Liga 2</option>
            <option value='Liga 3'>Liga 3</option>
        </Select>
    </Flex>
    </>
  )
}

export default SelectLeague