import Button from "../Elements/Button/Button";
import NavProduct from "./NavProduct";
import { daftar } from "../../data";

const  CartProduct = (props) => {
    const {children} = props;
    return (
            <section className="mx-20">
                <NavProduct />
                <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow my-5">
                    {children}
                </div>
            </section>
    )
}

const HeaderProduct = () => {
    return (
        <a href="">
            <img src="../public/img/cart1.jpg" alt="Product" className="p-6 rounded-t-lg"/>
        </a>
    )
}

const  BodyProduct = () => {
    return (
        <div className="px-4 pb-4">
            <a href="">
            <h5 className="text-xl font-semibold tracking-tight text-black ">New Tshirts</h5>
            <p className="text-m text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem reiciendis cumque incidunt provident rerum nihil, corrupti rem aliquid repellat, et magnam, iure nobis animi voluptas voluptatum sit illum dicta!</p>
            </a>
        </div>
    )   
}

const FooterProduct = () =>{
    return (
        <div className="flex justify-between items-center px-5 pb-5 ">
            <span className="text-xl font-bold text-black">Rp.100.000</span>
            <Button name="Add To cart"> </Button>
        </div>
    )
}

CartProduct.HeaderProduct = HeaderProduct ;
CartProduct.BodyProduct = BodyProduct ;
CartProduct.FooterProduct = FooterProduct ;

export default CartProduct;