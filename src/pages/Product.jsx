import CartProduct from "../components/Fragments/CartProduct";
import HomeDasboard from "../components/Fragments/HomeDasboard";
import NavProduct from "../components/Fragments/NavProduct";
import { allProduct } from "./data";

 function ProductPage(props){
    const {children} = props;
    return (
        <div>
            <HomeDasboard.NavBar />
            <div className="mt-5">
                <HomeProduct />
            </div>
        </div>
    )
}

function HomeProduct(){
    return (
        <section className="mx-20">
                <NavProduct />
                <div className="flex gap-7 flex-wrap justify-center">
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