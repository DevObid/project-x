import React, { useState, useEffect } from 'react';

function Table() {

    const [hoursMonday1, setHoursMonday1] = useState(0);
    const [minutesMonday1, setMinutesMonday1] = useState(0);
    const [hoursMonday2, setHoursMonday2] = useState(0);
    const [minutesMonday2, setMinutesMonday2] = useState(0);
    const [breakHoursMonday, setBreakHoursMonday] = useState(0);
    const [breakMinutesMonday, setBreakMinutesMonday] = useState(0);
    const [priceMonday, setPriceMonday] = useState(0);
    const [totalHoursMonday, setTotalHoursMonday] = useState(0);
    const [totalMinutesMonday, setTotalMinutesMonday] = useState(0);
    const [totalAmountMonday, setTotalAmountMonday] = useState(0);


    const [hoursTuesday1, setHoursTuesday1] = useState(0);
    const [minutesTuesday1, setMinutesTuesday1] = useState(0);
    const [hoursTuesday2, setHoursTuesday2] = useState(0);
    const [minutesTuesday2, setMinutesTuesday2] = useState(0);
    const [breakHoursTuesday, setBreakHoursTuesday] = useState(0);
    const [breakMinutesTuesday, setBreakMinutesTuesday] = useState(0);
    const [priceTuesday, setPriceTuesday] = useState(0);
    const [totalHoursTuesday, setTotalHoursTuesday] = useState(0);
    const [totalMinutesTuesday, setTotalMinutesTuesday] = useState(0);
    const [totalAmountTuesday, setTotalAmountTuesday] = useState(0);


    const [hoursWednesday1, setHoursWednesday1] = useState(0);
    const [minutesWednesday1, setMinutesWednesday1] = useState(0);
    const [hoursWednesday2, setHoursWednesday2] = useState(0);
    const [minutesWednesday2, setMinutesWednesday2] = useState(0);
    const [breakHoursWednesday, setBreakHoursWednesday] = useState(0);
    const [breakMinutesWednesday, setBreakMinutesWednesday] = useState(0);
    const [priceWednesday, setPriceWednesday] = useState(0);
    const [totalHoursWednesday, setTotalHoursWednesday] = useState(0);
    const [totalMinutesWednesday, setTotalMinutesWednesday] = useState(0);
    const [totalAmountWednesday, setTotalAmountWednesday] = useState(0);


    const [hoursThursday1, setHoursThursday1] = useState(0);
    const [minutesThursday1, setMinutesThursday1] = useState(0);
    const [hoursThursday2, setHoursThursday2] = useState(0);
    const [minutesThursday2, setMinutesThursday2] = useState(0);
    const [breakHoursThursday, setBreakHoursThursday] = useState(0);
    const [breakMinutesThursday, setBreakMinutesThursday] = useState(0);
    const [priceThursday, setPriceThursday] = useState(0);
    const [totalHoursThursday, setTotalHoursThursday] = useState(0);
    const [totalMinutesThursday, setTotalMinutesThursday] = useState(0);
    const [totalAmountThursday, setTotalAmountThursday] = useState(0);


    const [hoursFriday1, setHoursFriday1] = useState(0);
    const [minutesFriday1, setMinutesFriday1] = useState(0);
    const [hoursFriday2, setHoursFriday2] = useState(0);
    const [minutesFriday2, setMinutesFriday2] = useState(0);
    const [breakHoursFriday, setBreakHoursFriday] = useState(0);
    const [breakMinutesFriday, setBreakMinutesFriday] = useState(0);
    const [priceFriday, setPriceFriday] = useState(0);
    const [totalHoursFriday, setTotalHoursFriday] = useState(0);
    const [totalMinutesFriday, setTotalMinutesFriday] = useState(0);
    const [totalAmountFriday, setTotalAmountFriday] = useState(0);


    const [hoursSaturday1, setHoursSaturday1] = useState(0);
    const [minutesSaturday1, setMinutesSaturday1] = useState(0);
    const [hoursSaturday2, setHoursSaturday2] = useState(0);
    const [minutesSaturday2, setMinutesSaturday2] = useState(0);
    const [breakHoursSaturday, setBreakHoursSaturday] = useState(0);
    const [breakMinutesSaturday, setBreakMinutesSaturday] = useState(0);
    const [priceSaturday, setPriceSaturday] = useState(0);
    const [totalHoursSaturday, setTotalHoursSaturday] = useState(0);
    const [totalMinutesSaturday, setTotalMinutesSaturday] = useState(0);
    const [totalAmountSaturday, setTotalAmountSaturday] = useState(0);


    const [hoursSunday1, setHoursSunday1] = useState(0);
    const [minutesSunday1, setMinutesSunday1] = useState(0);
    const [hoursSunday2, setHoursSunday2] = useState(0);
    const [minutesSunday2, setMinutesSunday2] = useState(0);
    const [breakHoursSunday, setBreakHoursSunday] = useState(0);
    const [breakMinutesSunday, setBreakMinutesSunday] = useState(0);
    const [priceSunday, setPriceSunday] = useState(0);
    const [totalHoursSunday, setTotalHoursSunday] = useState(0);
    const [totalMinutesSunday, setTotalMinutesSunday] = useState(0);
    const [totalAmountSunday, setTotalAmountSunday] = useState(0);











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
        let totalHours = +hoursMonday + +hours2 - BreakHours;
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

    const handleChangeHoursMonday = (event) => {
        setHours1(event.target.value);
    };

    const handleChangeMinutesMonday = (event) => {
        setMinutes1(event.target.value);
    };

    const handleChangePriceMonday = (event) => {
        setPrice(event.target.value);
    };


    const handleChangeHoursBreakMonday = (event) => {
        setBreakHours(event.target.value);
    };


    const handleChangeMinutesBreakMonday = (event) => {
        setBreakMinutes(event.target.value);
    };



    const handleChangeHoursTuesday = (event) => {
        setHours2(event.target.value);
    };

    const handleChangeMinutesTuesday = (event) => {
        setMinutes2(event.target.value);
    };


    const handleChangePriceTuesday = (event) => {
        setPrice(event.target.value);
    };


    const handleChangeHoursBreakTuesday = (event) => {
        setBreakHours(event.target.value);
    };


    const handleChangeMinutesBreakTuesday = (event) => {
        setBreakMinutes(event.target.value);
    };





    const handleChangeHoursWednesday = (event) => {
        setHours3(event.target.value);
    };

    const handleChangeMinutesWednesday = (event) => {
        setMinutes3(event.target.value);
    };

    const handleChangePriceWednesday = (event) => {
        setPrice(event.target.value);
    };

    const handleChangeHoursBreakWednesday = (event) => {
        setBreakHours(event.target.value);
    };

    const handleChangeMinutesBreakWednesday = (event) => {
        setBreakMinutes(event.target.value);
    };


    const handleChangeHoursThursday = (event) => {
        setHours4(event.target.value);
    };

    const handleChangeMinutesThursday = (event) => {
        setMinutes4(event.target.value);
    };

    const handleChangePriceThursday = (event) => {
        setPrice(event.target.value);
    };

    const handleChangeHoursBreakThursday = (event) => {
        setBreakHours(event.target.value);
    };

    const handleChangeMinutesBreakThursday = (event) => {
        setBreakMinutes(event.target.value);
    };




    const handleChangeHoursFriday = (event) => {
        setHours5(event.target.value);
    };

    const handleChangeMinutesFriday = (event) => {
        setMinutes5(event.target.value);
    };

    const handleChangePriceFriday = (event) => {
        setPrice(event.target.value);
    };

    const handleChangeHoursBreakFriday = (event) => {
        setBreakHours(event.target.value);
    };

    const handleChangeMinutesBreakFriday = (event) => {
        setBreakMinutes(event.target.value);
    };



    const handleChangeHoursSaturday = (event) => {
        setHours6(event.target.value);
    };

    const handleChangeMinutesSaturday = (event) => {
        setMinutes6(event.target.value);
    };

    const handleChangePriceSaturday = (event) => {
        setPrice(event.target.value);
    };

    const handleChangeHoursBreakSaturday = (event) => {
        setBreakHours(event.target.value);
    };

    const handleChangeMinutesBreakSaturday = (event) => {
        setBreakMinutes(event.target.value);
    };


    const handleChangeHoursSunday = (event) => {
        setHours7(event.target.value);
    };

    const handleChangeMinutesSunday = (event) => {
        setMinutes7(event.target.value);
    };

    const handleChangePriceSunday = (event) => {
        setPrice(event.target.value);
    };

    const handleChangeHoursBreakSunday = (event) => {
        setBreakHours(event.target.value);
    };

    const handleChangeMinutesBreakSunday = (event) => {
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
                                Monday
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
                                {totalHours} : {totalMinutes}
                            </td>
                            <td className="px-6 py-4">
                                {totalAmount}
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Tuesday
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
                                {totalHours} : {totalMinutes}
                            </td>
                            <td className="px-6 py-4">
                                {totalAmount}
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Wednesday
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
                                {totalHours} : {totalMinutes}
                            </td>
                            <td className="px-6 py-4">
                                {totalAmount}
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Thursday
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
                                {totalHours} : {totalMinutes}
                            </td>
                            <td className="px-6 py-4">
                                {totalAmount}
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Friday
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
                                {totalHours} : {totalMinutes}
                            </td>
                            <td className="px-6 py-4">
                                {totalAmount}
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Saturday
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
                                {totalHours} : {totalMinutes}
                            </td>
                            <td className="px-6 py-4">
                                {totalAmount}
                            </td>
                        </tr>


                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Sunday
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
                                {totalHours} : {totalMinutes}
                            </td>
                            <td className="px-6 py-4">
                                {totalAmount}
                            </td>
                        </tr>





                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
