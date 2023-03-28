import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { getCartItems, getToTalPrice } from "../Redux/cartSlice";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import PaymentPage from "./PaymentPage";
//import StripeContainer from "../Stripe/StripeContainer";
//import swal from 'sweetalert';


 




const Modal = ({show, setShow}) => {
    const  cartItems = useSelector(getCartItems);
   const totalPrice = useSelector(getToTalPrice);

   const [showPayment, setShowPayment] = useState(false);
   //const handleClick = event => {
    // 👇️ toggle shown state
    //setIsShown(current => !current);
   //};
   const handleCheckout = event => {
    // 👇️ only show element on click
   setShowPayment(true);
   };
   
    return  (
      <>
     
      {show}
        <div className='darkBG'  onClick={() => setShow(false)}/>
        {showPayment ? <PaymentPage showPayment={showPayment} setShowPayment={setShowPayment} />:
        <div className='centered'>
          <div className='modal' >
            <div className='modalHeader'>
    
              <h4 className='heading'>Your Shopping Bag</h4>
            </div>
            
          
            <button className='closeBtn' onClick={() => setShow(false)}>
              <RiCloseLine/>
            </button>
       
    
          <div className='modalContent'> {cartItems.map ((cartItem,index)=><CartItem key={index} cartItem={cartItem}/>)}
                  <h3>Total: $ {totalPrice}</h3>
                          </div>
                        
            <div className= 'modalActions' >
              <div className= 'actionsContainer'>
                
                <button className="deleteBtn"
                onClick={handleCheckout}>
                  Check Out
                </button>
             
              
                {/*<button className= 'deleteBtn' 
                onClick={()=>{swal({
                    text:"We are not a real store 😉",
                    button: "Got It!"
                })} }>
                  Check Out
              </button>*/}
              </div>
            </div>
</div>
        </div>

            }</>
    );
  };

export default Modal;


