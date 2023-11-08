import { Box, Flex } from "@chakra-ui/react";
import GoogleMaps from "simple-react-google-maps";


const GoogleMap = () => {
  const latitud = -34.8483596;
  const longitud = -58.3573251;

  return (
    <>
      <Box mt={'20px'}>
        <Flex justify={'center'}>
          <GoogleMaps
            apiKey={import.meta.env.VITE_API_KEY_GOOGLE}
            style={{height: "200px", width: "1000px", zindex: "999", borderradius: "15px", alingItems: "center"}}
            zoom={6}
            center={{lat: latitud, lng: longitud}}
          />
        </Flex>
      </Box>
    </>
  )
};

export default GoogleMap;