import Button from "../components/Elements/Button";
import InputFrom from "../components/Elements/Input";
import HomeDasboard from "../components/Fragments/HomeDasboard";

const ContactPage = () => {
   return (
      <div>
         <div className=" shadow-lg shadow-slate-400">
            <HomeDasboard.NavBar />
         </div>
         <h2 className="text-center py-5 text-4xl font-bold mt-2">If there is the Feedback ?</h2>
         <hr className="mb-5 mx-10" />
         <div className="flex row justify-center gap-7 flex-wrap">
            <div className="max-w-md">
               <img 
                  src="https://5pworld.com/wp-content/uploads/shutterstock_1457403185-Converted-01-01.png" 
                  alt="Contact Tshirts" />
            </div>
            <div className="flex flex-col">
               <InputFrom.LabelInput
               label= "Fullname" type="text" name="fullname" placeholder="Andika Saputra" />
               <InputFrom.LabelInput
               label= "Email Addres" type="email" name="Email" placeholder="andika@gmail.com" />
               <InputFrom.Textarea />
               <Button>Submit</Button>
            </div>
         </div>
      </div>
   )
}

export default ContactPage;