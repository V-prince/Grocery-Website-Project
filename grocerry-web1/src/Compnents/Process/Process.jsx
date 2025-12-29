import Heading from "../Home/Heading/Heading"
import { PiPlantFill } from "react-icons/pi";
import { PiFactory } from "react-icons/pi";
import { PiMedal } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
const Process = () => {
    let RenderSteps = Steps.map(step=>{
        return(
            <div className={`flex-1 basis-[300px] ${step.id % 2 === 0 && "md:-mt-100"}`}>
                <span className="flex items-center justify-center mx-auto w-18 h-18 text-8xl text-white bg-zinc-800 outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed rounded-full">{step.number}</span>
                <div className="flex items-center gap-x-5 mt-10">
                        <span className="flex items-center justify-center bg-gradient-to-b from-orange-400 to-orange-500 text-white text-4xl p-2 rounded-full w-15 h-15">{step.icon}</span>
                    
                    <div className="flex-1">
                        <h4 className="text-zinc-800 text-2xl font-bold">{step.title}</h4>
                        <p className="text-zinc-600 items-center justify-center gap-y-17 mt-2">{step.pera}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section>
            <div className="max-w-[1400px] mx-auto px-10 py-20 ">
                <div className="mr-auto w-fit">
                    <Heading Highlight="Our " Normal="Process" />
                </div>
                <div className="flex flex-wrap gap-y-17 items-center justify-center md:pt-50 md:mt-20 mt-10">
                    {RenderSteps}
                </div>
            </div>
        </section>
    )
}

export default Process

const Steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        pera: 'It is a long established fact that a reader',
        icon:<PiPlantFill />,
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        pera: 'It is a long established fact that a reader',
        icon:<PiFactory />,
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Control',
        pera: 'It is a long established fact that a reader',
        icon:<PiMedal />,
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: 'Logistics',
        pera: 'It is a long established fact that a reader',
        icon:<CiDeliveryTruck />,

    },

]