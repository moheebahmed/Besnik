import { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full pt-5 pb-4 bg-white sticky top-0 z-50 shadow-sm">
            <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">

                {/* Logo */}
                <a href="#"><img src={logo} className="h-8 object-contain" alt="Besnik" /></a>

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        <li><a href="#" className="font-roboto text-[15px] text-gray-800 hover:text-blue-600 transition-colors">Home</a></li>
                        <li><a href="#" className="font-roboto text-[15px] text-gray-500 hover:text-blue-600 transition-colors">About us</a></li>
                        <li><a href="#" className="font-roboto text-[15px] text-gray-500 hover:text-blue-600 transition-colors">Features</a></li>
                        <li><a href="#" className="font-roboto text-[15px] text-gray-500 hover:text-blue-600 transition-colors">Contact us</a></li>
                    </ul>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <a href="#" className="font-roboto text-[15px] text-[#2289FF] border border-[#2289FF] px-6 py-2.5 rounded-lg hover:bg-blue-50 transition-colors">Sign in</a>
                    <a href="#" className="font-roboto text-[15px] text-white bg-[#2289FF] px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">Sign up</a>
                </div>

                {/* Mobile Hamburger */}
                <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F2B4A" strokeWidth="2" strokeLinecap="round">
                        {menuOpen
                            ? <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></>
                            : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>
                        }
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-4">
                    <a href="#" className="font-roboto text-[15px] text-gray-800">Home</a>
                    <a href="#" className="font-roboto text-[15px] text-gray-500">About us</a>
                    <a href="#" className="font-roboto text-[15px] text-gray-500">Features</a>
                    <a href="#" className="font-roboto text-[15px] text-gray-500">Contact us</a>
                    <div className="flex gap-3 pt-2">
                        <a href="#" className="flex-1 text-center font-roboto text-[15px] text-[#2289FF] border border-[#2289FF] px-4 py-2.5 rounded-lg">Sign in</a>
                        <a href="#" className="flex-1 text-center font-roboto text-[15px] text-white bg-[#2289FF] px-4 py-2.5 rounded-lg">Sign up</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
