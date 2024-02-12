import Button from "../Elements/Button"

function HomeDasboard(props){
   const {children} = props;
   return (
       <div>
         {children}
       </div>
   )
}

function NavBar(){
   return (
    <nav className="flex justify-around items-center py-4 bg-slate-300 shadow-slate-700">
      <div className="text-2xl uppercase">Tshirt<span>s.</span> </div>
      <ul className="flex gap-5">
      <li >
         <a href="#">Home</a>
      </li>
      <li>
         <a href="#">Product</a>
      </li>
      <li>
         <a href="#">Contact</a>
      </li>
      <li>
         <a href="#">About</a>
      </li>      
      </ul>
      <Button>Login</Button>
    </nav>
   )
}

function Dasboard(){
   return (
      <section className="flex justify-between min-h-screen">
         <div className=" items-center min-h-screen m-10">
            <h1 className="text-7xl font-bold text-indigo-700 ">Tshirts Store</h1>
            <h2 className="text-6xl"> Welcome to our platform </h2>
            <p className="text-md my-5">Click to view T-shirts katalog </p>
            <Button>Catalog</Button>
         </div>
         <div className="img-gambar ">
            <img className="h-screen object-cover" src="./public/img/gambar1.jpg" alt="Tshirts" />
         </div>    
      </section>
   )
}

HomeDasboard.NavBar = NavBar;
HomeDasboard.Dasboard = Dasboard

export default HomeDasboard;