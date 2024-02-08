import { useState } from "react";
import Home from "./pages/Home";


function App(){
    return (
        <div>
            <Home></Home>
            <section className="p-0 m-0">
                <h2>Best Seller In Product</h2>
                <input type="text" placeholder="Search in Favorite Product"/>
            </section>
        </div>
    )
}


export default App;