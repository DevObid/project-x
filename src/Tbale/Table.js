import React, { useState, useEffect } from 'react';

function Table() {
    const [state, setState] = useState('');

    const [state2, setState2] = useState('');

    const [resulte, setresult] = useState()

    const handleChangeHour1 = (event) => {
        setState(event.target.value);

    };


    const handleChangeMunit1 = (event2) => {
        let munit = event2.target.value;
        let Sum = +state + munit / 10;

        setState(Sum);
    };




    const handleChangeHour2 = (event3) => {
        let munit = event3.target.value;

        setState2(munit);
    }

    const handleChangeMunit2 = (event3) => {

        let munit = event3.target.value;
        let Sum = +state2 + munit / 10;

        setState2(Sum);



    }


    useEffect(() => {
        console.log(state);
        // Logs the updated state value whenever it changes
    }, [state]);

    useEffect(() => {
        console.log(state2)
    }, [state2])



    return (
        <div>
            <div className="absolute h-[500px] w-[1217px] left-[250px] bottom-[150px] bg-red-500 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="h-[100%] w-[100%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3 flex item-center justify-center">
                                Days
                            </th>
                            <th className="px-6 py-3">
                                AM
                            </th>
                            <th className="px-6 py-3">
                                PM
                            </th>
                            <th className="px-6 py-3">
                                BREAK
                            </th>
                            <th className="px-6 py-3">
                                PRICE OF HOURS
                            </th>
                            <th className="px-6 py-3">
                                TOTAL HOURS
                            </th>
                            <th className="px-6 py-3">
                                TOTAL AMOUNT
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                <div className="h-[100%] w-[100%] flex justify-center items-center">
                                    <input onChange={handleChangeHour1} className="w-8" placeholder="00" />
                                    <input onChange={handleChangeMunit1} className="w-8" placeholder="00" />

                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <input className="w-8" onChange={handleChangeHour2} placeholder="00" />
                                <input className="w-8" onChange={handleChangeMunit2} placeholder="00" />

                            </td>
                            <td className="px-6 py-4">
                                <input className="w-8" placeholder="00" />
                                <input className="w-8" placeholder="00" />

                            </td>
                            <td className="px-6 py-4">
                                {resulte}
                            </td>
                            <td className="px-6 py-4">
                                1200
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
                                1200
                            </td>
                            <td className="px-6 py-4">
                                1200
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
                                1200
                            </td>
                            <td className="px-6 py-4">
                                1200
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
