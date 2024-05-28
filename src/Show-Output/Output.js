
import { React, useRef, useState, createContext, useContext } from 'react';
import ChartComponent from './ChartComponent';
import { Contexttable } from '../Tbale/Table';
// export const ContextShart = createContext();


function Output() {

    const datafromtable = useContext(Contexttable)

    const [MondayAM, setMondayAM] = useState(null);
    const [MondayPM, setMondayPM] = useState(null);

    const [TuesdayAM, setTuesdayAM] = useState(null);
    const [TuesdayPM, setTuesdayPM] = useState(null);

    const [WednesdayAM, setWednesdayAM] = useState(null);
    const [WednesdayPM, setWednesdayPM] = useState(null);

    const [ThursdayAM, setThursdayAM] = useState(null);
    const [ThursdayPM, setThursdayPM] = useState(null);

    const [FridayAM, setFridayAM] = useState(null);
    const [FridayPM, setFridayPM] = useState(null);

    const [SaturdayAM, setSaturdayAM] = useState(null);
    const [SaturdayPM, setSaturdayPM] = useState(null);

    const [SundayAM, setSundayAM] = useState(null);
    const [SundayPM, setSundayPM] = useState(null);

    const [Porentege, setPorentege] = useState(null);


    const Calculatepercentage = () => {
        const percentage = MondayAM + MondayPM + TuesdayAM + TuesdayPM + WednesdayAM + WednesdayPM + ThursdayAM + ThursdayPM + FridayAM + FridayPM + SaturdayAM + SaturdayPM + SundayAM + SundayPM

        const resulte = percentage / 168 * 100
        setPorentege(resulte)





    }
    const handleAddData = () => {
        const newData = { id: 1, name: 'Example' }; // Example data
        pushDataToContext(newData); // Push new data to the context
    };
    const { senddata, pushDataToContext } = useContext(Contexttable);

    const HnadlSHart = () => {

        setMondayAM(4);
        setMondayPM(3);

        setTuesdayAM(6);
        setTuesdayPM(4);

        setWednesdayAM(6);
        setWednesdayPM(7);

        setThursdayAM(6);
        setThursdayPM(1);

        setFridayAM(7);
        setFridayPM(6);

        setSaturdayAM(9);
        setSaturdayPM(3);

        setSundayAM(5);
        setSundayPM(4);


    }

    const RefSub = useRef();
    const handleConvertToSub = () => {

        RefSub.current.classList.toggle('hidden');


    };

    const RefShowDropDown = useRef()




    const ShowDropDown = () => {
        if (RefShowDropDown.current) {

            RefShowDropDown.current.classList.toggle('hidden');
        }

        handleAddData()


        Calculatepercentage()
    };
    return (
        // <ContextShart.Provider value={{ MondayAM, MondayPM, TuesdayAM, TuesdayPM, WednesdayAM, WednesdayPM, ThursdayAM, ThursdayPM, FridayAM, FridayPM, SaturdayAM, SaturdayPM, SundayAM, SundayPM }
        // }>
        <div>

            <ul>
                {senddata.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>

            <div className=" absolute   left-[260px] w-[400px]  top-[200px]">
                <div className="   rounded-lg shadow w-[1000px]  dark:bg-gray-800 p-4 md:p-6">

                    <div className="flex justify-between pb-4 mb-4 border-b   border-gray-200 dark:border-gray-700">
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
                                <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
                                    <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                                    <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                                </svg>
                            </div>
                            <div>
                                <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">3.4k</h5>
                                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Revunue</p>
                            </div>
                        </div>
                        <div>
                            <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
                                <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13V1m0 0L1 5m4-4 4 4" />
                                </svg>
                                {Porentege + "%"}
                            </span>
                        </div>
                    </div>

                    <div className="w-full" id="column-chart">
                        <ChartComponent />
                    </div>
                    <div className="grid grid-cols-1 hitems-center border-gray-200 border-t h-[100%] w-[100%] dark:border-gray-700 justify-between">
                        <div className="flex justify-between items-center pt-5">

                            <div>
                                <button
                                    onClick={ShowDropDown}
                                    id="dropdownToggleButton"
                                    data-dropdown-toggle="dropdownToggle"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button"
                                >
                                    Dropdown toggle{" "}
                                    <svg
                                        className="w-2.5 h-2.5 ms-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>
                                {/* Dropdown menu */}
                                <div
                                    ref={RefShowDropDown}
                                    id="dropdownToggle"
                                    className="z-10 visible   bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
                                >
                                    <ul

                                        className="p-3 z-10	 space-y-1 text-sm  text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownToggleButton"
                                    >
                                        <li>
                                            <div onClick={HnadlSHart} className="flex z-10 	 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                <label className="inline-flex items-center w-full cursor-pointer">

                                                    <input type="checkbox" defaultValue="" className="sr-only peer" />
                                                    <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600" />
                                                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        Last 7 Days
                                                    </span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>

                                            <button

                                                id="doubleDropdownButton"
                                                data-dropdown-toggle="doubleDropdown"
                                                data-dropdown-placement="right-start"
                                                type="button"
                                                onClick={handleConvertToSub}
                                                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                {/* <div className="flex justify-center items-center bg-orange-300 "> */}
                                                <input type="checkbox" defaultValue="" className="sr-only peer" />
                                                <div className=" absolute w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600" />
                                                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    dropdown
                                                </span>
                                                {/* </div> */}
                                                <svg
                                                    className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 6 10"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="m1 9 4-4-4-4"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                id="doubleDropdown"
                                                ref={RefSub}
                                                className="z-10 visible  absolute ml-40 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                            >
                                                <ul

                                                    className="py-2  text-sm text-gray-700 dark:text-gray-200"
                                                    aria-labelledby="doubleDropdownButton"
                                                >
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        >
                                                            One Week
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        >
                                                            Scend Week
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        >
                                                            Billing
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        >
                                                            Rewards
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>








                                    </ul>
                                </div>

                            </div>
                            <a href="#" className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                                Leads Report
                                <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className=" mt-[800px] ml-72 mb-56 absolute overflow-x-auto shadow-md sm:rounded-lg">
                <table style={{ backgroundColor: '#1A56DB' }} className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead style={{ backgroundColor: '#1A56DB' }} className="text-xs text-white  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr style={{ backgroundColor: '#1A56DB' }}>
                            <th scope="col" className="px-6 py-3">
                                day
                            </th>
                            <th scope="col" className="px-6 py-3">
                                details
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                MONDAY
                            </th>
                            <td className="px-6 py-4 text-sm font-medium"> start at 8.30 am and end 8.30</td>

                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">White</td>

                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">Black</td>

                        </tr>
                    </tbody>
                </table>
            </div>



        </div>
        // </ContextShart.Provider >

    )
}

export default Output






