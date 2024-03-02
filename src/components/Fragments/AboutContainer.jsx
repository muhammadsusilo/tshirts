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
            <h5 className="text-5xl my-5 font-bold">About Tshirt<span>s.</span></h5>
            <p className="text-xl font-light mb-3">Tshirts adalah website tentang Penjualan untuk Kaos orang dewasa. Tshirts made In Indonesia yang membuat ecommerce modern and menjual product high quality. Yuk Belanja di Tshirts shop </p>
            <Button onClick={ContactUs} color="bg-blue-500">Contact Us</Button>
         </div>
   )
}

const AboutFooter =() => {
   return (
      <div>
         <img 
         className="about_img"
            src="https://cdn.dribbble.com/userupload/9932397/file/original-2870d25f5d7ae057d0de88173ee8249b.jpg?resize=1100x1000&vertical=center" 
            alt="About" 
            />
      </div>
   )
};

AboutContainer.AboutHeader = AboutHeader;
AboutContainer.AboutFooter = AboutFooter;

export default AboutContainer;