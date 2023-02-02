import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route, Form } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/card';
import PrivacyAndPolicy from './components/PrivacyAndPolicy';
import Form1 from './components/Form1';
import Formpractice from './PracticeComponent/Formpratice';
import Login from './PracticeComponent/Login';
import Heroheader from './PracticeComponent/Heroheader';
import Register from './PracticeComponent/Register';
import Headerpage from './PracticeComponent/pages/header/Headerpage';
import Loginpage from './PracticeComponent/pages/login/Loginpage';
import Registerpage from './PracticeComponent/pages/register/Registerpage';
import Wall from './PracticeComponent/Wall';
import Wallpage from './PracticeComponent/pages/images/Wallpage';
import Bannerpage from './PracticeComponent/pages/Banner/Bannerpage';


function App() {
  return (
    <div className="App">  
    {/* <Heroheader></Heroheader>
    <Login></Login>
    <Register></Register> */}
  {/* <Wall></Wall> */}

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Headerpage></Headerpage>}></Route> 
    <Route path="/login" element={<Loginpage></Loginpage>}></Route>
    <Route path="/register" element={<Registerpage></Registerpage>}></Route>
    <Route path="/Scoreboard" element={<Bannerpage></Bannerpage>}></Route>

    {/* <Route path="/wall" element={<Wallpage></Wallpage>}></Route> */}
    </Routes>
    </BrowserRouter>


    
    </div>
  );
}

export default App;
