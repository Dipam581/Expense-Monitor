import { useState } from "react";

export default function Dropdown() {

    const [countExpenseName, setCountExpenseName] = useState('')
    const [showOtherInput, setShowOtherInput] = useState(false);

    const expenseList = (event) => {
        setCountExpenseName(event.target.value);
        //console.log("Hello", event.target.value);
        if (event.target.value === "Others") {
            setShowOtherInput(true);
        } else {
            setShowOtherInput(false);
        }

    };
    //shadow mt-1 p-2 w-full border rounded-md text-gray-500 bg-white outline-none appearance-none focus:border-indigo-600

    return (
        <>

            <div className="shadow relative w-full lg:max-w-sm">
                <select id="expenseList" className=" text-left shadow mt-1 p-2 w-full border rounded-md text-gray-500 bg-white outline-none appearance-none focus:border-grey-600" value={countExpenseName} onChange={expenseList}>
                    <option value="" disabled selected>Select your option</option>
                    <option>Train</option>
                    <option>Bus</option>
                    <option>Auto</option>
                    <option>Others</option>
                </select>
            </div>
            {showOtherInput && (
                <div>
                    {/* <label
                        htmlFor="otherText"
                        className="block text-lg font-medium p-2 text-gray-600"
                    >
                        Others
                    </label>
                    <input
                        type="text"
                        id="otherReason"
                        name="otherText"
                        placeholder="Specify other reasons"
                        className="shadow p-2 w-full border rounded-md"
                    /> */}

                    <label htmlFor="otherText" className="block text-xl font-medium text-black ml-6 mt-8">Others</label>
                    <input type="text" id="otherReason" name="otherText" placeholder="Specify other reasons" 
                        className="shadow p-2 w-48 border rounded-md text-center focus:outline-none focus:ring focus:border-blue-300" />
                </div>
            )}

        </>

    );
}
