import Button from "../components/Elements/Button";
import HomeDasboard from "../components/Fragments/HomeDasboard";
import ProductPage from "./Product";

 export default function HomePage(){
    return (
        <div>
            {/* <p className="flex justify-evenly items-center absolute bg-amber-100 w-screen p-3" >
                Masih dalam proses pengembangan
                <Button 
                onClick={() =>{
                window.style.display ="none"}}>
                    X
                </Button>
            </p> */}
            <HomeDasboard.NavBar />
            <HomeDasboard.Dasboard />
            <ProductPage.HomeProduct />
        </div>
    )
}