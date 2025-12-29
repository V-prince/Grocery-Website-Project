const Heading = ({Highlight,Normal}) =>{
    return (
        <div className="py-20">
                <div className="w-fit mx-auto">
                    <h2 className="md:text-5xl text-zinc-800 text-4xl font-bold "><span className="text-orange-500">{Highlight}</span>{Normal}</h2>
                    <div className="w-35 h-1 md:mt-6 mt-3 bg-orange-300 ml-auto"></div>
                </div>
            </div>
    )
}

export default Heading