import GoogleMaps from "simple-react-google-maps";


const GoogleMap = () => {
  const latitud = -34.8483596;
  const longitud = -58.3573251;

  return (
    <>
      <div>mapa</div>
      <GoogleMaps
        apiKey={import.meta.env.VITE_API_KEY}
        style={{height: "200px", width: "1000px", zindex: "999", borderradius: "15px"}}
        zoom={6}
        center={{lat: latitud, lng: longitud}}
      />
    </>
  )
};

export default GoogleMap;