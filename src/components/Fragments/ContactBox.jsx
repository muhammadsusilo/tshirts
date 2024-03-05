const ContactBox =(props) => {
const{children}= props
   return (
      <div>
         {children}
      </div>
   )
}

const ContactHeading = () => {
   return (
      <div>
         <h2 className="text-center py-5 text-4xl font-bold mt-2">If there is the Feedback ?</h2>
         <hr className="mb-5 mx-10" />
      </div>
   )
}
const ContactImg = () => {
   return (
      <div className="max-w-md">
         <img 
            src="https://5pworld.com/wp-content/uploads/shutterstock_1457403185-Converted-01-01.png" 
            alt="Contact Tshirts"
            />
      </div>
   )
}

ContactBox.ContactHeading =ContactHeading;
ContactBox.ContactImg = ContactImg;
export default ContactBox;