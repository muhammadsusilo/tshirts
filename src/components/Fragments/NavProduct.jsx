 function NavProduct(){
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-center text-4xl mb-7 font-bold">Best Seller In Product</h2>
            <input 
            className=
            "w-full outline-none outline-blue-300 px-4 py-1 rounded-md max-w-screen-lg"
            type="text" placeholder="Search in Favorite Product"
            />
        </div>
    )
} 

export default NavProduct;