import { useContext, useState } from "react"
import { FaTrashAlt } from "react-icons/fa";
import { Cartscontext } from "../Cartcontext/Cartcontext";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Store/cartSlice";
const Cartsitems = ({ item }) => {
    let [quantity, setquantity] = useState(1)

    let dispatch = useDispatch();
    function Handleonremove(ItemId) {
        dispatch(cartAction.DeleteCart(ItemId))
    }
    return (
        <div className="grid grid-cols-4 items-center  bg-zinc-100  mb-10 rounded-lg relative" key={item.id}>
            <div className="flex items-center py-3 md:gap-6">
                <img src={item.image} className="mx-auto text-center  w-20 object-contain " />
                <h3 className=" md:text-lg w-20 flex flex-wrap font-semibold ">{item.name}</h3>
            </div>
            <p className="md:text-xl text-center font-semibold">${item.price}</p>
            <div className="flex justify-center">
                <input type="number" defaultValue="1" min="1" className="bg-white w-10 text-center border rounded-lg" onChange={(e) => setquantity(e.target.value)} />
            </div>
            <p className="text-center">{`$${(item.price * Number(quantity)).toFixed(2)}`}</p>
            <div className="bg-red-600 text-white flex items-center justify-center h-7 w-7 rounded-lg absolute right-0 top-0 cursor-pointer" onClick={() => Handleonremove(item.id)}><FaTrashAlt /></div>
        </div>
    )
}

export default Cartsitems