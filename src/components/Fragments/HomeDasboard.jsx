import { useState } from "react";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function HomeDasboard(props){
   const {children} = props;
   return (
       <div>
         {children}
       </div>
   )
}

const HandleClick =() => {
   window.location.href ="/Product"
};

function NavBar(){
const [isMobile, setIsmobile] = useState(false)
   return (
    <nav 
    className=
    "navbar flex justify-evenly items-center py-4 bg-blue-400"
    >
      <button className="menu mr-5" 
         onClick={() => setIsmobile(!isMobile)}
         >
         {isMobile? <FiX />  : <FiMenu /> }
      </button>
      <div className="navheader flex items-center text-3xl font-bold uppercase">
         <Link to="/">Tshirt<span>s.</span></Link>
      </div>
      <ul className=
      {isMobile? "navlink" : "navdestop"}
      onClick={() =>setIsmobile(false)}
      >
         <li >
               <Link to="/">Home</Link>
         </li>
         <li>
               <Link to="/Product">Product</Link>
         </li>
         <li>
               <Link to="/Contact">Contact</Link>
         </li>
         <li>
               <Link to="/About">About</Link>
         </li>      
      </ul>
    </nav>
   )
}

function Dasboard(){
   return (
      <section className="dasboard flex justify-between ">
         <div className="hometext flex flex-col justify-center  my-5 mx-20">
            <h1 className="hometexth1 text-7xl font-bold text-indigo-700 ">Tshirts Store</h1>
            <h2 className="hometexth2 text-6xl"> Welcome to our platform </h2>
            <p className="hometextp text-lg my-5">Click to view T-shirts katalog </p>
            <div>
               <Button onClick={HandleClick} color="bg-blue-500">Catalog</Button>
            </div>
         </div>
         <div className="img-gambar">
            <img className=" object-cover" src="./public/img/gambar1.jpg" alt="Tshirts" />
         </div>    
      </section>
   )
}
HomeDasboard.NavBar = NavBar ;
HomeDasboard.Dasboard = Dasboard ;

export default HomeDasboard;