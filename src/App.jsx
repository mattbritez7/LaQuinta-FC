import Footer from './components/Footer.jsx';
import Nav from './components/Nav.jsx';
import ContactUs from './components/ContactUs.jsx';
import SectionInfo from './components/SectionInfo.jsx';
import SectionLigas from './components/SectionLigas.jsx';
import Window from './components/Window.jsx';

function App() {

  return ( 
    <>
      <Nav />
      <Window />
      <SectionInfo />
      <SectionLigas />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App;