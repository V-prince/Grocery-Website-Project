import { useDispatch } from "react-redux"
import { HartitemAction } from "../../Store/item";

export const Hartcard = ({product}) => {
    let dispatch = useDispatch();
    function Hnadleonremove(ItemId) {
        dispatch(HartitemAction.Removefavourite(ItemId))
    }
  return (
    <div className="bg-zinc-100 p-5 rounded-xl  mb-10">
                {/* Card Image */}
            <div className="w-full h-50 ">
                    <img src={product.image} alt="" className="w-full h-full mx-auto object-contain"  />
            </div>
                {/* Card Product Details */}
            <div className="text-center">
                <h3 className="text-2xl font-semibold">{product.name}</h3>
                <p className="text-2xl font-bold mt-4 mb-4">${product.price.toFixed(2)}</p>
                <button className=" bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transation-all duration-300 cursor-pointer" onClick={()=>Hnadleonremove(product.id)}>Remove</button>
            </div> 
        </div>
  )
}
