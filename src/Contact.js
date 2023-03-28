import Footer from "./Footer";
import Formspree from "./Form";


function Contact(){


    return(
      <div>
        <div className="blockContact">
            <p className="contact">If you have any questions, suggestions or collaboration offers, </p>    
            <p className="contact">please send us a message</p>
        </div>
        <div className="blockConatact">
       <Formspree/> 
<Footer/>
       </div>

      </div>
    )
}


export default Contact;