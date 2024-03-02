 function NavProduct(){
    return (
        <div className="navproduct flex flex-col justify-center items-center mt-10">
            <h2 className="navproducth2 text-center text-4xl mb-7 font-bold">Best Seller In Product</h2>
            <input 
            className=
            " navsearch outline-none outline-blue-300 px-4 py-1 rounded-md w-10/12 mx-28 "
            type="text" placeholder="Search in Favorite Product"
            />
        </div>
    )
} 

export default NavProduct;