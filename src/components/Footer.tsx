
import { NavLink } from "react-router-dom";

import { footerLinks } from "../constants"

const Footer = () => (
  <footer className='w-full mx-auto text-black-100 border-t border-gray-400 shrink-0'>
    <div className='max-w-[1440px] mx-auto flex md:flex-row sm:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <img src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
        <p className='text-base text-gray-700'>
          Gallery 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="text-xl text-slate-500 font-bold mb-4">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.url}
                  className="text-gray-500  hover:text-gray-700 hover:scale-125 transition ease-in-out duration-700"
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

  </footer>
);

export default Footer;