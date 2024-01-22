

import React, { useState } from 'react';
import "../src/css/contact.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  // State to track touched status of each field
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    phone: false,
    email: false,
    subject: false,
    message: false
  });

  const getBorderColor = (field) => {
    const isEmpty = formData[field].trim() === '';
    const hasNumber = field === 'name' ? /\d/.test(formData[field]) : false;
    const isValidEmail = field === 'email' ? formData[field].includes('@') : true;
  
    const borderColor = touchedFields[field] ? (isEmpty || hasNumber || !isValidEmail ? 'red' : 'green') : 'transparent';
  
    console.log(`Field: ${field}, IsEmpty: ${isEmpty}, HasNumber: ${hasNumber}, IsValidEmail: ${isValidEmail}, BorderColor: ${borderColor}`);
    
    return borderColor;
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Mark the field as touched
    setTouchedFields({ ...touchedFields, [name]: true });

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate form fields
    const isValid = Object.entries(formData).every(([key, value]) => {
      switch (key) {
        case 'name':
          if (value.trim() === '') {
            alert('Please enter your name.');
            return false;
          }
          if(/\d/.test(value)) {
            alert('Name cannot contain numbers.');
            return false;
          }
          return /^[A-Za-z]{1,15}$/.test(value);
        case 'phone':
          if (value.trim() === '' || value.length < 10) {
            alert('Please enter a valid phone number with at least 10 digits.');
            return false;
          }
          if (!/^[0-9+]{10,}$/.test(value)) {
            alert('Phone number can only contain numbers and the + symbol.');
            return false;
          }
          return true;
        case 'email':
          if (!value.includes('@')) {
            alert('Please enter a valid email address with "@" symbol.');
            return false;
          }
          return true;
        case 'subject':
          if (value.trim() === '') {
            alert('Please enter a subject.');
            return false;
          }
          return value.length <= 20;
        case 'message':
          if (value.trim() === '') {
            alert('Please enter a message.');
            return false;
          }
          return value.length <= 40;
        default:
          return true;
      }
    });
  
    if (isValid) {
      // Form is valid, submit the data or perform further actions
      // Example: You can use Formspree or any other service to handle form submission
      console.log('Form submitted:', formData);
    } else {
      // Optionally, display an error message or take other actions
      console.log('Form validation failed. Please check the fields.');
    }
  };

  

  return (
    <>
      <Navbar />
      <main>
        <div id="formcontact">
        <form
      id="contactForm"
      onsubmit="validateForm(event)"
      action="https://formspree.io/f/xwkdywrd"
      method="POST"
      name="myform"
      onSubmit={handleSubmit} >
            <div className="containercont">
              <h1>Reach Out to Us. </h1>
              <h1>We Are Just a Message Away!</h1>
              <br />
              <div className="contact-box">
                <div className="contact">
                  <h2>Write Your Request</h2>
                  <br />
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    style={{ borderColor: getBorderColor('name') }}
                    aria-label="Name"
                  required/>

                  <label htmlFor="phone">Phone:</label>
                  <input
                    id="phone"
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    placeholder="000 000 0000"
                    style={{ borderColor: getBorderColor('phone') }}
                    aria-label="Phone"
                    required/>

                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    style={{ borderColor: getBorderColor('email') }}
                    aria-label="Email"
                    required/>

                  <label htmlFor="subject">Subject:</label>
                  <input
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    style={{ borderColor: getBorderColor('subject') }}
                    aria-label="Subject"
                    /*required*//>

                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    rows={4}
                    style={{ borderColor: getBorderColor('message') }}
                    aria-label="Message"
                    defaultValue={""}
                    required/>
                  <button className="send" id="contact" type="Submit">
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}








// import React from 'react'
// import "../src/css/contact.css"
// import Navbar from "./components/navbar"
// import Footer from "./components/footer"


// export default function contact() {
//   return (
//     <>
//     <Navbar/>
//     <main>
            
//   <div id="formcontact">
//     <form
//       id="contactForm"
//       onsubmit="validateForm(event)"
//       action="https://formspree.io/f/xwkdywrd"
//       method="POST"
//       name="myform"
//     >
//       {/* this the content-box where the contact information go*/}
//       <div className="containercont">
        
//         <h1>Reach Out to Us. </h1>
//         <h1>We Are Just a Message Away!</h1>
//         <br />
//         <div className="contact-box">
//           <div className="contact">
//             <h2>Write Your Request</h2>
//             <br />
//             {/* here for the rows for the information of who is making any request of information or questin*/}
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" name="name" required="" />
//             <span id="nameError" className="error-message" />
//             <label htmlFor="phone">Phone:</label>
//             <input
//               id="phone"
//               type="number"
//               name="Phone"
//               placeholder="000 000 0000"
//               required=""
//             />
//             <span id="phoneError" className="error-message" />
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" name="email" required="" />
//             <span id="emailError" className="error-message" />
//             <label>Subject:</label>
//             <input type="text" name="Subject" placeholder="Title" required="" />
//             <label htmlFor="message">Message:</label>
//             <textarea
//               id="message"
//               name="message"
//               rows={4}
//               required=""
//               defaultValue={""}
//             />
//             <span id="messageError" className="error-message" />
//             <button
//               onclick="validateAndSubmit()"
//               className="send"
//               id="contact"
//               type="Submit"
//             >
//               SEND
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   </div>
 
// </main>
// <Footer/>
// </>
//   )
// }
