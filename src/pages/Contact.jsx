import InputFrom from "../components/Elements/Input";
import HomeDasboard from "../components/Fragments/HomeDasboard";
import React from 'react';
import {useFormik} from 'formik';
// import * as Yup from "yup";
import ContactBox from "../components/Fragments/ContactBox";

const ContactPage = () => {
   const handleSubmit =() => {
      // alert("submit form!")

      alert(formik.values.username)
   }
   const formik = useFormik({
      initialValues:{
         fullname: "",
         email:"",
         textarea:""
      },
   });

   const HandleForm = (e) => {
      const { target } = e
      formik.setFieldValue("fullname", target.value)  
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
               <form onSubmit={handleSubmit}>
                  <InputFrom.Label htmlFor="fullname">Fullname</InputFrom.Label>
                  <Input type="text" id="fullname"name="fullname" placeholder ="Andika Saputra"
                  onChange={HandleForm}
                  />

                  <InputFrom.Label htmlFor="email">Email</InputFrom.Label>
                  <Input type="text" id="email"name="email" placeholder ="andikasaputra@gmail.com"
                  onChange={HandleForm}
                  />
                  
                  <InputFrom.Label htmlFor="textarea">Textarea Suggestion</InputFrom.Label>
                  <InputFrom.Textarea name="textarea"
                  onChange={HandleForm}
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