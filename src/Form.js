import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {

  const [state, handleSubmit] = useForm("meqweqwn");
  if (state.succeeded) {
      return <div className='blockAbout'><h4>Your message is sent!</h4></div>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <div className='blockForm'>
      <label htmlFor="email">
    Your  Email: 
      </label>
      <input className='email'
        id="email"
        type="email" 
        name="email"
        placeholder="email..."
        required="required"
      /></div>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <br></br>
       <div className='blockForm'>
       <label htmlFor="text">
    Your  Message: 
      </label>
      <textarea className='message'
        id="message"
        name="message"
        placeholder="your message..."
        required="required"
      /></div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <br></br>
      <div className='blockForm'>
      <button className='addToCart' type="submit" disabled={state.submitting}>
        Send
      </button></div>
    </form>
  );
}
function Formspree() {
  return (
    <ContactForm />
  );
}
export default Formspree;
