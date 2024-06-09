import React from 'react';
import logoImage from './logos.jpg';
import Table from '../Tbale/Table';
import Output from '../Show-Output/Output';
import { useState } from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Colors } from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faChartBar,
    faBell,
    faChartPie,
    faHeart,
    faWallet,
    faSignOutAlt,
    faMoon,
    faSun,
    faSearch
} from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {





    return (

        <BrowserRouter>
            <Routes >
                <Route path='/shart' element={<Output />} />
                <Route path='/table' element={<Table />} />
            </Routes>









            <div className="h-[100vh] ">
                <nav className={`fixed top-0 left-0 h-[100vh] bg-white dark:bg-gray-800 p-3 transition-all duration-300 w-64`}>
                    <header className="relative flex items-center">
                        <div className="flex items-center">
                            <span className="mr-3">
                                <img src="logo.png" alt="" className="w-10 rounded-lg" />
                            </span>

                            <div className="flex flex-col">
                                <span className="font-bold text-gray-800 dark:text-gray-200">Codinglab</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Web developer</span>
                            </div>

                        </div>
                        {/* <button
                            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-lg transition-transform duration-300 ${isSidebarClosed ? '' : 'rotate-180'}`}
                        // onClick={() => setIsSidebarClosed(!isSidebarClosed)}
                        >
                            &gt;
                        </button> */}
                    </header>

                    <div className="mt-10">
                        <div className="relative mb-6">
                            <input
                                type="text"
                                placeholder="Search Games..."
                                className="w-full h-10 pl-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg focus:outline-none text-gray-800 dark:text-gray-200"
                            // onFocus={() => setIsSidebarClosed(false)}
                            />
                            <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400"></i>
                        </div>

                        <ul >


                            <li className="mb-2">


                                <a href="#" className="flex gap-4 items-center p-2 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200">
                                    <i class="fa-solid fa-house"></i>
                                    <span>Dashboard</span>

                                </a>
                            </li>

                            <li className="mb-2">


                                <a href="#" className="flex gap-4 items-center p-2 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200">
                                    <i class="fa-solid fa-house"></i>
                                    <span>Table</span>

                                </a>
                            </li>

                            <li className="mb-2 absolute bottom-0">


                                <a href="#" className="flex gap-4 items-center p-2 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200">
                                    <i class="fa-solid fa-house"></i>
                                    <span>Log-Out</span>

                                </a>
                            </li>
                        </ul>
                    </div>


                </nav>


            </div>








        </BrowserRouter>
    );
};

export default Sidebar;
