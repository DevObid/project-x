import React, { useState } from 'react';

const Navigate = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div >
            <div className="fixed  left-60 top-5 h-16 right-0 items-center justify-center flex   bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">


                <div className="flex  justify-end gap-16  items-center w-full  ">


                    <button
                        type="button"
                        className={`hs-dark-mode-active:${isDarkMode ? 'block' : 'hidden'} group h-9 w-9 justify-center flex items-center text-gray-600 hover:text-blue-600  dark:text-neutral-400 dark:hover:text-neutral-500 "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800  dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"`}
                        onClick={toggleTheme}
                        data-hs-theme-click-value="light"
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
                    <img class="w-6 h-6 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" />
                </div>
            </div>
        </div>
    );
};

export default Navigate;
