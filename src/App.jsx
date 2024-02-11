import { useState } from "react";
import Home from "./pages/Home";
import CartProduct from "./components/Fragments/CartProduct";


function App(){
    return (
        <div>
            <Home></Home>
            <CartProduct></CartProduct>
        </div>
    )
}


export default App;