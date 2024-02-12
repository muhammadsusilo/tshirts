import CartProduct from "../components/Fragments/CartProduct";
import HomeDasboard from "../components/Fragments/HomeDasboard";
import NavProduct from "../components/Fragments/NavProduct";
import { allProduct } from "./data";

export default function ProductPage(){
    return (
        <div>
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
        </div>
    )
}
