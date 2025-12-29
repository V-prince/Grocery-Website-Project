
const Banner = ({title,bgImage}) => {
    return (
        <div className=' h-[50vh] mt-25 flex items-center justify-center bg-center bg-cover relative' style={{backgroundImage:`url(${bgImage})`}}>
            <h2 className='md:text-5xl text-4xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-40 '>{title}</h2>
            <div className="bg-black/30 absolute inset-0">
            </div>
        </div>
    )
}

export default Banner