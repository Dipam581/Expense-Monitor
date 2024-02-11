import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/jpeg;base64,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"
                            className="mr-3 h-14"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            // className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            className=''
                        >
                            
                        </Link>
                        <Link
                            to="#"
                            // className="text-white bg-green-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            className=''
                        >
                            
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-4 justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ml-10">
                        <div className="flex-1 font-semibold">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-700" : "text-blue-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Home
                            </NavLink>
                        </div>

                        <div className="flex-1 font-semibold">
                            <NavLink
                                to="/analysis"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-700" : "text-blue-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Spend Analysis
                            </NavLink>
                        </div>

                        {/* <div className="flex-1 font-semibold">
                            <NavLink
                                to="/github"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-700" : "text-blue-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Github
                            </NavLink>
                        </div> */}

                    </div>


                    {/* <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ml-40" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-700" : "text-orange-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/analysis"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-700" : "text-orange-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Analysis
                                </NavLink>
                            </li>


                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-700" : "text-orange-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>


                        </ul>
                    </div> */}
                </div>
            </nav>
        </header>
    );
}

