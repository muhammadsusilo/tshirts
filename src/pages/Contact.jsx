
import InputFrom from "../components/Elements/Input";
import HomeDasboard from "../components/Fragments/HomeDasboard";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactPage = () => {
   const form = useRef();

   const HandleAbout = () =>{
      
   }

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_yu53vcb","template_ltyjpfe", form.current, {
      publicKey:"OLBtCJ2If6lUW2SUx",
    })
    .then(
      ()=>{
         `${console.log("Terima Kasih")}`
      },
      (er)=>{
         `${console.log("Silahkan Ulangi")}`
      }
    );
   }

   return (
      <div className="contactpage">
         <div className=" shadow-lg shadow-slate-400">
            <HomeDasboard.NavBar />
         </div>
         <h2 className="text-center py-5 text-4xl font-bold mt-2">If there is the Feedback ?</h2>
         <hr className="mb-5 mx-10" />
         <div className="contact flex flex-wrap justify-center gap-7">
            <div className="max-w-md">
               <img 
                  src="https://5pworld.com/wp-content/uploads/shutterstock_1457403185-Converted-01-01.png" 
                  alt="Contact Tshirts" />
            </div>
            <div className="flex flex-col">
               <form ref={form} onSubmit={sendEmail}>
                  <InputFrom.LabelInput
                  label= "Fullname" type="text" name="fullname" placeholder="Andika Saputra" />
                  <InputFrom.LabelInput
                  label= "Email Addres" type="email" name="Email" placeholder="andika@gmail.com" />
                  <InputFrom.Textarea />
                  <button color="bg-blue-500" type="submit"
                  >
                     Submit
                  </button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default ContactPage;