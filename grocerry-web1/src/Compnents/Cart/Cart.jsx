
import Button from "../Button/Button"
import Cartsitems from "./Cartsitems"
import { useSelector } from "react-redux"
export const Cart = () => {
    let carts = useSelector(state=>state.cartslice)
    
    return (
        <div className="max-w-[1400px] mx-auto px-10 mt-25">
            <div className="bg-zinc-300 w-full rounded-lg mb-20">
                <ul className="grid grid-cols-4 text-center text-xl py-4 font-semibold">
                    <li>Items</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Total</li>
                </ul>
            </div>

            {carts.map((item) => (
                <Cartsitems item={item} key={item.id} />
            ))}

            {carts.length === 0 && (
                <p className="text-center text-2xl mt-20 text-zinc-700 font-extrabold mb-20">
                    Your cart is empty 🛒
                </p>
            )}

            <div className={`flex items-center justify-center m-10 ${carts.length == 0 && "hidden"} `}>
                <Button content="Pay Now" />
            </div>
        </div>
    )
}
