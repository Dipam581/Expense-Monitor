import { useState, useCallback, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import ExpenseFront from './ExpenseFront.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineArrowUpward } from "react-icons/md";

import Dropdown from './Dropdown.jsx'
import ExpenseList from './ExpenseList.jsx'
import Update from './Update.jsx';

function App() {
  var mainObj = {}
  const [countExpense, setCountExpense] = useState(0)
  const [netExpense, setnetExpense] = useState(1)
  const [date, setDate] = useState();
  const [expenseObj, setExpenseObj] = useState({});
  const [mgexpenseObj, setmgExpenseObj] = useState({});
  const [editExpenseData, setEditExpenseData] = useState(null);
  const [Arr, setArr] = useState([]);
  const [currentExpense, setCurrentExpense] = useState(0);

  let flag = 1;
  const notify = () => {
    if (flag) {
      toast.success("Success", {
        position: "top-right",
        theme: "colored",
      })
    } else {
      toast.error('Invalid Information!', {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
    }

  };


  //Current date
  const currentDate = new Date();

  // Extracting date, month, and year
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Note: Months are zero-based
  const year = currentDate.getFullYear();

  // Combining them in a desired format
  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

  const handleDate = useCallback(() => {
    setDate(formattedDate);
  }, [date]);

  useEffect(() => { handleDate() }, [date])



  const sumUp = (event) => {
    let val = parseFloat(event.target.value)
    //console.log(val)
    totalExpense(val)
  }

  const totalExpense = (val) => {
    //console.log(val)
    if (val) {
      setCountExpense(val)
    }
  }

  // const saveData = () => {
  //   let expenseName = document.getElementById('expenseList').value;
  //   if (expenseName == "Others") {
  //     expenseName = document.getElementById('otherReason').value;
  //   }
  //   if (expenseName && countExpense > 0) {
  //     setExpenseObj((prevExpenseObj) => {
  //       return {
  //         ...prevExpenseObj,
  //         [formattedDate + "_" + expenseName]: countExpense,
  //       };
  //     });
  //     //setCountExpense(0);
  //   }
  // }



  //Send data to backend
  const sendData = async () => {
    let expenseName = document.getElementById('expenseList').value;
    if (expenseName == "Others") {
      expenseName = document.getElementById('otherReason').value;
    }
    if (!expenseName || countExpense == 0) {
      flag = 0;
      return;
    }
    mainObj = {
      "date": formattedDate,
      "item": expenseName,
      "cost": countExpense
    };

    const response = await fetch('http://localhost:8080/demo', {
      method: "POST",
      body: JSON.stringify(mainObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();

    console.log(data)

    if (response.ok) {
      console.log('Data added to the database successfully');
      fetchData();
    } else {
      console.error('Failed to add data to the database');
    }
  }


  //Get data from mongoose
  const fetchData = async () => {
    console.log("data fetch started...")
    const response = await fetch('http://localhost:8080/demo', {
      method: "GET",
    })
    const data = await response.json();

    setmgExpenseObj(data);


    const returnedObj = createData(data);
    setArr(returnedObj);


    console.log("called db data", data)
    let totalCost = 0;
    for (let i in data) {
      totalCost += (parseFloat(data[i].cost))
    }
    setnetExpense(totalCost)

  }

  const createData = (obj) => {
    let Arr = [];

    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    currentMonth += 1;

    let subObj = {};
    let percost = 0;
    for (let i in obj) {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();

      if (currentYear != obj[i].date.substring(0, 4)) {
        continue
      }
      const inputDate = new Date(obj[i].date.substring(5, 7));
      const monthName = inputDate.toLocaleDateString('en-US', { month: 'long' });

      if (!subObj[monthName]) {
        subObj[monthName] = 0
      }

      subObj[monthName] += obj[i].cost
      if(parseInt(obj[i].date.substring(5, 7)) == currentMonth){
        percost += obj[i].cost
      }
      
    }
    setCurrentExpense(percost)
    console.log(subObj)

    for (let key in subObj) {
      let temp = {
        "date": key.substring(0, 3),
        "value": subObj[key]
      }
      Arr.push(temp);
    }
    return Arr;
  };

  useEffect(() => { fetchData() }, [countExpense])

  //update information
  const handleEditExpense = (expenseId) => {
    console.log(`In App: ${expenseId}`);
    setEditExpenseData(expenseId);

  };

  return (
    <>
      <div className="bg-white flex items-center justify-center bg-clip-border ml-7">

        <div className="bg-blue-100 ml-2 mt-4 p-8 rounded shadow-md w-200">
          <h1 className="text-5xl font-bold ml-4 mb-4 pb-8 text-center">Expense Monitor</h1>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex-1">
              <label for="inputField" className="block text-xl font-medium text-black ml-6">Total Expense</label>
              <input type="text" disabled id="inputField" name="inputField" value={netExpense}
                className="bg-blue-500 text-black shadow mt-1 p-2 w-full border rounded-md text-center text-2xl focus:outline-none focus:ring focus:border-blue-300" />
            </div>

            <div className="flex-1">
              <label className="block text-xl font-medium text-black ml-10">Today's Date</label>
              <input type="text" id="date" name="inputField" value={date} disabled
                className="text-2xl bg-blue-500 text-center mt-1 p-2 w-full rounded-md focus:outline-none focus:ring" />
            </div>

          </div>

          <div className="grid grid-cols-1 gap-4 mt-8">

            <div className="flex-1">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex-1">
                <label className="block text-xl font-medium text-black ml-6">Expense (/mth) : </label>
                </div>

                <div className="flex-1">
                <label className={currentExpense > 3000 ? "text-red-600 text-2xl" : 'text-green-700 text-2xl'} >{currentExpense} INR </label>
                </div>
              </div>
              {/* <label className="block text-xl font-medium text-black ml-6">Expense (/month) : {currentExpense} INR </label> */}
              {Arr.length > 0 && (
                <ExpenseFront Arr={Arr} />
              )}
            </div>

          </div>

          <div className="grid grid-cols-2 gap-4 mt-14">
            <div>
              <label for="expenseName" className="block text-xl font-medium text-black ml-6">Expense Name</label>
              <Dropdown />
            </div>
            <div>
              <label for="expenseAmount" className="block text-xl font-medium text-black ml-10">Amount</label>
              <input type="number" id="expenseAmount" name="expenseAmount" value={countExpense} onChange={sumUp} className="shadow mt-1 p-2 w-full border rounded-md" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4 mb-8">
            <div>

            </div>
            <div>

            </div>
            <div>
              <button type="button" onClick={() => { sendData(); notify() }} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 ml-20">Add</button>
            </div>
          </div>

          <div>
            {editExpenseData ? (
              <Update editExpenseData={editExpenseData} />
            ) : (
              <ExpenseList dbObj={mgexpenseObj || {}} onEditExpense={handleEditExpense} />
            )}

          </div>

          {/* <div>
            <ExpenseList dbObj={mgexpenseObj || {}} onEditExpense={handleEditExpense} />
          </div>
          
          <div>
            {editExpenseData && <Update editExpenseData={editExpenseData} />}
          </div> */}


        </div>

      </div>
      <ToastContainer />
    </>
  )
}

export default App
