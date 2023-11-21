import Navbar from "./Navbar";
import './Stylesheets/App.css'
 
 
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Hero from "./Pages/Hero";
import Footer from "./Pages/Footer";
import Reviews from "./Components/Reviews";

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
