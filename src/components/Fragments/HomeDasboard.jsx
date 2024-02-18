import Button from "../Elements/Button";

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
    <nav className="flex justify-around items-center py-4 bg-slate-300 shadow-slate-700">
      <div className="text-2xl uppercase"><a href="/">Tshirt<span>s.</span></a></div>
      <ul className="flex gap-5">
      <li >
         <a href="/">Home</a>
      </li>
      <li>
         <a href="/Product">Product</a>
      </li>
      <li>
         <a href="/Contact">Contact</a>
      </li>
      <li>
         <a href="/About">About</a>
      </li>      
      </ul>
      <Button onClick={HandleClick}>Login</Button>
    </nav>
   )
}

function Dasboard(){
   return (
      <section className="flex justify-between min-h-screen">
         <div className="items-center min-h-screen m-5 mt-5 mx-20">
            <h1 className="text-7xl font-bold text-indigo-700 ">Tshirts Store</h1>
            <h2 className="text-6xl"> Welcome to our platform </h2>
            <p className="text-md my-5">Click to view T-shirts katalog </p>
            <Button onClick={HandleClick}>Catalog</Button>
         </div>
         <div className="img-gambar ">
            <img className="h-screen object-cover" src="./public/img/gambar1.jpg" alt="Tshirts" />
         </div>    
      </section>
   )
}

HomeDasboard.NavBar = NavBar ;
HomeDasboard.Dasboard = Dasboard ;

export default HomeDasboard;