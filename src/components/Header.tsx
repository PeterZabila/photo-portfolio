import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const links = [
    {
        path: "/about",
        title: "About"
    },
    {
        path: "/gallery",
        title: "Gallery"
    },
    {
        path: "/contacts",
        title: "Contacts"
    }
]

export const Navbar = () => {

    return (
        <header className="w-full z-10 mx-[auto]">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <div className="flex flex-row space-between">
                    <NavLink to="/" className="flex justify-center items-center cursor-pointer mr-4">
                        <img
                            src="/logo.svg"
                            width="100" height="45" alt="GalleryImage"
                            className="object-contain hover:scale-110 ease-linear duration-300"
                        />
                    </NavLink>
                    <div className="flex flex-row items-center text-gray-400">
                        {links.map((link, index) => <NavLink to={link.path} key={index} className="mr-2 hover:text-slate-700 hover:scale-125 transition ease-in-out duration-700">{link.title}</NavLink>
                        )}
                    </div>
                </div>
                <div>

                </div>
                <div className='flex flex-row items-center gap-4 mr-[20px]'>
                    <NavLink to="https://www.instagram.com/petro_zabila/">
                        <FaInstagram className='text-xl text-gray-900 hover:scale-150 transition ease-in-out duration-300' />
                    </NavLink>
                    <NavLink to="https://www.facebook.com/petro.zabila/">
                        <FaFacebookF className='text-xl text-blue-700 hover:scale-150 transition ease-in-out duration-300' />
                    </NavLink>
                    <NavLink to="https://www.pinterest.com/petrozabila/">
                        <FaPinterest className='text-xl text-red-700 hover:scale-150 transition ease-in-out duration-300' />
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/petro-zabila-685052257/">
                        <FaLinkedin className='text-xl text-violet-700 hover:scale-150 transition ease-in-out duration-300' />
                    </NavLink>
                </div>

            </nav>
        </header>
    )
}

export default Navbar;