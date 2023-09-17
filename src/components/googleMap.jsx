import GoogleMaps from "simple-react-google-maps";

const GoogleMap = () => {
  const latitud = -34.8483596;
  const longitud = -58.3573251;

  return (
    <>
      <div>mapa</div>
      <GoogleMaps
        apiKey={"Your Google Api Key"}
        style={{height: "400px", width: "1000px"}}
        zoom={6}
        center={{lat: latitud, lng: longitud}}
      />
    </>
  )
};

export default GoogleMap;