import Heading from "../Home/Heading/Heading"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Customer1 from '../../images/customer1.jpg'
import Customer2 from '../../images/customer2.jpg'
import Customer3 from '../../images/customer3.jpg'
import Customer4 from '../../images/customer4.jpg'
import Customer5 from '../../images/customer5.jpg'
import { BsStarFill } from "react-icons/bs";
const Testimonial = () => {

    return (
        <section>
            <div className="max-w-[1400px] mx-auto px-10 py-10 ">
                <Heading Highlight="Customers " Normal="Saying" />
                <div className="flex py-4 justify-end gap-x-3 ">
                    <button className="flex custom-prev  text-zinc-800 items-center justify-center p-2  h-11 w-11 bg-zinc-200 rounded-lg bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:cursor-pointer hover:text-white"><FaArrowLeft /></button>
                    <button className="flex custom-next text-zinc-800 items-center justify-center p-2 h-11 w-11 bg-zinc-200 rounded-lg bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:cursor-pointer hover:text-white"><FaArrowRight /></button>
                </div>
                <Swiper navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }} pagination={{
                    clickable: true,
                }}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }} 
                    loop={true}
                    modules={[Pagination, Navigation]} className="mySwiper">
                    {
                        review.map(item => {
                            return (
                                <SwiperSlide className=" bg-zinc-200 rounded-xl p-8">
                                    <div className="flex gap-5 items-center">
                                        <div className="w-16 h-16 bg-red-500 rounded-full outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                                            <img src={item.image} className=" w-full h-full" /></div>
                                        <div>
                                            <h5 className="text-xl font-bold">{item.name}</h5>
                                            <p className="text-zinc-600">{item.profession}</p>
                                            <span className="flex text-yellow-400 mt-2 text-xl gap-1">{Array.from({ length: item.rating }, (_, index) => (
                                                <BsStarFill />
                                            ))}</span>
                                        </div>
                                    </div>
                                    <div className="mt-10 min-h-[15vh]">
                                        <p className="text-zinc-600">{item.para}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}
export default Testimonial


const review = [
    {
        id: 1,
        name: 'Emily Johnson',
        profession: 'Food Blogger',
        rating: 3,
        para: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!',
        image: Customer1,
    },
    {
        id: 2,
        name: 'David Smith',
        profession: 'Chef',
        rating: 5,
        para: 'As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!',
        image: Customer2,
    },
    {
        id: 3,
        name: 'Alya Zahra',
        profession: 'Model',
        rating: 3,
        para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
        image: Customer3,
    },
    {
        id: 4,
        name: 'Carlos Mendes',
        profession: 'Fitness Coach',
        rating: 4,
        para: 'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!',
        image: Customer4,
    },
    {
        id: 5,
        name: 'Natcha Phongchai',
        profession: 'Nutritionist',
        rating: 2,
        para: 'FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.',
        image: Customer5,
    },
]