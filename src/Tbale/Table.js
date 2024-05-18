import React, { useState, useEffect } from 'react';

function Table() {
    const [hours1, setHours1] = useState(0);
    const [minutes1, setMinutes1] = useState(0);

    const [hours2, setHours2] = useState(0);
    const [minutes2, setMinutes2] = useState(0);

    const [price, setPrice] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const [BreakHours, setBreakHours] = useState(0);
    const [Breakminutes, setBreakMinutes] = useState(0);


    const [totalHours, setTotalHours] = useState(0);
    const [totalMinutes, setTotalMinutes] = useState(0);

    function calculateTotal() {
        let totalHours = +hours1 + +hours2 - BreakHours;
        let totalMinutes = +minutes1 + +minutes2 - Breakminutes;

        if (totalMinutes >= 60) {
            totalHours += Math.floor(totalMinutes / 60);
            totalMinutes = totalMinutes % 60;
        }

        setTotalHours(totalHours);
        setTotalMinutes(totalMinutes);
        setTotalAmount(price * (totalHours + totalMinutes / 60));
    }

    useEffect(() => {
        calculateTotal();

    }, [hours1, minutes1, hours2, minutes2, price, BreakHours, Breakminutes]);

    const handleChangeHours1 = (event) => {
        setHours1(event.target.value);
    };

    const handleChangeMinutes1 = (event) => {
        setMinutes1(event.target.value);
    };

    const handleChangeHours2 = (event) => {
        setHours2(event.target.value);
    };

    const handleChangeMinutes2 = (event) => {
        setMinutes2(event.target.value);
    };

    const handleChangePrice = (event) => {
        setPrice(event.target.value);
    };


    const handleChangeHoursBreak = (event) => {
        setBreakHours(event.target.value);
    };


    const handleChangeMinutesBreak = (event) => {
        setBreakMinutes(event.target.value);
    };







    return (
        <div>
            <div className="absolute h-[500px] w-[1217px] left-[250px] bottom-[150px] bg-red-500 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="h-[100%] w-[100%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3 flex item-center justify-center">Days</th>
                            <th className="px-6 py-3">AM</th>
                            <th className="px-6 py-3">PM</th>
                            <th className="px-6 py-3">BREAK</th>
                            <th className="px-6 py-3">PRICE OF HOURS</th>
                            <th className="px-6 py-3">TOTAL HOURS</th>
                            <th className="px-6 py-3">TOTAL AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                <div className="h-[100%] w-[100%] flex justify-center items-center">
                                    <input onChange={handleChangeHours1} className="w-8" placeholder="00" />
                                    <input onChange={handleChangeMinutes1} min={0} type='number' max={59} className="w-8" placeholder="00" />
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <input className="w-8" onChange={handleChangeHours2} placeholder="00" />
                                <input className="w-8" onChange={handleChangeMinutes2} min={0} type='number' max={59} placeholder="00" />
                            </td>
                            <td className="px-6 py-4">
                                <input className="w-8" onChange={handleChangeHoursBreak} placeholder="00" />
                                <input className="w-8" onChange={handleChangeMinutesBreak} min={0} type='number' max={59} placeholder="00" />
                            </td>
                            <td className="px-6 py-4">
                                <input className="w-8" onChange={handleChangePrice} placeholder="00$" />
                            </td>
                            <td className="px-6 py-4">
                                HOURS {totalHours} AND {totalMinutes} MINUTES
                            </td>
                            <td className="px-6 py-4">
                                {totalAmount}
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                                <input className="w-8" placeholder="00" />
                                <input className="w-8" placeholder="00" />
                            </td>
                            <td className="px-6 py-4">
                                <input className="w-8" placeholder="00" />
                                <input className="w-8" placeholder="00" />
                            </td>
                            <td className="px-6 py-4">
                                <input className="w-8" placeholder="00" />
                                <input className="w-8" placeholder="00" />
                            </td>
                            <td className="px-6 py-4">
                                price
                            </td>
                            <td className="px-6 py-4">
                                hour
                            </td>
                            <td className="px-6 py-4">
                                jjj
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                <input className="w-8" placeholder="00" />
                                <input className="w-8" placeholder="00" />
                            </td>
                            <td className="px-6 py-4">
                                <input className="w-8" placeholder="00" />
                                <input className="w-8" placeholder="00" />
                            </td>
                            <td className="px-6 py-4">
                                <input className="w-8" placeholder="00" />
                                <input className="w-8" placeholder="00" />
                            </td>
                            <td className="px-6 py-4">
                                prie
                            </td>
                            <td className="px-6 py-4">
                                hour
                            </td>
                            <td className="px-6 py-4">
                                jjj
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
