import CartProduct from "../components/Fragments/CartProduct";
import HomeDasboard from "../components/Fragments/HomeDasboard";
import NavProduct from "../components/Fragments/NavProduct";
import { allProduct } from "./data";

 function ProductPage(props){
    const {children} = props;
    return (
        <div>
            <div className=" shadow-lg shadow-slate-400">
                <HomeDasboard.NavBar />
            </div>
            <div className="mt-5">
                <HomeProduct />
            </div>
        </div>
    )
}

function HomeProduct(){
    return (
        <section className="productpage  min-h-screen mt-5">
          <NavProduct />
          <div className="productpage2 flex gap-7 flex-wrap justify-center">
                    {allProduct.map((products) => (
                        <CartProduct key={products.id}>
                            <CartProduct.HeaderProduct image ={products.imageId}/>
                            <CartProduct.BodyProduct name={products.name}>
                                {products.Description}
                            </CartProduct.BodyProduct>
                            <CartProduct.FooterProduct price={products.price}/>
                        </CartProduct>
                        )
                    )}
                </div>          
        </section>
    )
}

ProductPage.HomeProduct = HomeProduct;
export default ProductPage;