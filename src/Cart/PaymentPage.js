import React from "react";
import StripeContainer from "../Stripe/StripeContainer";
import { RiCloseLine } from "react-icons/ri";

//import swal from 'sweetalert';



const PaymentPage = ({showPayment, setShowPayment}) => {

    return  (
      <>
      {showPayment}
        <div className='darkBG'  onClick={() => setShowPayment(false)}/>
       
        <div className='centered'>
          <div className='modal' >
            <div className='modalHeader'>
    
              <h4 className='heading'>Your Payment Information</h4>
            </div>
            
            <button className='closeBtn' onClick={() => setShowPayment(false)}>
              <RiCloseLine/>
            </button>
          <div className='modalContent'><StripeContainer/>
                          </div>
                        
</div>
        </div>

      </>
    );
  };

export default PaymentPage;