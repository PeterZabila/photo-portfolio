import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

type TserviceCard = {
    id: number;
    name: string;
    src: string;
    description: string;
}

const ImageCard = ({ id, name, src, description }: TserviceCard) => {

    const handleCategory = (name: string) => {
        localStorage.setItem("category", name);
    }

    return (
        <motion.div className='relative flex flex-col w-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-[1px] rounded-[20px] shadow-xl '
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 + id / 2 }}
        >
            <div>
                <img
                    src={src}
                    alt='web-development'
                    className='w-full h-[250px] object-cover rounded-t-[20px] opacity-80'
                />
            </div>
            <div className='p-2 flex flex-col'>
                <h3
                    className='text-slate-400 text-[20px] font-bold text-center'
                >
                    {name}
                </h3>
                <motion.p
                    className='font-cormorant text-center text-slate-600 overflow-hidden p-[10px] pb-[30px]'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    {description}
                </motion.p>
                <div className='absolute bottom-2 left-[50%] translate-x-[-50%] justify-center items-center'>
                    <NavLink to="/gallery" >
                        <button
                            onClick={() => handleCategory(name)}
                            className='text-2xl text-slate-400  hover:text-slate-900 hover:scale-125 transition ease-in-out duration-500'
                        >
                            View
                        </button>
                    </NavLink>
                </div>
            </div>
        </motion.div>
    )
}

export default ImageCard;