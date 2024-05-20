import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from 'react-icons/fa';

function Table() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="absolute left-64 top-20">
            <div className="w-[1250px] h-72">
                <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
                    <div className="flex bg-white shadow-lg rounded-xl">
                        <div className="py-6 border-r border-gray-100">

                        </div>
                        <div className="flex flex-col">
                            <div className="flex divide-x">
                                <div className="flex flex-col px-6 pt-5 pb-6 border-b border-gray-100">
                                    <div className="flex items-center justify-between">
                                        <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                                            <svg className="w-6 h-6 text-gray-900 stroke-current" fill="none">
                                                <path
                                                    d="M13.25 8.75L9.75 12l3.5 3.25"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                        <div className="text-sm font-semibold">February</div>
                                        <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                                            <svg className="w-6 h-6 text-gray-900 stroke-current" fill="none">
                                                <path
                                                    d="M10.75 8.75l3.5 3.25-3.5 3.25"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-7 text-xs text-center text-gray-900">
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            Mo
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            Tu
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            We
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            Th
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            Fri
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            Sa
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            Su
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            1
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            2
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            3
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            4
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            5
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            6
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            7
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            8
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg bg-gray-50">
                                            9
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            10
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            11
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            12
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            13
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            14
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            15
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            16
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            17
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-l-lg">
                                            18
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                            19
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                            20
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none rounded-tr-lg bg-gray-50">
                                            21
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none rounded-l-lg bg-gray-50">
                                            22
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                            23
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                            24
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                            25
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                            26
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                            27
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none rounded-br-lg bg-gray-50">
                                            28
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            1
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            2
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            3
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            4
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            5
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            6
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            7
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-center px-6 py-4">

                                        <div className="flex items-center space-x-2">
                                            <button className="px-4 py-2 text-sm rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-gray-100">
                                                Cancel
                                            </button>
                                            <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-blue-700">
                                                Set Date
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                {/* <div className="flex flex-col px-6 pt-5 pb-6 border-b border-gray-100">
                                    <div className="flex items-center justify-between">
                                        <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                                            <svg className="w-6 h-6 text-gray-900 stroke-current" fill="none">
                                                <path
                                                    d="M13.25 8.75L9.75 12l3.5 3.25"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button> */}
                                {/* <div className="text-sm font-semibold">March</div>
                                        <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                                            <svg className="w-6 h-6 text-gray-900 stroke-current" fill="none">
                                                <path
                                                    d="M10.75 8.75l3.5 3.25-3.5 3.25"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-7 text-xs text-center text-gray-900">
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            Mo
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            Tu
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            We
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            Th
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            Fri
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            Sa
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            Su
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none rounded-tl-lg bg-gray-50">
                                            1
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
                                            2
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
                                            3
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
                                            4
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
                                            5
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
                                            6
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
                                            7
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none rounded-bl-lg bg-gray-50">
                                            8
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
                                            9
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
                                            10
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-r-lg">
                                            11
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            12
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            13
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            14
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            15
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            16
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            17
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            18
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            19
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            20
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            21
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            22
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            23
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            24
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            25
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            26
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            27
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            28
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            29
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            30
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            31
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            1
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            2
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            3
                                        </span>
                                        <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                            4
                                        </span> */}
                                {/* </div>
                        </div>
                    </div> */}
                                <div className="flex items-center justify-between px-6 py-4">
                                    <svg className="w-6 h-6 text-gray-900 stroke-current" fill="none">
                                        <path
                                            d="M13.25 8.75L9.75 12l3.5 3.25"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>


                                    {/* component */}
                                    <div className="mt-2 p-5 w-40 bg-white rounded-lg shadow-xl justify-center items-center">
                                        <div className="flex">
                                            <select
                                                name="hours"
                                                className="bg-transparent text-xl appearance-none outline-none"
                                            >
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                                <option value={6}>6</option>
                                                <option value={7}>7</option>
                                                <option value={8}>8</option>
                                                <option value={9}>9</option>
                                                <option value={10}>10</option>
                                                <option value={11}>10</option>
                                                <option value={12}>12</option>
                                            </select>
                                            <span className="text-xl mr-3">:</span>
                                            <select
                                                name="minutes"
                                                className="bg-transparent text-xl appearance-none outline-none mr-4"
                                            >
                                                <option value={0}>30</option>
                                                <option value={30}>30</option>
                                            </select>
                                            <select
                                                name="ampm"
                                                className="bg-transparent text-xl appearance-none outline-none border-spacing-0"
                                            >
                                                <option value="am">AM</option>
                                                <option value="pm">PM</option>
                                            </select>
                                        </div>
                                    </div>




                                    <svg className="w-6 h-6 text-gray-900 stroke-current" fill="none">
                                        <path
                                            d="M10.75 8.75l3.5 3.25-3.5 3.25"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            </div >
        </div >


    );
}
export default Table;
