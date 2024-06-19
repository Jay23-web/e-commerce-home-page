import logo from './logo.svg';
import './App.css';
import { FiveG } from '@mui/icons-material';
import Navigation from './customer/components/navigation/Navigation';
import { HomePage } from './customer/Pages/Homepage/HomePage';
import Footer from './customer/components/Footer/Footer';


function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
      <HomePage/>
      <Footer/>
      </div>
      
    
     
        </div>
  );
}

export default App;
