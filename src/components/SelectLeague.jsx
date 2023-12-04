import { Select, Flex } from '@chakra-ui/react';

const SelectLeague = ({selectedLeague, setSelectedLeague}) => {
  
  
  const handleSelectChange = (event) => {
    setSelectedLeague(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
    <Flex
      height={'100px'} 
      width={"100%"} 
      id='#InformativeTable'
      justifyContent="center"
      alignItems="center"
    >
      <Select 
          placeholder='Elegir Liga' 
          width={'20%'}
          value={selectedLeague}  // Asigna el valor seleccionado al estado
          onChange={handleSelectChange}  // Maneja el cambio de selección
        >
        <option value='clubs1'>Liga 1</option>
        <option value='clubs2'>Liga 2</option>
        <option value='clubs3'>Liga 3</option>
     </Select>
    </Flex>
    </>
  )
}

export default SelectLeague