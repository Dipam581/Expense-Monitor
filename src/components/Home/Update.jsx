import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineClose , AiOutlineCheck } from "react-icons/ai";


function Update(props) {
    console.log("from update form -- ", props)
    //const history = useHistory();
    const notifyOnUpdate = () => {
        toast.success("Your information is updated successfully", {
            position: "top-right",
            theme: "colored",
            autoClose: 1000
        })

    };

    const [formData, setFormData] = useState({
        item: props.editExpenseData.item,
        cost: props.editExpenseData.cost,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const updateData = async (e) => {
        e.preventDefault();
        const updatedData = { ...props.editExpenseData };

        updatedData.item = formData.item;
        updatedData.cost = formData.cost;

        const response = await sendData(updatedData);

        if (response.ok) {
            console.log('Data updated to the database successfully');
            //history.push('/analysis');
            notifyOnUpdate()
            setTimeout(() => {
                window.location.href = "/";
            }, 1000);
            
        } else {
            console.error('Failed to update data to the database');
        }
    }


    const sendData = async (updatedData) => {
        const response = await fetch('http://localhost:8080/update', {
            method: "POST",
            body: JSON.stringify(updatedData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data)
        return response;
    }

    const close = () =>{
        window.location.href = "/";
    }



    return (
        <>
            <div className="relative flex flex-col justify-center">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                        Update Form
                    </h1>
                    <form className="mt-6">
                        <div className="mb-8">
                            <label>
                                <span className='text-black text-2xl ml-32 font-serif text-center'>This data is recorded on</span>
                                <div className='text-gray-700 text-2xl text-center font-serif'>{(props.editExpenseData.date).substring(0, 10)}</div>
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                                <span className="text-gray-700 font-bold text-xl">Title</span>
                                <input
                                    name="item"
                                    type="text"
                                    className="border border-sky-200 block w-200 mt-2 px-2 py-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg"
                                    placeholder="Item Name"
                                    required
                                    value={formData.item}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                                <span className="text-gray-700 font-bold text-xl">Cost</span>
                                <input
                                    name="cost"
                                    type="number"
                                    className="border border-sky-200 block w-200 mt-2 px-2 py-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg"
                                    placeholder="Cost"
                                    required
                                    value={formData.cost}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <div className="flex justify-end">
                            <div className="ml-15">
                                <button
                                    onClick={updateData}
                                    type="submit"
                                    className="h-10 px-5 text-indigo-100 bg-green-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800">
                                    <AiOutlineCheck />
                                </button>
                            </div>

                            <div className="ml-15">
                                <button
                                    onClick={close}
                                    type="submit"
                                    className="h-10 px-5 border rounded-lg bg-red-700 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800">
                                    <AiOutlineClose />
                                </button>
                            </div>
                            
                        </div>

                        <div></div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Update;
