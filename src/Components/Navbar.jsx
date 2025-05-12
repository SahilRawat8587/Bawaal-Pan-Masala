import { useState } from "react";
import { assets } from "../assets/assets";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4  bg-[#EFAC2A] relative transition-all">

            <Link to="/">
                <img className="h-9" src={assets.logo} alt="dummyLogoColored" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/product">Products</Link>
                <Link to="/contact">Contact</Link>

               

                

                
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <Menu />
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-[#EFAC2A] shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-50`}>
                <Link to="/"  className="block" onClick={() => setOpen(false)}>Home</Link>
                <Link to="/about"  className ="block" onClick={() => setOpen(false)}>About</Link>
                <Link to="/product" className="block" onClick={() => setOpen(false)}>Products</Link>
                <Link to="/contact" className="block" onClick={() => setOpen(false)}>Contact</Link>
              
            </div>

        </nav>
    )
}

export default Navbar;