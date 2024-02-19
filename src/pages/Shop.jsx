import CartProduct from "../components/Fragments/CartProduct";
import HomeDasboard from "../components/Fragments/HomeDasboard";

const ShopPage =() => {
   return (
      <div>
         <HomeDasboard.NavBar />
         <CartProduct.ShopProduct>
            {alert("Fitur ini Masih dalam Pengembangan")}
         </CartProduct.ShopProduct>
      </div>
   )
}

export default ShopPage;