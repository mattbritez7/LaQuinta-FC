import Footer from './components/Footer.jsx';
import Nav from './components/Nav.jsx';
import ContactUs from './components/ContactUs.jsx';
import SectionInfo from './components/SectionInfo.jsx';
import SectionLigas from './components/SectionLigas.jsx';
import Window from './components/Window.jsx';
import SectionValues from './components/SectionValues.jsx';

function App() {

  return ( 
    <>
      <Nav />
      <Window />
      <SectionInfo />
      <SectionLigas />
      <SectionValues />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App;