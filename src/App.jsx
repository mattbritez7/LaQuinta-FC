import Footer from './components/Footer.jsx';
import Nav from './components/Nav.jsx';
import ContactUs from './components/ContactUs.jsx';
import SectionInfo from './components/SectionInfo.jsx';
import SectionLigas from './components/SectionLigas.jsx';
import Window from './components/Window.jsx';
import SectionValues from './components/SectionValues.jsx';
import MisionsValues from './components/Misions&Values.jsx';

function App() {

  return ( 
    <>
      <Nav />
      <Window />
      <SectionInfo />
      <SectionLigas />
      <SectionValues />
      <MisionsValues />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App;