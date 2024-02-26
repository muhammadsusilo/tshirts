// import { unstable_HistoryRouter, useNavigate } from "react-router-dom";
import CartProduct from "../components/Fragments/CartProduct";
import HomeDasboard from "../components/Fragments/HomeDasboard";

const ShopPage =() => {
   const navigate = useNavigate();
   navigate('/shop');
   const history = unstable_HistoryRouter();
   history.push('/shop');

   return (
      <div>
         <HomeDasboard.NavBar />
         <CartProduct.ShopProduct />
         
      </div>

      
   )
}

export default ShopPage;