import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';


const Contact = () => {

  const [successAlertVisible, setSuccessAlertVisible] = useState(false);
  const [errorAlertVisible, setErrorAlertVisible] = useState(false);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xde04uc', 'template_goppy6c', form.current, 'vw4uvPSHlL6WiwF5y').then((result) => {
      setSuccessAlertVisible(true);
      setTimeout(() => {
        setSuccessAlertVisible(false);
    }, 5000);
      document.getElementById("contactForm").reset();
    }, (error) => {
      console.log(error.text);
      setErrorAlertVisible(true);
      setTimeout(() => {
        setErrorAlertVisible(false);
    }, 5000);
    });
  };
    return ( 
      <div className="h-full p-12">
      {successAlertVisible ? <Alert severity="success" className="fixed right-4 flex text-green-600 bg-green-300 bg-opacity-90 px-4">Email sent successfully!</Alert> : <></>}
      { errorAlertVisible ? <Alert severity="error" className="fixed right-4 flex px-4">Email couldn't be sent!</Alert> : <></>}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-darkGray1 sm:text-4xl">Get in touch</h2>
        <p className="text-lg leading-8 text-darkGray2">
          Fill out this form to send me an email.
          </p>
      </div>
        <form onSubmit={sendEmail} ref={form} id="contactForm" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold leading-6 text-darkGray1">
              First name
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-darkGray1 shadow-sm ring-1 ring-inset ring-lightGray placeholder:text-lightGray focus:ring-2 focus:ring-inset focus:ring-blue3 sm:text-sm sm:leading-6"
                />
            </div>
                </label>
          </div>
          <div>
            <label className="block text-sm font-semibold leading-6 text-darkGray1">
              Last name
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-darkGray1 shadow-sm ring-1 ring-inset ring-lightGray placeholder:text-lightGray focus:ring-2 focus:ring-inset focus:ring-blue3 sm:text-sm sm:leading-6"
                />
            </div>
                </label>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-darkGray1">
              Company
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-darkGray1 shadow-sm ring-1 ring-inset ring-lightGray placeholder:text-lightGray focus:ring-2 focus:ring-inset focus:ring-blue3 sm:text-sm sm:leading-6"
                />
            </div>
                </label>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-darkGray1">
              Email
            <div className="mt-2.5">
              <input
                type="email"
                name="reply_to"
                id="reply_to"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-darkGray1 shadow-sm ring-1 ring-inset ring-lightGray placeholder:text-lightGray focus:ring-2 focus:ring-inset focus:ring-blue3 sm:text-sm sm:leading-6"
                />
            </div>
                </label>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-darkGray1">
              Phone number
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-darkGray1 shadow-sm ring-1 ring-inset ring-lightGray placeholder:text-lightGray focus:ring-2 focus:ring-inset focus:ring-blue3 sm:text-sm sm:leading-6"
                />
            </div>
                </label>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-darkGray1">
              Message
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-darkGray1 shadow-sm ring-1 ring-inset ring-lightGray placeholder:text-lightGray focus:ring-2 focus:ring-inset focus:ring-blue3 sm:text-sm sm:leading-6"
                defaultValue={''}
                />
            </div>
                </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit" value="Send"
              className="block w-full rounded-md bg-blue1 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue3"
          >
            Let's talk
          </button>
        </div>
      </form>
      </div>
    );
};


export default Contact;