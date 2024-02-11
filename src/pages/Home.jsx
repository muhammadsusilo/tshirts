import Button from "../components/Elements/Button/Button";
import CartProduct from "../components/Fragments/CartProduct";
import HomeDasboard from "../components/Fragments/HomeDasboard";
import ProductPage from "./Product";

 export default function HomePage(){
    return (
        <div>
            <HomeDasboard />
            <ProductPage />
        </div>
    )
}