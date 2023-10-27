import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Products from './components/Products';
import Email from './components/Email';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="bg-[#0a192f]">
     <Navbar/>
     <Home/>
     <About/>
     <Services/>
     <Products/>
     <Email/>
     <Footer/>
    </div>
  );
}

export default App;
