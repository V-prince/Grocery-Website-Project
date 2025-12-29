import { FaHeart } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Store/cartSlice";
import { HartitemAction } from "../../Store/item";
import { useSelector } from "react-redux";

const Cards = ({ product }) => {

    let dispatch = useDispatch()
    let Whitelist = useSelector(state => state.Hart)
    let [heart, sethart] = useState(false)

    let Whiteexist = Whitelist.some(item=>item.id === product.id)

    function handleCart(product) {
        dispatch(cartAction.addInCart(product))
    }


    function handleHart(product) {
        if (Whiteexist) {
            dispatch(HartitemAction.Removefavourite(product.id))
        }
        else{
            dispatch(HartitemAction.Addfavourite(product))
        }
        sethart(prev => !prev)
    }

    return (
        <div className="bg-zinc-100 p-5 rounded-xl">
            {/* Card Icons */}
            <div className="flex justify-between ">
                <span className={`text-2xl ${heart ? "text-red-400 " : "text-zinc-400"}  `} onClick={() => handleHart(product)}><FaHeart /></span>
                <button className="text-xl font-extrabold bg-gradient-to-b from-orange-400 to-orange-500 text-white px-3 py-2 rounded-lg  " onClick={() => handleCart(product)}><MdAdd /></button>
            </div>
            {/* Card Image */}
            <div className="w-full h-50 ">
                <img src={product.image} alt="" className="w-full h-full mx-auto object-contain" />
            </div>
            {/* Card Product Details */}
            <div className="text-center">
                <h3 className="text-2xl font-semibold">{product.name}</h3>
                <p className="text-2xl font-bold mt-4 mb-4">${product.price.toFixed(2)}</p>
                <Link to="/Cart"><button className=" bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transation-all duration-300 cursor-pointer" onClick={() => handleCart(product)}>Add</button></Link>
            </div>
        </div>
    )
}

export default Cards