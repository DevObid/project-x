import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Table from '../Tbale/Table';
import Output from '../Show-Output/Output';
import { Darkcontext } from '../Nvigationbar/Navigate';

const Sidebar = () => {
    const isDarkMode = useContext(Darkcontext);

    const converttodarkmode = () => {
        console.log(isDarkMode);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/chart' element={<Output />} />
                <Route path='/table' element={<Table />} />
            </Routes>
            <div className="h-[100vh]">
                <nav style={{ backgroundColor: "#111827" }} className={`fixed top-0 left-0 h-[100vh] 		 dark:bg-gray-800 p-3 transition-all duration-300 w-64`}>
                    <header className="relative flex items-center">
                        <div className="flex items-center">
                            <span className="mr-3">
                                <img src="logo.png" alt="logo" className="w-10 rounded-lg" />
                            </span>
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-800 dark:text-gray-200">Codinglab</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Web developer</span>
                            </div>
                        </div>
                    </header>
                    <div className="mt-10">
                        <div className="relative mb-6">
                            <input

                                type="text"
                                placeholder="Search Games..."
                                className="w-full h-10 pl-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg focus:outline-none text-gray-800 dark:text-gray-200"
                            />
                            <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-white dark:text-gray-400"></i>
                        </div>
                        <ul>
                            <li className="mb-2">

                                <Link to="/chart" className="flex hover:bg-[#1A56DB] gap-4 items-center p-2 text-white dark:text-gray-200 rounded-lg  hover:text-white transition-colors duration-200">
                                    <i className="fa-solid fa-house"></i>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/table" className="flex hover:bg-[#1A56DB] gap-4 items-center p-2 text-white dark:text-gray-200 rounded-lg  hover:text-white transition-colors duration-200">
                                    <i className="fa-solid fa-house"></i>
                                    <span>Table</span>
                                </Link>
                            </li>
                            <li className="mb-2 absolute w-40 bottom-0">
                                <a href="#" onClick={converttodarkmode} className="flex gap-4 items-center w-full p-2 text-white dark:text-gray-200 rounded-lg hover:bg-[#1A56DB] hover:text-white transition-colors duration-200">
                                    <i className="fa-solid fa-house"></i>
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
