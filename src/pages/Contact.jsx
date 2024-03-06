import InputForm from "../components/Elements/Input";
import HomeDasboard from "../components/Fragments/HomeDasboard";
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from "yup";
import ContactBox from "../components/Fragments/ContactBox";
import emailjs from '@emailjs/browser';


const ContactPage = () => {
   const contactForm =() => {
      alert("Form Submit ")

      // emailjs.sendForm("service_yu53vcb","template_ltyjpfe", form.current, {
      //    publicKey:"OLBtCJ2If6lUW2SUx",
      //  })
   }
   const formik = useFormik({
      initialValues:{
         fullname: "",
         email:"",
         textarea:""
      },
      onSubmit : contactForm,
      validationSchema: Yup.object().shape({
         fullname: Yup.string().required().max(15 , "Max char 15").min(3, "min caracter 3"),
         email: Yup.string().required().email(),
         textarea : Yup.string().required().min(10, "Min 10 char")
      }),
   });

   const handleForm = (event) => {
      const { target } = event;
      formik.setFieldValue(target.name, target.value)  
   }

   return (
      <div className="contactpage">
         <div className=" shadow-lg shadow-slate-400">
            <HomeDasboard.NavBar />
         </div>
         <ContactBox.ContactHeading/>
         <div className="contact flex flex-wrap justify-center gap-7">
            <ContactBox.ContactImg/>
            <div className="flex flex-col">

               <form onSubmit={formik.handleSubmit}>
                  <InputForm.Label htmlFor="fullname">Fullname</InputForm.Label>
                  <input 
                  className="px-3 py-2 border border-slate-500 rounded outline-blue-400 "
                  type="text" name="fullname" id="fullname"
                  onChange={handleForm}
                  />
                  {formik.touched.fullname && formik.errors.fullname ? (
                     <div>{formik.errors.fullname}</div>
                  ): null }

                  <InputForm.Label htmlFor="email">Email</InputForm.Label>
                  <input
                  className="px-3 py-2 border border-slate-500 rounded outline-blue-400 "
                  type="email" name="email" id="email"
                  onChange={handleForm}
                  />
                  {formik.touched.email && formik.errors.email ? (
                     <div>{formik.errors.email}</div>
                  ): null }

                  <InputForm.Label htmlFor="textarea">Textarea Suggestion</InputForm.Label>
                  <textarea
                  className="px-3 py-2 border border-slate-500 rounded outline-blue-400"
                  name="textarea" id="textarea"
                  onChange={handleForm}
                  />
                  {formik.touched.textarea && formik.errors.textarea ? (
                     <div>{formik.errors.textarea}</div>
                  ): null }

                  <div>
                     <button
                        className="bg-blue-500"
                        type="submit">Submit
                     </button>
                  </div>
                  
               </form>

            </div>
         </div>
      </div>
   )
}

export default ContactPage;