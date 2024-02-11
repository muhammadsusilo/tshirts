import Button from "../components/Elements/Button/Button";
import NavProduct from "../components/Fragments/NavProduct";

export default function ProductPage(){
    return (
        <div>
            <section className="mx-20">
                <NavProduct />
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
        </div>
    )
}
