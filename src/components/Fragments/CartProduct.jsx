import Button from "../Elements/Button/Button";

export default function CartProduct(){
    return (
            <section className="mx-20">
                <h2 className="text-center text-4xl mb-7 font-bold">Best Seller In Product</h2>
                <input 
                className="w-full outline-none outline-slate-300 px-4 py-1 rounded-md"
                type="text" placeholder="Search in Favorite Product"
                />
                <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow my-5">
                    <a href="">
                        <img src="../public/img/cart1.jpg" alt="Product" className="p-6 rounded-t-lg"/>
                    </a>
                    <div className="px-4 pb-4">
                        <a href="">
                            <h5 className="text-xl font-semibold tracking-tight text-black ">New Tshirts</h5>
                            <p className="text-m text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem reiciendis cumque incidunt provident rerum nihil, corrupti rem aliquid repellat, et magnam, iure nobis animi voluptas voluptatum sit illum dicta!</p>
                        </a>
                    </div>
                    <div className="flex justify-between items-center px-5 pb-5 ">
                        <span className="text-xl font-bold text-black">Rp.100.000</span>
                        <Button name="Add To cart"> </Button>
                    </div>
                </div>
            </section>

    )
}