import Heading from "../Home/Heading/Heading"
import { GiThreeLeaves } from "react-icons/gi";
import { FaShieldHalved } from "react-icons/fa6";
import { FaSeedling } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Fullvegi from "../../images/basket-full-vegetables.png"
const Values = () =>{
    let LeftVal = values.slice(0,2).map(value =>{
            return(
                <div className="flex md:flex-row-reverse items-center gap-7  " key={value.id}>
                    <div>
                        <span className="flex justify-center text-2xl text-white items-center bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">{value.icon}</span>
                    </div>
                    <div className="md:text-right">
                        <h3 className="text-zinc-800 md:text-3xl text-2xl font-bold">{value.title}</h3>
                        <p className="text-zinc-600 text-xl mt-2 ">{value.pera}</p>
                    </div>
                </div>
            )
        })

        let RightVal = values.slice(2).map(value =>{
            return(
                <div className="flex items-center gap-5" key={value.id}>
                    <div>
                        <span className="flex justify-center text-2xl text-white items-center bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">{value.icon}</span>
                    </div>
                    <div >
                        <h3 className="text-zinc-800 md:text-3xl text-2xl font-bold">{value.title}</h3>
                        <p className="text-zinc-600 text-xl mt-2 ">{value.pera}</p>
                    </div>
                </div>
            )
        })
    return (
        <section>
            <div className="max-w-[1400px] w-full mx-auto px-10 py-15">
                <Heading Highlight="Our " Normal=" Values"/>
                <div className="flex md:flex-row flex-col md:gap-5 gap-15 mt-15 ">
                        {/* Left Value */}
                        <div className="md:min-h-100 gap-15 flex flex-col justify-between" >
                            {LeftVal}
                        </div>
                        {/* Center Value */}
                        <div className="md:flex w-1/2 hidden">
                            <img src={Fullvegi} alt="" />
                        </div>
                        {/* Right Value */}
                        <div className="md:min-h-100 gap-15 flex flex-col justify-between">
                        {RightVal}
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Values

let values = [
    {
        id:1,
        title:'Trust',
        pera:'It is a long established fact that a reader will be distracted by the readable.',
        icon:<FaHeart/>,
    },
    {
        id:2,
        title:'Always Fresh',
        pera:'It is a long established fact that a reader will be distracted by the readable.',
        icon:<GiThreeLeaves />,
    },
    {
        id:3,
        title:'Food Safety',
        pera:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon:<FaShieldHalved />,
    },
    {
        id:4,
        title:'100% Organic',
        pera:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon:<FaSeedling />,
    },
]