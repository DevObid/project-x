import React from 'react';
import logoImage from './logos.jpg';


const Sidebar = () => {
    return (
        <div className="min-h-screen flex flex-row bg-gray-100">
            <div className="flex flex-col h-screen w-56 bg-white rounded-r-3xl overflow-hidden">
                <div className="flex items-center justify-start  h-20 mt-9  w-full ">
                    <img className="h-44" src={logoImage} />
                </div>
                <ul className="flex h-screen  flex-col py-4 relative">
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <i className="bx bx-home"></i>
                            </span>
                            <span className="text-sm font-medium">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <i className="bx bx-music"></i>
                            </span>
                            <span className="text-sm font-medium">Music</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <i className="bx bx-drink"></i>
                            </span>
                            <span className="text-sm font-medium">Drink</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <i className="bx bx-shopping-bag"></i>
                            </span>
                            <span className="text-sm font-medium">Shopping</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <i className="bx bx-chat"></i>
                            </span>
                            <span className="text-sm font-medium">Chat</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <i className="bx bx-user"></i>
                            </span>
                            <span className="text-sm font-medium">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <i className="bx bx-bell"></i>
                            </span>
                            <span className="text-sm font-medium">Notifications</span>
                            <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                        </a>
                    </li>
                    <li className="absolute bottom-0 w-full">
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <i className="bx bx-log-out"></i>
                            </span>
                            <span className="text-sm font-medium">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
