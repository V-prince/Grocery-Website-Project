import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="bg-zinc-300 py-20">
            <div className="max-w-[1400px] px-10 mx-auto gap-y-10 flex flex-wrap ">
                <div className="flex-1 basis-[300px]">
                    <a href="#" className="text-3xl font-extrabold">Gr<span className="text-orange-400">O</span>cery</a>
                    <p className="text-zinc-600 mt-6 max-w-[350px]">Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                    <p className="text-zinc-800 mt-6 ">2025 &copy; All Rights Reserved</p>
                </div>
                <ul className="flex-1 ">
                    <li className="text-zinc-800 text-2xl font-bold">Company</li>
                    <li className="mt-6"><Link to="/About Us" className="text-zinc-800 hover:text-orange-500">About</Link></li>
                    <li className="mt-6"><a href="#" className="text-zinc-800 hover:text-orange-500">FAQ's</a></li>
                </ul>

                <ul className="flex-1">
                    <li className="text-zinc-800 text-2xl font-bold">Support</li>
                    <li className="mt-6"><Link to="/" className="text-zinc-800 hover:text-orange-500">Support center</Link></li>
                    <li className="mt-6"><a href="#" className="text-zinc-800 hover:text-orange-500">Feedback</a></li>
                    <li className="mt-6"><Link to="/Contect Us" className="text-zinc-800 hover:text-orange-500">Contact Us</Link></li>
                </ul>

                <div className="flex-1">
                    <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
                    <p className="mt-6 text-zinc-600">Questions or Feedback? <br /> We'd love to hear from you.</p>
                    <div className="flex items-center bg-white rounded-lg mt-6 p-1">
                        <input type="email" name="email" id="email" placeholder="Enter email.." autoComplete="off" className="flex-1  h-[5vh] pl-4 pr-5 focus:outline-none" />
                        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-xl text-white px-5 py-4 rounded-lg hover:to-orange-600 cursor-pointer">
                            <GrNext />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;