import React, { useState, useRef, useEffect, createContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';

export const Darkcontext = createContext();

const Navigate = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const refnav = useRef(null);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        if (refnav.current) {
            if (isDarkMode) {
                refnav.current.classList.add("bg-black");
                refnav.current.classList.remove("bg-white");
            } else {
                refnav.current.classList.add("bg-white");
                refnav.current.classList.remove("bg-black");
            }
        }
    }, [isDarkMode]);

    return (
        <Darkcontext.Provider value={isDarkMode}>
            <div>
                <Sidebar />
                <div ref={refnav} className="w-[calc(100%-290px)] ml-[290px]  right-0 h-16 absolute top-0 flex items-center justify-center bg-white border-gray-200 shadow-sm p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <div className="flex justify-between gap-16 items-center w-full">
                        <h3 className="ml-16">Hello Name</h3>
                        <img className="w-6 h-6 p-1 rounded-full ring-2 mr-[800px] ring-gray-300 dark:ring-gray-500" src="user.webp" alt="User" />
                        <button
                            type="button"
                            className={`group h-9 w-9 justify-center flex items-center hover:text-blue-600 dark:text-neutral-400 dark:hover:text-neutral-500 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}
                            onClick={toggleTheme}
                        >
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M12 2v2"></path>
                                <path d="M12 20v2"></path>
                                <path d="m4.93 4.93 1.41 1.41"></path>
                                <path d="m17.66 17.66 1.41 1.41"></path>
                                <path d="M2 12h2"></path>
                                <path d="M20 12h2"></path>
                                <path d="m6.34 17.66-1.41 1.41"></path>
                                <path d="m19.07 4.93-1.41 1.41"></path>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </Darkcontext.Provider>
    );
};

export default Navigate;
