import Navbar from "./Navbar";
import './Stylesheets/App.css'
 
 
import Menu from "./Pages/Menu";
 
import About from "./Pages/About";
import Hero from "./Pages/Hero";
import Footer from "./Pages/Footer";
 

function App() {
  return ( <>
   <Navbar/>
   <Hero />
   <About />

   <Menu />
   <Footer />
 
    </>
  )
}

export default App;
