import CaptionCarousel from "./Carrousel";
import CampoDeFutbol from '../assets/Campodefutbol.jpg';
import CampoDeFutbol2 from '../assets/Campodefutbol2.jpg';
import CampoDeFutbol3 from '../assets/Campodefutbol3.jpg';
import CampoDeFutbol4 from '../assets/Campodefutbol4.jpeg';

function Window() { 
    const cards = [
        {
          title: '"Sigue trabajando incluso cuando nadie está mirando".', 
          text: 'Alex Morgan',
          image:
            CampoDeFutbol,
        },
        {
          
          title: '"Toqué a Messi para asegurarme de que es un ser humano".',
          text: 'Gianluigi Buffon',
          image:
          CampoDeFutbol2,
        },
        {
          title: '"Sin la ayuda de mis compañeros no sería nada de nada".', 
          text: 'Leo Messi',
          image:
          CampoDeFutbol3,
        },
        {
          title: '"Todos mis héroes fueron jugadores de fútbol".',
          text: '‍Zlatan Ibrahimovic',
          image:
          CampoDeFutbol4,
        },
      ]
      const size = [
        {
          width: 'full', 
          height: '85vh',
        },
      ]
    
      const borderRadius = [
        {
          size: "none",
        },
      ]
    return ( 
    <>
      <CaptionCarousel cards={cards} size={size} borderRadius={borderRadius}/> 
    </>
  )
}
export default Window;