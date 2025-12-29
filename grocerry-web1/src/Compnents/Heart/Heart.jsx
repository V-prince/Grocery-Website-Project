
import { useSelector } from 'react-redux';
import { Hartcard } from './Hartcard'

export const Heart = () => {
    let Hart = useSelector(state => state.Hart)
    return (
        <div className="max-w-[1400px] px-10 mx-auto ">
            <div className='grid md:grid-cols-4 grid-cols-1 gap-x-6 my-35'>
                {Hart.map(item => (
                    <Hartcard key={item.id} product={item} />
                ))}
            </div>
            {
                Hart.length == 0 && <p className='text-zinc-800 font-bold text-4xl text-center mb-[200px]'>Your Whitelist Is Empty !!</p>
            }
        </div>

    )
}
