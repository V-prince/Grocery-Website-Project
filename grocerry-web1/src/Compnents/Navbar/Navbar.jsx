import { FaHeart } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = () => {
    let carts = useSelector(state => state.cartslice)
    let Hart = useSelector(state => state.Hart)

    let [showmenu, setShowmenu] = useState(false)
    let [isScrolled, setisScrolled] = useState(false);
    let ToggleMenu = () => {
        setShowmenu(!showmenu)
    }
    useEffect(() => {
        let Handlescrold = () => {
            setisScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', Handlescrold)

        return () => window.removeEventListener('scroll', Handlescrold)
    }, [])

    return (
        <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled && "drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]"}`}>
            <nav className="max-w-[1400 px] mx-auto px-10 md:h-[14vh] h-[12vh] items-center flex justify-between ">
                {/*Nav-Logo*/}
                <Link to="/" className="text-3xl font-extrabold">Gr<span className="text-orange-400">O</span>cery</Link>
                {/*Nav-Menu*/}
                <ul className="md:flex gap-x-15 items-center justify-between hidden ">
                    <li>
                        <Link to="/" className="font-semibold text-orange-500 tracking-wider hover:text-orange">Home</Link>
                    </li>
                    <li>
                        <Link to="/About Us" className="font-semibold text-zinc-800 tracking-wider hover:text-orange-500 ">about Us</Link>
                    </li>
                    <li>
                        <a href="#" className="font-semibold text-zinc-800 tracking-wider hover:text-orange-500">Process</a>
                    </li>
                    <li>
                        <Link to="/Contect Us" className="font-semibold text-zinc-800 tracking-wider hover:text-orange-500">Contect Us</Link>
                    </li>
                </ul>
                {/* {Nav-Action} */}
                <div className="flex gap-x-3 items-center">
                    {/* Input field */}
                    <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
                        <input type="text" className="flex-1 h-[5vh] px-3 focus:outline-none" name="text" id="text" placeholder="Search..." autoComplete="off" />
                        <button className="bg-gradient-to-b from-red-400 to-orange-500 w-10 h-10 flex items-center justify-center text-white px-2 rounded-full text-xl"><GoSearch /></button>
                    </div>
                    <Link to="/Favourite" className="text-zinc-800 text-2xl relative"><FaHeart />{Hart.length != 0 && <div className="bg-red-600 flex items-center justify-center h-5 w-5 text-center text-lg rounded-full text-white absolute left-3 -top-1"><span>{Hart.length}</span></div>}</Link>
                    <Link to="/Cart" className="text-zinc-800 text-2xl relative flex"><FaShoppingBasket />{carts.length != 0 && <div className="bg-red-600 flex items-center justify-center h-5 w-5 text-center text-lg rounded-full text-white absolute left-4 -top-1"><span>{carts.length}</span></div>}</Link>
                    {/* Hamburger */}
                        <a href="#" className="text-zinc-800 text-3xl hover:text-orange-500 md:hidden" onClick={ToggleMenu}>
                            {showmenu ? <TbMenu3 /> : <IoMenu />}
                        </a>
                </div>
                {/* Mobile Menu */}
                <ul className={`flex flex-col gap-x-15 gap-y-12 items-center bg-orange-500/15 backdrop-blur-xl rounded-lg p-10 justify-between md:hidden absolute top-30 ${showmenu ? "left-1/2" : "-left-full"} shadow-xl transation-all duration-50  transform -translate-x-1/2`}>
                    <li>
                        <Link to="/" className="font-semibold text-orange-500 tracking-wider hover:text-orange">Home</Link>
                    </li>
                    <li>
                        <Link to="/About Us" className="font-semibold text-zinc-800 tracking-wider hover:text-orange-500 ">about Us</Link>
                    </li>
                    <li>
                        <a href="#" className="font-semibold text-zinc-800 tracking-wider hover:text-orange-500">Process</a>
                    </li>
                    <li>
                        <Link to="/Contect Us" className="font-semibold text-zinc-800 tracking-wider hover:text-orange-500">Contect Us</Link>
                    </li>
                    <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden">
                        <input type="text" className="flex-1 h-[5vh] px-3 focus:outline-none" name="text" id="text" placeholder="Search..." autoComplete="off" />
                        <button className="bg-gradient-to-b from-red-400 to-orange-500 w-10 h-10 flex items-center justify-center text-white px-2 rounded-full text-xl"><GoSearch /></button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar