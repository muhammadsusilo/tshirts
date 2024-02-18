import AboutContainer from "../components/Fragments/AboutContainer";
import HomeDasboard from "../components/Fragments/HomeDasboard";

const AboutPage = () => {
   return (
      <div >
         <div className=" shadow-lg shadow-slate-400">
         <HomeDasboard.NavBar />
         </div>
         <div className="px-28 py-14 flex justify-center items-center gap-9">
            <AboutContainer.AboutHeader/>
            <AboutContainer.AboutFooter />
         </div>
      </div>
   )
}

export default AboutPage;