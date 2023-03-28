import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './index.css';
import About from "./About";
import Contact from "./Contact";
import ShopWithUs from "./ShopWithUs";
import Schedule from "./Schedule";
import { useState } from "react";

import YourAccount from "./YourAccount";



function App() { 
    const [show, setShow] = useState(false);
    const handleClick = event => {
     //👇️ toggle shown state
    setShow(current => !current);
  }


    return (
      <div >
        <Router>
  <nav>
    <Link to = '/about' className='link'>About Us</Link>
    <Link to = '/'className='link'>Shop</Link>
    <Link to = '/schedule'className='link'>Schedule</Link>
    <Link to = '/contact'className='link'>Contact Us</Link>
    <Link to = '/youraccount'className='link'>Your Account</Link>

    
   
    <div>
        <div className="hamburgerIcon">
        <h2>Yoga Shala</h2>
        <img className="bars" src={'https://img.icons8.com/external-linear-outline-icons-papa-vector/512/external-Menu-interface-linear-outline-icons-papa-vector-6.png'} alt="bars"
        onClick={handleClick}/>
        </div>
  {show && (    
<ul className="mobileMenu">
    <li> <Link to = '/about' className='linkMobile'>About</Link></li>
    <li>  <Link to = '/'className='linkMobile'>Shop</Link></li>
    <li><Link to = '/schedule'className='linkMobile'>Schedule</Link></li>
    <li><Link to = '/contact'className='linkMobile'>Contact</Link></li>
    <li><Link to = '/youraccount'className='linkMobile'>Your Account</Link></li>
</ul>)}
</div>
  </nav>
  
  <Routes>
    <Route path = '/about' element = {<About/>}/>
    <Route path = '/' element = {<ShopWithUs/>}/>
    <Route path = '/schedule'element = {<Schedule/>}/>
    <Route path = '/contact' element = {<Contact/>}/>
    <Route path = '/youraccount' element = {<YourAccount/>}/>
    
  </Routes>
  
        </Router>
      </div>
    );
  }
  
  export default App;
  