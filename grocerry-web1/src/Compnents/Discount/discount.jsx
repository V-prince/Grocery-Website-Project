import Button from "../Button/Button"
import FruitsSet from '../../images/fresh-fruits.png'
const Discount = () =>{
    return(
        <section className="bg-zinc-200 bg-right bg-contain bg-no-repeat  " style={{backgroundImage:`url(${FruitsSet})`}}>
            <div className="md:bg-transparent bg-zinc-300 flex md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-10">
               <span className="md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center">20%</span>
               <div className="max-w-[700px]">
                    <h3 className="md:text-7xl text-4xl text-zinc-800 font-bold">First Order Discount</h3>
                    <p className="md:text-xl text-zinc-600 mt-6 mb-5">Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
                    <Button content="Get Discount!"/>
               </div>
            </div>
        </section>
    )
}

export default Discount