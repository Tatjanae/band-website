import About from './components/About/About';
import Members from './components/Members/Members';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Members />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App