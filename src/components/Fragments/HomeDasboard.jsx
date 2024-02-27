import Button from "../Elements/Button";
import { Link } from "react-router-dom"

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
   return (
    <nav 
    className=
    "navbar flex justify-evenly items-center py-4 bg-slate-300"
    >
      <div className="text-3xl font-bold uppercase">
         {/* <Button color="bg-slate-400" > 
            X
         </Button > */}
         <Link to="/">Tshirt<span>s.</span></Link>
      </div>
      <ul className="navlink flex gap-5">
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
      {/* <Link to="Shop" className="text-3xl"><i class='bx bxs-shopping-bag'></i></Link> */}
    </nav>
   )
}

function Dasboard(){
   return (
      <section className="flex justify-between min-h-screen">
         <div className="items-center min-h-screen m-5 mt-5 mx-20">
            <h1 className="text-7xl font-bold text-indigo-700 ">Tshirts Store</h1>
            <h2 className="text-6xl"> Welcome to our platform </h2>
            <p className="text-lg my-5">Click to view T-shirts katalog </p>
            <Button onClick={HandleClick} color="bg-blue-500">Catalog</Button>
         </div>
         <div className="img-gambar ">
            <img className="h-screen object-cover" src="./public/img/gambar1.jpg" alt="Tshirts" />
         </div>    
      </section>
   )
}
HomeDasboard.NavBarMobile = NavBarMobile;
HomeDasboard.NavBar = NavBar ;
HomeDasboard.Dasboard = Dasboard ;

export default HomeDasboard;