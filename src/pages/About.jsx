import AboutContainer from "../components/Fragments/AboutContainer";
import HomeDasboard from "../components/Fragments/HomeDasboard";

const AboutPage = () => {
   return (
      <div className="aboutpage">
         <div className=" shadow-lg shadow-slate-400">
            <HomeDasboard.NavBar />
         </div>
         <div className="about px-28 py-14 flex flex-wrap-reverse justify-center items-center gap-9">
            <AboutContainer.AboutHeader/>
            <AboutContainer.AboutFooter />
         </div>
      </div>
   )
}

export default AboutPage;