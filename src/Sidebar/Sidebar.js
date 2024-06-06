import React from 'react';
import logoImage from './logos.jpg';
import Table from '../Tbale/Table';
import Output from '../Show-Output/Output';
import { useState } from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Colors } from 'chart.js';


const Sidebar = () => {





    return (

        <BrowserRouter>
            <Routes >
                <Route path='/shart' element={<Output />} />
                <Route path='/table' element={<Table />} />
            </Routes>



            <aside className="text-white w-[250px] pl-5 h-screen bg-gradient-to-br from-[#0048bd] to-[#44a7fd] rounded-tr-[80px]">
                <p className="m-0 py-10">Menu</p>
                <div className="flex items-center text-sm text-white gap-5 py-3 pl-8 no-underline hover:text-[#3f5efb] hover:bg-white hover:outline-none hover:relative hover:bg-white hover:rounded-tl-[20px] hover:rounded-bl-[20px]">
                    <i className="fa-solid fa-house font text-lg	"></i>
                    <a

                        href="javascript:void(0)"
                        style={{ position: 'relative' }}
                    >

                        Dashboard
                    </a>
                </div>
                <a
                    href="javascript:void(0)"
                    className="text-sm text-white block py-3 pl-8 no-underline hover:text-[#3f5efb] hover:bg-white hover:outline-none hover:relative hover:bg-white hover:rounded-tl-[20px] hover:rounded-bl-[20px]"
                    style={{ position: 'relative' }}
                >
                    <i className="fa fa-laptop mr-1" aria-hidden="true"></i>
                    Computers
                </a>
                <a
                    href="javascript:void(0)"
                    className="text-sm text-white block py-3 pl-8 no-underline hover:text-[#3f5efb] hover:bg-white hover:outline-none hover:relative hover:bg-white hover:rounded-tl-[20px] hover:rounded-bl-[20px]"
                    style={{ position: 'relative' }}
                >
                    <i className="fa fa-clone mr-1" aria-hidden="true"></i>
                    Shared with me
                </a>
                <a
                    href="javascript:void(0)"
                    className="text-sm text-white block py-3 pl-8 no-underline hover:text-[#3f5efb] hover:bg-white hover:outline-none hover:relative hover:bg-white hover:rounded-tl-[20px] hover:rounded-bl-[20px]"
                    style={{ position: 'relative' }}
                >
                    <i className="fa fa-star-o mr-1" aria-hidden="true"></i>
                    Starred
                </a>
                <a
                    href="javascript:void(0)"
                    className="text-sm text-white block py-3 pl-8 no-underline hover:text-[#3f5efb] hover:bg-white hover:outline-none hover:relative hover:bg-white hover:rounded-tl-[20px] hover:rounded-bl-[20px]"
                    style={{ position: 'relative' }}
                >
                    <i className="fa fa-trash-o mr-1" aria-hidden="true"></i>
                    Trash
                </a>
            </aside>
        </BrowserRouter>
    );
};

export default Sidebar;
