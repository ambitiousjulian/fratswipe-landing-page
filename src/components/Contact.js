// import React, { useState } from 'react';
// import styled from 'styled-components';
// import emailjs from 'emailjs-com';

// const ContactWrapper = styled.section`
//   background: linear-gradient(135deg, #001f3f, #007bff);
//   color: #fff;
//   padding: 4rem 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
// `;

// const ContactTitle = styled.h2`
//   font-size: 3rem;
//   margin-bottom: 2rem;
//   font-weight: bold;
// `;

// const ContactForm = styled.form`
//   background: #ffffff;
//   color: #333;
//   padding: 2rem;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   width: 80%;
//   max-width: 600px;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const Input = styled.input`
//   padding: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 1rem;
// `;

// const TextArea = styled.textarea`
//   padding: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 1rem;
//   resize: vertical;
//   min-height: 150px;
// `;

// const Button = styled.button`
//   background: #007bff;
//   color: #fff;
//   padding: 1rem;
//   border: none;
//   border-radius: 5px;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background 0.3s ease;

//   &:hover {
//     background: #0056b3;
//   }
// `;

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs.send('service_cajCode.com', 'template_y37465e', formData, 'i4ogx2IhAZGp85txM')
//       .then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         alert('Your message has been sent successfully!');
//         setFormData({ name: '', email: '', message: '' }); // Reset form after submission
//       }, (err) => {
//         console.log('FAILED...', err);
//         alert('Failed to send the message, please try again.');
//       });
//   };

//   return (
//     <ContactWrapper id="contact">
//       <ContactTitle>Contact Us</ContactTitle>
//       <ContactForm onSubmit={handleSubmit}>
//         <Input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <Input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <TextArea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//         <Button type="submit">Send Message</Button>
//       </ContactForm>
//     </ContactWrapper>
//   );
// };

// export default Contact;
