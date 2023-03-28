import { useSelector } from "react-redux";
import { getToTalPrice } from "../Redux/cartSlice";
//import {cartItem} from "./CartItem";
import { useState } from "react";
import Modal from "./CartModal";





const Cart =()=>{
 // const  cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getToTalPrice);
 

   const [show, setShow] = useState(false);
   //const handleClick = event => {
    // 👇️ toggle shown state
    //setIsShown(current => !current);
  //};
  const handleClick = event => {
    // 👇️ only show element on click
   setShow(true);
  };
  
    return(<div>
       <img onClick={handleClick} alt="bag" className="bagIcon" src={'https://cdn-icons-png.flaticon.com/512/1251/1251129.png?w=996&t=st=1676029557~exp=1676030157~hmac=316d177a7beafae15f6ea81a9a83a623970b4132a8847b6e655c204557f1b20f'}/>
      {/* 👇️ show elements on click */}
  {show && <Modal show={show} setShow={setShow}/>}



 {/* {cartItems.map....} */}
    <p className="total">$ {totalPrice}</p>
    </div>)
}

export default Cart;

// {cartItems.map ((cartItem,index)=><CartItem key={index} cartItem={cartItem}/>)}