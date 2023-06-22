
import './Contact.css';

const Contact = () => {
  
  return (
   <div className="container">
     <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          
        ></textarea>
      </div>
      <button type="submit" className='register-btn'>Submit</button>
    </form>
   </div>
  );
};

export default Contact;
