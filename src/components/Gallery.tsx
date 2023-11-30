import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import img from '@/assets/images/wedding1/01.jpg'
import img1 from '@/assets/images/wedding1/02.jpg'
import img2 from '@/assets/images/wedding1/03.jpg'
import img3 from '@/assets/images/wedding1/04.jpg'
import img4 from '@/assets/images/wedding1/05.jpg'
import img5 from '@/assets/images/wedding1/06.jpg'
import mod1 from '@/assets/images/portrait/mod1.jpg';
import mod2 from '@/assets/images/portrait/mod2.jpg';
import mod3 from '@/assets/images/portrait/mod3.jpg';
import mod4 from '@/assets/images/portrait/mod4.jpg';
import fam from '@/assets/images/family/zol.jpg';
import fam1 from '@/assets/images/family/bud.jpeg';
import fam2 from '@/assets/images/family/gul.jpeg';

const data = [
  {
    id: 1,
    image: img,
    caption: "S&A",
    tag: 'w1'
  },
  {
    id: 2,
    image: img1,
    caption: "L&A",
    tag: 'w2'
  },
  {
    id: 3,
    image: img2,
    caption: "O&Z",
    tag: 'w3'
  },
  {
    id: 4,
    image: img3,
    caption: "T&A",
    tag: 'w4'
  },
  {
    id: 5,
    image: img4,
    caption: "L&R",
    tag: 'w5'
  },
  {
    id: 6,
    image: img5,
    caption: "O&V",
    tag: 'w6'
  },
];
const portraitData = [
  {
    id: 1,
    image: mod1,
    caption: "Olena",
    tag: 'k'
  },
  {
    id: 2,
    image: mod2,
    caption: "Yana",
    tag: 'c'
  },
  {
    id: 3,
    image: mod3,
    caption: "Anastasia",
    tag: 'l'
  },
  {
    id: 4,
    image: mod4,
    caption: "Alyona",
    tag: 'a'
  },
]
const familyData = [
  {
    id: 1,
    image: fam,
    caption: "Zolotonosha",
    tag: 'zol'
  },
  {
    id: 2,
    image: fam1,
    caption: "Oblast",
    tag: 'bud'
  },
  {
    id: 3,
    image: fam2,
    caption: "Cherkasy",
    tag: 'gul'
  },
]

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [category, setCategory] = useState<string | null>('Wedding');
  const [tag, setTag] = useState("");

  useEffect(() => {
    setCategory(localStorage.getItem("category"))
  }, [])

  useEffect(() => void {
    if (tag: string) {
      if (window && containerRef.current) {
        window.cloudinary.galleryWidget({
          container: containerRef.current,
          cloudName: import.meta.env.VITE_CLOUDINARY_CLOUDNAME,
          aspectRatio: '16:9',
          mediaAssets: [{ tag }],
          carouselLocation: 'bottom'
        })
          .render()
      } else {
        return null
      }
    }

  }, [tag]);

  const executeScroll = () => {
    containerRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSetTag = (tag: string) => {
    localStorage.setItem('tag', tag);
    setTag(tag);
    executeScroll();
  }

  if (category) {
    if (category === "Wedding") {
      return (
        <section className='flex flex-col w-[80%] mx-auto mt-[60px]'>
          <NavLink to="/" className="mb-[20px] w-[120px] text-center bg-slate-400 rounded-md hover:bg-slate-200 hover:scale-110 ease-linear duration-300">Back to Main</NavLink>
          <ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 px-[20px] mb-[60px]'>
            {data.map(item => (
              <li key={item.id} className="relative rounded-[5px]" onClick={() => {
                handleSetTag(item.tag);
              }}>
                <img
                  src={item.image}
                  alt={item.tag}
                  loading="lazy"
                  onClick={() => {
                    handleSetTag(item.tag);
                  }}
                  className='rounded-xl cursor-pointer'
                />
                <p 
                 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-25 xs:text-3xl md:text-5xl'
                
                // style={{
                //   position: "absolute",
                //   top: "50%",
                //   left: "50%",
                //   transform: "translate(-50%, -50%)",
                //   opacity: "0.3",
                //   fontSize: "50px"
                // }}
                >{item.caption}</p>
              </li>
            ))}
          </ul>
          <motion.div ref={containerRef} className='w-full p-5 mt-[60px]'></motion.div>
        </section>
      )
    }
    if (category === "Portrait") {
      return (
        <section className='flex flex-col w-[80%] mx-auto mt-[20px]'>
          <NavLink to="/" className="mb-[20px] w-[120px] text-center bg-slate-400 rounded-md hover:bg-slate-200 hover:scale-110 ease-linear duration-300">Back to Main</NavLink>
          <ul className='grid grid-cols-3 gap-2 px-[20px] mb-[60px]'>
            {portraitData && portraitData.map(item => (
              <li key={item.caption} style={{ position: "relative", borderRadius: "5px" }} onClick={() => setTag(item.tag)}>
                <img
                  src={item.image}
                  alt={item.tag}
                  loading="lazy"
                  onClick={() => {
                    handleSetTag(item.tag);
                  }}
                  className='rounded-xl cursor-pointer'
                />

                <p 
               
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: "0.3",
                  fontSize: "50px"
                }}
                >{item.caption}</p>
              </li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            ref={containerRef} className='w-full p-5 mt-[20px]'>
          </motion.div>
        </section>
      )
    }
    if (category === "Family") {
      return (
        <section className='flex flex-col w-[80%] mx-auto mt-[60px]'>
          <NavLink to="/" className="mb-[20px] w-[120px] text-center bg-slate-400 rounded-md hover:bg-slate-200 hover:scale-110 ease-linear duration-300">Back to Main</NavLink>
          <ul className='grid grid-cols-3 gap-2 px-[20px] mb-[60px]'>
            {familyData && familyData.map(item => (
              <p key={item.caption} style={{ position: "relative" }} onClick={() => setTag(item.tag)}>
                <img
                  src={item.image}
                  alt={item.tag}
                  loading="lazy"
                  onClick={() => {
                    handleSetTag(item.tag);
                  }}
                  className='rounded-xl cursor-pointer'
                />
                <p style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: "0.3",
                  fontSize: "50px"
                }}>{item.caption}</p>
              </p>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            ref={containerRef} className='w-full p-5 mt-[20px]'>
          </motion.div>
        </section>
      )
    }
  } else {
    return (
      <h1>Loading... Please wait</h1>
    )
  }
}

export default Gallery;