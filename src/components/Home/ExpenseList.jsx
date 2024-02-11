import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";

export default function ExpenseList(props) {
    const handleEditClick = (expenseId) => {
        props.onEditExpense(expenseId);
        //console.log(`Edit clicked for expense with id: ${expenseId}`);
    };

    // Check whether object is blank or not
    if (Object.keys(props.dbObj).length === 0) {
        console.log("No data");
        return <div>No data available</div>;
    }

    // const today = new Date();
    // const formattedToday = today.toISOString().split('T')[0];

    // const yesterday = new Date();
    // yesterday.setDate(today.getDate() - 1);

    // const formattedYesterday = yesterday.toISOString().split('T')[0];
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth() + 1;

    return (
        <div className="border border-sky-200">
            <div className="">
            <div className="relative overflow-x-auto overflow-y-auto max-h-96 shadow-md sm:rounded-lg">
                <table className="border-separate  w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0 z-10">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-black text-sm border border-gray-300">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 font-black text-sm border border-gray-300">
                                Item
                            </th>
                            <th scope="col" className="px-6 py-3 font-black text-sm border border-gray-300">
                                Cost
                            </th>
                            <th scope="col" className="px-6 py-3 font-black text-sm border border-gray-300">
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.dbObj.map((expense, index) => (
                            // (expense.date.substring(0, 10) === formattedToday || expense.date.substring(0, 10) === formattedYesterday) && (
                                (parseInt(expense.date.substring(5, 7)) === currentMonth) && (
                                <tr key={expense._id} className={index % 2 === 0 ? "bg-gray-100 dark:bg-gray-800" : ""}>
                                    <td className="px-6 py-4 font-light text-base font-serif text-gray-900 border border-gray-300 whitespace-nowrap dark:text-white">
                                        {expense.date.substring(0, 10)}
                                    </td>
                                    <td className="px-6 py-4 font-light text-base font-serif text-gray-900 border border-gray-300">{expense.item}</td>
                                    <td className="px-6 py-4 font-light text-base font-serif text-gray-900 border border-gray-300">{expense.cost}</td>
                                    <td className="px-6 py-4 text-gray-900 cursor-pointer border border-gray-300" onClick={() => handleEditClick(expense)}>
                                        <AiFillEdit />
                                    </td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        </div>
        

    );
}
