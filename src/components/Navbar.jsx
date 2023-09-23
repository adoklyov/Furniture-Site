import React, {useState} from 'react'
import { BiSolidHomeHeart, BiMenuAltRight } from "react-icons/bi";

function Navbar() {
    const [nav, setNav] = useState(false) 
    const handleNav = () => {
        setNav(!nav);
}
    return (
        // Nav Menu + Mobile Nav Menu
        <div className='flex justify-between items-center max-w[1240px] h-24 mx-auto px-5 text-black bg-white'>
            <div>
                <BiSolidHomeHeart size={45}/>
            </div>
            <h1 className='w-full text-3xl font-bold text-[black]'>Furniture</h1>
            <ul className='hidden md:flex'>
                <li className='p-5'>Home</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Categories</li>
                <li className='p-5'>Products</li>
                <li className='p-5'>Contact</li>
            </ul>
            <div onClick={handleNav} >
                {!nav ? <BiMenuAltRight size={20}/> : <BiMenuAltRight size={45} />}
            </div>
            
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-200 transition ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[black] m-4'>Furniture</h1>
                <ul className='pt-3 uppercase'>
                    <li className='p-5 border-b border-t border-slate-900'>Home</li>
                    <li className='p-5 border-b border-slate-900'>About</li>
                    <li className='p-5 border-b border-slate-900'>Categories</li>
                    <li className='p-5 border-b border-slate-900'>Products</li>
                    <li className='p-5 border-b border-slate-900'>Contact</li> 
                </ul>
            </div>
        </div>
  );
};

export default Navbar;