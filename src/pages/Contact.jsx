import InputForm from "../components/Elements/Input";
import HomeDasboard from "../components/Fragments/HomeDasboard";
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from "yup";
import ContactBox from "../components/Fragments/ContactBox";

const ContactPage = () => {
   const contactForm =() => {
      // e.preventDefault();
      alert("Form Submit ")
      // alert(formik.values.textarea);
   }
   const formik = useFormik({
      initialValues:{
         fullname: "",
         email:"",
         textarea:""
      },
      onSubmit : contactForm,
      validationSchema: Yup.object().shape({
         fullname: Yup.string().required().max(15 , "Max caracter 15").min(3, "min caracter 3"),
         email: Yup.string().required().email(),
         textarea : Yup.string().required().max(30, "maxsimal 30 char")
      })
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
                  <input id="fullname" type="text" name="fullname"
                  onChange={handleForm}
                  />
                  {formik.touched.fullname && formik.errors.fullname ? (
                     <div>{formik.errors.fullname}</div>
                  ): null }

                  <InputForm.Label htmlFor="email">Email</InputForm.Label>
                  <input type="email" name="email"
                  onChange={handleForm}
                  />
                  {formik.touched.email && formik.errors.email ? (
                     <div>{formik.errors.email}</div>
                  ): null }

                  <InputForm.Label htmlFor="textarea">Textarea Suggestion</InputForm.Label>
                  <textarea name="textarea"
                  onChange={handleForm}
                  />
                  {formik.touched.textarea && formik.errors.textarea ? (
                     <div>{formik.errors.textarea}</div>
                  ): null }
                  
                  <button type="submit">Submit</button>
               </form>

            </div>
         </div>
      </div>
   )
}

export default ContactPage;