import { NavLink } from 'react-router-dom';
import decor from "../assets/dec.png"
import { useRef } from 'react';

const Hero = () => {
    const scrollRef = useRef<null | HTMLDivElement>(null);

    const handleScroll = () => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='w-[80%] mx-auto h-full relative flex items-center justify-center'>
                <video autoPlay muted plays-playsinline="true" src="/vid21.mp4" className=' inline-block w-full top-0 z-[-1] aspect-video' />
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='stroking absolute top-[40%] left-[50%] translate-x-[-50%]' >Welcome</h1>
                    <NavLink to="" className='absolute top-[70%] left-[50%] translate-x-[-60%] text-white hover:text-gray-300 text-lg text-center inline-block rounded-[20px] border-2 border-white hover:border-gray-300 py-[5px] px-[20px] w-[100px]'
                        onClick={handleScroll}
                    >Explore</NavLink>
                </div>
            </div>
            <p className='text-center text-slate-800 text-2xl border-b border-gray-200'>Photography is not only about sseing...<br /> It's about feeleing...<br /> A feeling of a momet, gentle touch<br />Feeling that your soulmate is next to you... <br />Till the END of time...</p>
            <img src={decor} alt="decorative element" className='sx:w-[250px] md:w-[350px] lg:w-[350px] bg-transparent inline-block' />
            <div ref={scrollRef}></div>
        </div>

    )
}

export default Hero