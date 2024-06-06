import React, { useState, useEffect, useRef, createContext } from 'react';
import Output from '../Show-Output/Output';




export const Contexttable = createContext();

function Table() {

    const [senddata, setsenddata] = useState()


    const [month, setMonth] = useState("tes");

    const [counterPlus, setCounterPlus] = useState(1)

    const [day, setday] = useState('MONDAY')

    const RefRate = useRef()

    const RefMemo = useRef()

    const [days, setdays] = useState("11");
    const [selectedValueAMPM1, setSelectedValueAMPM1] = useState('AM');
    const [selectedValuePMAM2, setSelectedValuePMAM2] = useState('AM');


    const [Hour1, setHour1] = useState(1)

    const [Menit, setMenit] = useState(1)

    const [Hour2, setHour2] = useState(1)

    const [Menit2, setMenit2] = useState(1)

    // const [errors, seterror] = useState()



    const SendJsonData = () => {
        // seterror(<Output />)
        console.log(senddata)

    }

    useEffect(() => {
        setsenddata({ selectedValueAMPM1, selectedValuePMAM2, Hour1, Hour2, Menit, Menit2, month, days, day })


    }, [selectedValueAMPM1, selectedValuePMAM2, Hour1, Hour2, Menit, Menit2, month, days, day])

    const handleChangeAMPM1 = (value) => {

        setSelectedValueAMPM1(value);
    };


    const handleChangeAMPM2 = (event) => {
        setSelectedValuePMAM2(event);
    };





    const handleHour1 = (event) => {
        setHour1(event.target.value)



    };

    const handleHour2 = (event) => {
        setHour2(event.target.value)



    };

    const handleMenite1 = (event) => {
        setMenit(event.target.value)
    };

    const handleMenite2 = (event) => {
        setMenit2(event.target.value)
    };



    useEffect(() => {


        switch (counterPlus) {
            case 1:
                setMonth("January");
                break;
            case 2:
                setMonth("February");
                break;
            case 3:
                setMonth("March");
                break;
            case 4:
                setMonth("April");
                break;
            case 5:
                setMonth("May");
                break;
            case 6:
                setMonth("June");
                break;
            case 7:
                setMonth("July");
                break;
            case 8:
                setMonth("August");
                break;
            case 9:
                setMonth("September");
                break;
            case 10:
                setMonth("October");
                break;
            case 11:
                setMonth("November");
                break;
            case 12:
                setMonth("December");
                break;
            default:
                setMonth("January");
                break;
        }

    }, [counterPlus])

    const handleDays = (days) => {
        setday(days);
    };




    const HnadlDay = (days) => {
        setdays(days);
    };


    //

    return (
        <Contexttable.Provider value={senddata} >
            {/* {errors} */}

            <div className="absolute  w-full items-center justify-center flex  ">
                <div className="w-full flex items-center justify-center  ">
                    <div className="flex items-center justify-center w-full  h-screen ml-60 ">
                        <div className="flex bg-white  shadow-lg rounded-xl">
                            <div className="py-6 border-r border-gray-100">

                            </div>
                            <div className="flex flex-col">
                                <div className="flex divide-x">
                                    <div className="flex flex-col px-6 pt-5 pb-6 border-b border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <button onClick={() => { counterPlus <= 1 ? console.log("larg") : setCounterPlus(counterPlus - 1) }} className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                                                <svg className="w-6 h-6 text-gray-900 stroke-current" fill="none">
                                                    <path
                                                        d="M13.25 8.75L9.75 12l3.5 3.25"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                            <div className="text-sm font-semibold">{month}</div>

                                            <button onClick={() => {
                                                counterPlus >= 13 ? console.log("larg") : setCounterPlus(counterPlus + 1)
                                            }} className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
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
                                            <button onClick={() => handleDays('Monday')} className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                                Mo
                                            </button>
                                            <button onClick={() => handleDays('Tuesday')} className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                                Tu
                                            </button>
                                            <button onClick={() => handleDays('Wednesday')} className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                                We
                                            </button>
                                            <button onClick={() => handleDays('Thursday')} className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                                Th
                                            </button>
                                            <button onClick={() => handleDays('Friday')} className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                                Fr
                                            </button>
                                            <button onClick={() => handleDays('Saturday')} className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                                Sa
                                            </button>
                                            <button onClick={() => handleDays('Sunday')} className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                                Su
                                            </button>

                                            <button onClick={() => HnadlDay(1)} className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                                1
                                            </button>
                                            <button onClick={() => HnadlDay(2)} className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                                2
                                            </button>
                                            <button onClick={() => HnadlDay(3)} className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                                3
                                            </button>
                                            <button onClick={() => HnadlDay(4)} className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                                4
                                            </button>
                                            <button onClick={() => HnadlDay(5)} className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                                5
                                            </button>
                                            <button onClick={() => HnadlDay(6)} className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                                6
                                            </button>
                                            <button onClick={() => HnadlDay(7)} className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                                                7
                                            </button>
                                            <button onClick={() => HnadlDay(8)} className="flex items-center justify-center w-10 h-10 rounded-lg">
                                                8
                                            </button>
                                            <button onClick={() => HnadlDay(9)} className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg bg-gray-50">
                                                9
                                            </button>
                                            <button onClick={() => HnadlDay(10)} className="flex items-center justify-center w-10 h-10 rounded-lg">
                                                10
                                            </button>
                                            <button onClick={() => HnadlDay(11)} className="flex items-center justify-center w-10 h-10 rounded-lg">
                                                11
                                            </button>
                                            <button onClick={() => HnadlDay(12)} className="flex items-center justify-center w-10 h-10 rounded-lg">
                                                12
                                            </button>
                                            <button onClick={() => HnadlDay(13)} className="flex items-center justify-center w-10 h-10 rounded-lg">
                                                13
                                            </button>
                                            <button onClick={() => HnadlDay(14)} className="flex items-center justify-center w-10 h-10 rounded-lg">
                                                14
                                            </button>
                                            <button onClick={() => HnadlDay(15)} className="flex items-center justify-center w-10 h-10 rounded-lg">
                                                15
                                            </button>
                                            <button onClick={() => HnadlDay(16)} className="flex items-center justify-center w-10 h-10 rounded-lg">
                                                16
                                            </button>
                                            <button onClick={() => HnadlDay(17)} className="flex items-center justify-center w-10 h-10 rounded-lg">
                                                17
                                            </button>
                                            <button onClick={() => HnadlDay(18)} className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-l-lg">
                                                18
                                            </button>
                                            <button onClick={() => HnadlDay(19)} className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                                19
                                            </button>
                                            <button onClick={() => HnadlDay(20)} className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                                20
                                            </button>
                                            <button onClick={() => HnadlDay(21)} className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none rounded-tr-lg bg-gray-50">
                                                21
                                            </button>
                                            <button onClick={() => HnadlDay(22)} className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none rounded-l-lg bg-gray-50">
                                                22
                                            </button>
                                            <button onClick={() => HnadlDay(23)} className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                                23
                                            </button>
                                            <button onClick={() => HnadlDay(24)} className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                                24
                                            </button>
                                            <button onClick={() => HnadlDay(25)} className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                                25
                                            </button>
                                            <button onClick={() => HnadlDay(26)} className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                                26
                                            </button>
                                            <button onClick={() => HnadlDay(27)} className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                                27
                                            </button>
                                            <button onClick={() => HnadlDay(28)} className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                                28
                                            </button>
                                            <button onClick={() => HnadlDay(29)} className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                                29
                                            </button>
                                            <button onClick={() => HnadlDay(30)} className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                                                30
                                            </button>

                                        </div>

                                        <div className="flex items-center justify-center px-6 py-4">

                                            <div className="flex items-center space-x-2">
                                                <button className="px-4 py-2 text-sm rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-gray-100">
                                                    Cancel
                                                </button>
                                                <button onClick={SendJsonData} className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-blue-700">
                                                    Set Date
                                                </button>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="flex-block items-center justify-between px-6 py-4 mb-60">

                                        <div className="justify-center flex items-center ">

                                            <svg className="w-6 h-6  mt-5  text-gray-900 stroke-current" fill="none">
                                                <path
                                                    d="M13.25 8.75L9.75 12l3.5 3.25"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>






                                            <div className="mt-2 p-5 w-25 h-11 rounded-l-lg  shadow-xl flex justify-center items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium">
                                                <div className="flex justify-center items-center">
                                                    <input
                                                        placeholder='00'
                                                        name="hours"
                                                        onChange={handleHour1}
                                                        className="bg-transparent w-6 text-xl appearance-none outline-none"
                                                    />


                                                    <span className="text-xl mr-3">:</span>
                                                    <input
                                                        placeholder='00'
                                                        name="minutes"
                                                        onChange={handleMenite1}
                                                        className="bg-transparent text-xl w-6 appearance-none outline-none mr-4"
                                                    />
                                                    <select
                                                        name="ampm"
                                                        value={selectedValueAMPM1}
                                                        onChange={(e) => handleChangeAMPM1(e.target.value)}
                                                        className="bg-transparent text-xl appearance-none outline-none border-spacing-0"
                                                    >
                                                        <option value="AM">AM</option>
                                                        <option value="PM">PM</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <svg className="w-6 mt-5 h-6 text-gray-900 stroke-current" fill="none">
                                                <path
                                                    d="M10.75 8.75l3.5 3.25-3.5 3.25"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <svg className="w-6  mt-5   h-6 text-gray-900 stroke-current" fill="none">
                                                <path
                                                    d="M13.25 8.75L9.75 12l3.5 3.25"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>

                                            <div className="mt-2 h-11 p-5 w-25 left-6 rounded-r-lg flex shadow-xl justify-center items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium">
                                                <div className="flex">
                                                    <input
                                                        placeholder='00'
                                                        name="hours"
                                                        onChange={handleHour2}
                                                        className="bg-transparent w-6 text-xl appearance-none outline-none"
                                                    />


                                                    <span className="text-xl mr-3">:</span>
                                                    <input
                                                        placeholder='00'
                                                        name="minutes"
                                                        onChange={handleMenite2}
                                                        className="bg-transparent text-xl w-6 appearance-none outline-none mr-4"
                                                    />

                                                    <select
                                                        name="ampm"
                                                        onChange={(e) => handleChangeAMPM2(e.target.value)}

                                                        className="bg-transparent text-xl appearance-none outline-none border-spacing-0"
                                                    >
                                                        <option value="AM">AM</option>
                                                        <option value="PM">PM</option>
                                                    </select>
                                                </div>
                                            </div>




                                            <svg className="w-6   mt-5  h-6 text-gray-900 stroke-current" fill="none">
                                                <path
                                                    d="M10.75 8.75l3.5 3.25-3.5 3.25"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>


                                        </div>
                                        <div className="absolute top-[300px]  w-[400px] flex-block justify-start items-center mt-5">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rate</label>
                                            <input ref={RefRate} type="number" className="bg-gray-50 border w-28 h-8 border-gray-300  text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$00" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                        </div>
                                        <div className="mb-6 mt-40 absolute">

                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Memo</label>
                                            <textarea ref={RefMemo} id="message" rows="4" className="block p-2.5 w-[400px] h-[100px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                                        </div>

                                    </div>





                                </div>

                            </div>

                        </div>


                    </div >
                </div >
            </div >

        </Contexttable.Provider>


    );
}
export default Table;
