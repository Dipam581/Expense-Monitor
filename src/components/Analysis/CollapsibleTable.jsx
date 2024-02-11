import React from 'react';
import { useState } from "react";

const CollapsibleTable = (props) => {
  const [expandedRows, setExpandedRows] = useState([]);

  const handleRowClick = (date) => {
    if (expandedRows.includes(date)) {
      setExpandedRows(expandedRows.filter((row) => row !== date));
    } else {
      setExpandedRows([...expandedRows, date]);
    }
  };

  return (
    <>
      {/* <div className='bg-green-700 justify-center flex'> */}
      <h1 className="text-2xl md:text-3xl font-black md:mb-4 md:pb-8 ml-20">Total Expense Details</h1>
      <div className="mt-4 overflow-y-auto max-h-96 border-separate border-spacing-10 border-slate-500 ml-20" style={{"margin-right" : "14%"}}>
        <table className="border border-separate  text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
          <thead className='bg-green-200 sticky top-0 z-10'>
            <tr>
              <th style={{"width" : "15%"}}>Date</th>
              <th className='text-center' style={{"width" : "25%"}}>Item</th>
              <th className='text-center' style={{"width" : "20%"}}>Cost</th>
            </tr>
          </thead>
          <tbody>
            {props.allSprendObj && Object.keys(props.allSprendObj).map((date) => (
              <React.Fragment key={date}>
                <tr
                  className="cursor-pointer bg-green-500 hover:bg-current"
                  onClick={() => handleRowClick(date)}
                >
                  <td className='text-slate-50'>{expandedRows.includes(date) ? date + " ▲" : date + " ▼"}</td>
                  {/* <td colSpan="2" className="text-center">

                  </td> */}
                  <td className='text-slate-50'></td>
                  <td className='text-slate-50'></td>
                </tr>
                {expandedRows.includes(date) &&
                  Object.keys(props.allSprendObj[date]).map((id) => (
                    <tr key={id}>
                      <td>{date}</td>
                      <td className='text-center justify-center text-wrap'>{props.allSprendObj[date][id].item}</td>
                      <td className='text-center'>{props.allSprendObj[date][id].cost}</td>
                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* </div> */}
    </>

  );
};

export default CollapsibleTable;
