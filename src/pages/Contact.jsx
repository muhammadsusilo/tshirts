import InputFrom from "../components/Elements/Input";
import HomeDasboard from "../components/Fragments/HomeDasboard";
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from "yup";
import ContactBox from "../components/Fragments/ContactBox";

const ContactPage = () => {
   const formik = useFormik({
   // initial values
   initialValues:{
      fullname:``,
      email:``,
      textarea:``
   },
   
   // validation shema
   validationSchema:Yup.object({
      fullname:Yup.string()
      .required(),
      email:Yup.string()
      .required(),
      textarea:Yup.string()
      .required(),
   }),

   // handle submission
   onSubmit:(values) =>{
      console.info("form values",values);
   }
   });

// console.info(formik);

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
                  <InputFrom.LabelInput
                  label= "Fullname" type="text" name="fullname" id="fullname" placeholder="Andika Saputra" 
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                  />
                  <InputFrom.LabelInput
                  label= "Email Addres" type="email" name="email" id="email" placeholder="andika@gmail.com" 
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  />
                  <InputFrom.Textarea name="textarea"
                  value={formik.values.textarea}
                  onChange={formik.handleChange}
                  />
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