import ProductList from '../ProductList/ProductList'
import { useState } from "react"
import Heading from "../Home/Heading/Heading"
import { Link } from 'react-router-dom'
import Cards from '../Cards/Card'
const Product = () => {
    let Menu = ["All", "Fruits","Vegetables", "Dairy", "SeaFood"]
    let [Active, SetActiveTab] = useState("All")

    let Filterditem = Active === 'All' ? ProductList : ProductList.filter((item)=>item.category === Active)

    
    let RenderCards = Filterditem.slice(0,8).map((product) => {
            return (
                <div className=''>
                    <Cards product={product} key={product.id} />
                </div>
            )
        })
    
    return (
        <section>
            <div className="max-w-[1400px] mx-auto px-10">
                <Heading Highlight="Our " Normal="Products" />
                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-10 mt-10">
                    {Menu.map((menu,index) => {
                        return (
                            <button key={index} className={`bg-zinc-300 px-5 py-2  text-lg rounded-lg ${Active == menu && "bg-gradient-to-b from-orange-400 to-orange-500 text-white"}`} onClick={() => SetActiveTab(menu)}>
                                {menu}
                            </button>
                        )
                    })}
                </div>
                {/* Cards */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-20'>
                    {RenderCards}
                </div>
                <div className='text-center m-15'>
                    <Link to="/AllProducts" className=" bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transation-all duration-300 cursor-pointer" >View All</ Link>
                </div>
            </div>
        </section>
    )
}
export default Product

