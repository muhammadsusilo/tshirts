import Button from "../Elements/Button";

const AboutContainer = (props) => {
   const {children} = props;
    return (
      <div>
         {children}
      </div>
    )
};

const ContactUs = () => {
   window.location.href="/Contact";
}

const AboutHeader = () => {
   return (
         <div>
            <h5 className="text-4xl my-5 font-bold">About Tshirt<span>Shop</span></h5>
            <p className="text-xl font-light mb-3"> Tshirt Shop is website about sales to tshirt for adult. Tshirt Shop made In Indonesia in ecommerce modern, buy and sell product in high quality. Lets Order at Shop Tshirt </p>
            <Button onClick={ContactUs} color="bg-blue-500">Contact Us</Button>
         </div>
   )
}

const AboutFooter =() => {
   return (
      <div className="about-footer">
         <img
            src="https://th.bing.com/th/id/OIP.ByZTs7x90BkgJ-4RJvkG8QHaFT?rs=1&pid=ImgDetMain" 
            alt="About" 
         />
      </div>
   )
};

AboutContainer.AboutHeader = AboutHeader;
AboutContainer.AboutFooter = AboutFooter;

export default AboutContainer;