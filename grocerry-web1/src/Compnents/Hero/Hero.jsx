import Grocery from '../../images/grocery.png'
import Button from '../Button/Button'
const Hero = () => {
    return (
        <section >
            <div className="max-1-[1400px] min-h-screen mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35">
                {/* Hero-content */}
                <div className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quelity...</span>
                    <h1 className='md:text-7xl/20 text-5xl/15 font-bold mt-3'>
                        Tasty Organic <br/><span className='text-orange-500'> Fruits </span> & <span className='text-orange-500'> Veggies </span><br /> In Your City
                    </h1>
                    <p className='text-zinc-600 md:text-lg text-md mt-5 mb-5 max-w-[530px]'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                    <Button content="Shop Now" />
                </div>
                {/* Hero-image */}
                <div className='flex-1'>
                    <img src={Grocery} alt="Hero-image" />
                </div>
            </div>
        </section>
    )
}

export default Hero