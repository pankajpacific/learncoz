import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0d3250] pt-16 pb-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid min-[1200px]:grid-cols-3 gap-12 xl:gap-16">
                    {/* Left Column - Logo & Contact Info */}
                    <div className="min-[1200px]:max-w-md max-w-lg w-full">
                        <div className="space-y-3 text-sm text-white mt-6">
                            <p className="leading-relaxed flex items-start gap-2">
                                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                                <span>Address: 512/2, Kalyan Road, Bhiwandi, Thane(Mumbai), Maharashtra, India 421302</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone size={16} />
                                <a
                                    href="#"
                                    className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                                >
                                    +91-9389551374
                                </a>
                            </p>
                            <p className="flex items-center gap-2">
                                <Mail size={16} />
                                <a
                                    href="#"
                                    className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                                >
                                    contact@learncoz.com
                                </a>
                            </p>
                        </div>

                        {/* Social Icons */}
                        {/* <ul className="flex flex-wrap gap-6 mt-6">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-neutral-800 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:bg-neutral-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={16} className="fill-slate-50 text-slate-50" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-neutral-800 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:bg-neutral-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} className="text-slate-50" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-neutral-800 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:bg-neutral-700 transition-colors"
                  aria-label="X"
                >
                  <Twitter size={16} className="text-slate-50" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center bg-neutral-800 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:bg-neutral-700 transition-colors"
                  aria-label="Github"
                >
                  <Github size={16} className="text-slate-50" />
                </a>
              </li>
            </ul> */}
                    </div>

                    {/* Right Columns - Links & Newsletter */}
                    <div className="min-[1200px]:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 sm:gap-x-8">
                        {/* Services Column */}
                        <div className="space-y-6">
                            <h3 className="text-white text-sm font-semibold">COMPANY</h3>
                            <ul className="space-y-4 text-sm text-white font-normal">
                                <li>
                                    <Link
                                        to="/about"
                                        className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/blog"
                                        className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                                    >
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Platforms Column */}
                        <div className="space-y-6">
                            <h3 className="text-white text-sm font-semibold">WORK WITH US</h3>
                            <ul className="space-y-4 text-sm text-white font-normal">
                                <li>
                                    <Link
                                        to="/careers"
                                        className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                                    >
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/become-instructor"
                                        className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                                    >
                                        Become an instructor
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter Column */}
                        <div className="space-y-6 max-lg:col-span-full max-w-md">
                            <div>
                                <h3 className="text-white text-sm font-semibold mb-6">
                                    Join Our Newsletter
                                </h3>
                                <p className="text-white text-sm leading-relaxed">
                                    Subscribe to our newsletter and stay up to date with the
                                    latest news and updates.
                                </p>
                            </div>

                            <div className="bg-neutral-800 flex p-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 rounded-md">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="text-white text-sm w-full bg-transparent pl-2 outline-none"
                                />
                                <button
                                    type="button"
                                    className="py-2 px-3.5 text-sm rounded-md font-semibold text-nowrap cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-neutral-700" />

                {/* Bottom Bar */}
                <div className="flex flex-wrap gap-4 flex-col md:flex-row">
                    <ul className="flex flex-wrap gap-4 text-sm text-white font-normal">
                        <li>
                            <Link
                                to="/terms-of-service"
                                className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                            >
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/privacy-policy"
                                className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                            >
                                Privacy Policy
                            </Link>
                        </li>
           
                    </ul>

                    <p className="text-white text-sm md:ml-auto">
                        Copyright @2020 | Designed With by <a href="https://happiestech.com/" className="text-blue-400 hover:text-blue-300">Happiest Tech</a> - A Digital IT Hub
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;