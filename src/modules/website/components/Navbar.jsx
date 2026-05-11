import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, LayoutGrid, Search  } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const lastFocusedElementRef = useRef(null);
    const toggleOpenRef = useRef(null);

    const openMenu = () => {
        lastFocusedElementRef.current = document.activeElement;
        setIsMenuOpen(true);

        // Move focus into menu after it opens
        setTimeout(() => {
            if (menuRef.current) {
                menuRef.current.focus();
            }
        }, 0);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);

        // Restore focus
        if (lastFocusedElementRef.current?.focus) {
            lastFocusedElementRef.current.focus();
        }
    };

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMenuOpen]);

    // Prevent body scroll when menu is open on mobile
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <nav
            className="flex py-2 px-4 md:px-8 bg-white border-b border-slate-300 light:border-neutral-700 light:bg-neutral-900 min-h-[68px] relative z-20"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 w-full">
                <Link
                    to="/"
                    className="min-w-9 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                    <span className="sr-only">LearnCoz</span>
                    <img
                        src="./src/assets/images/logo.webp"
                        alt="LearnCoz logo"
                        className="h-9 w-auto"
                    />
                </Link>

                <div
                    ref={menuRef}
                    id="collapseMenu"
                    tabIndex="-1"
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } lg:block max-lg:bg-gray-50 max-lg:border-l max-lg:border-gray-300 max-lg:w-1/2 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-sm:w-full z-50 outline-none`}
                >
                    <div className="py-2 px-4 flex justify-between items-center border-b border-gray-300 sticky top-0 bg-white lg:hidden max-lg:min-h-[68px]">
                        <Link
                            to="/"
                            className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                        >
                            <span className="sr-only">LearnCoz</span>
                            <img
                                src="./src/assets/images/logo.webp"
                                alt="LearnCoz logo"
                                className="h-9 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            aria-controls="collapseMenu"
                            onClick={closeMenu}
                            className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                        >
                            <span className="sr-only">Close main menu</span>
                            <X className="size-4 fill-black" aria-hidden="true" />
                        </button>
                    </div>

                    <ul className="flex flex-col gap-8 font-semibold text-sm text-black lg:flex-row max-lg:p-6 lg:ml-12">
                        <li>
                            <button
                                type="button"
                                className="px-3 py-3 inline-flex items-center text-white border border-transparent focus:ring-4 focus:ring-blue-300 shadow font-medium leading-5 rounded text-sm px-3 py-2 focus:outline-none" style={{backgroundColor: '#0075eb'}}
                            >
                                <LayoutGrid width={20} height={20} className="mr-2"/>
                                All Courses
                            </button>
                        </li>
                        <li>
                            <form className="max-w-md mx-auto lg:max-w-lg lg:w-96">   
                                <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-gray-900 sr-only">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <Search className="w-4 h-4 text-gray-500" aria-hidden="true" />
                                    </div>
                                    <input 
                                        type="search" 
                                        id="search" 
                                        className="block w-full p-3 ps-9 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 shadow-sm placeholder:text-gray-500" 
                                        placeholder="Search" 
                                        required 
                                    />
                                    
                                </div>
                            </form>
                        </li>
                        <li className='lg:py-3'>
                            <Link
                                to="/about"
                                className="hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                            >
                                About
                            </Link>
                        </li>
                        <li className='lg:py-3'>
                            <Link
                                to="/blog"
                                className="hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                            >
                                Blog
                            </Link>
                        </li>
                        <li className='lg:py-3'>
                            <Link
                                to="/interview-questions"
                                className="hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                            >
                                Interview Questions
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-4 ml-auto">
                    <div className="flex items-center gap-4 pr-2">
                        <a
                            href="#"
                            className="flex flex-col items-center justify-center gap-0.5 text-[13px] font-semibold text-black hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                        >
                            <div className="relative">
                                <ShoppingCart className="cursor-pointer fill-current dark:fill-current inline w-5 h-5" />
                                <span className="absolute left-auto -ml-1 -top-0.5 rounded-full bg-red-500 px-1 py-0 text-xs text-white font-medium">
                                    3
                                </span>
                            </div>
                        </a>
                    </div>
                    

                        <Link
                            to="/login"
                            className="px-5 py-3 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                            Login
                        </Link>

                    <button
                        ref={toggleOpenRef}
                        type="button"
                        aria-controls="collapseMenu"
                        aria-expanded={isMenuOpen}
                        aria-haspopup="true"
                        onClick={openMenu}
                        className="cursor-pointer lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="size-7 fill-black" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;