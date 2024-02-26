import { Link } from "react-router-dom";
import Button from "../Elements/Button/";

const CartProduct = (props) => {
    const {children} = props;
    return (
        <div className=
        "w-full max-w-xs border border-slate-200 rounded-lg shadow-md shadow-slate-400 my-5 flex flex-col">
                {children}
        </div>
    );
};

const HeaderProduct = (props) => {
    const {image} = props;
    return (
        <Link to="">
            <img src={image} alt="Product" className="p-6 rounded-t-lg  object-cover"/>
        </Link>
    )
}

const  BodyProduct = (props) => {
    const {children, name} = props;
    return (
        <div className="px-4 pb-4">
            <Link to="">
                <h5 className="text-xl font-semibold tracking-tight text-black ">
                    {name}
                </h5>
                <p className="text-m text-black">
                    {children}
                </p>
            </Link>
        </div>
    )   
}

const FooterProduct = (props) =>{
    const {price} = props;
    return (
        <div className="mt-auto">
            <div className="flex justify-between items-center px-5 pb-5">
                <span className="text-xl font-bold text-black">Rp.{price}</span>
                <Button color="bg-blue-500">Add to Cart</Button>
            </div>
        </div>
    )
}

const ShopProduct = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <p>Cart</p>
        </div>
    )
};

CartProduct.ShopProduct = ShopProduct;
CartProduct.HeaderProduct = HeaderProduct ;
CartProduct.BodyProduct = BodyProduct ;
CartProduct.FooterProduct = FooterProduct ;

export default CartProduct;