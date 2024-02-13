import Button from "../Elements/Button/";

const CartProduct = (props) => {
    const {children} = props;
    return (
        <div className="  w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow my-5">
            {children}
        </div>
    )
}

const HeaderProduct = (props) => {
    const {image} = props;
    return (
        <a href="">
            <img src={image} alt="Product" className="p-6 rounded-t-lg"/>
        </a>
    )
}

const  BodyProduct = (props) => {
    const {children, name} = props;
    return (
        <div className="px-4 pb-4">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-black ">
                    {name}
                </h5>
                <p className="text-m text-black">
                    {children}
                </p>
            </a>
        </div>
    )   
}

const FooterProduct = (props) =>{
    const {price} = props;
    return (
        <div className="flex justify-between items-center px-5 pb-5 ">
            <span className="text-xl font-bold text-black">Rp.{price}</span>
            <Button>Add To Cart</Button>
        </div>
    )
}

CartProduct.HeaderProduct = HeaderProduct ;
CartProduct.BodyProduct = BodyProduct ;
CartProduct.FooterProduct = FooterProduct ;

export default CartProduct;