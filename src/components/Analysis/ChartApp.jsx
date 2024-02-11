import { useState, useCallback, useEffect } from 'react';
import SimpleLineChart from './SimpleLineChart.jsx';
import CollapsibleTable from './CollapsibleTable.jsx';

function ChartApp() {
  const [dateArray, setDateArray] = useState([]);
  const [costArray, setCostArray] = useState([]);
  const [allSprendObj, setallSprendObj] = useState({});

  const fetchData = useCallback(async () => {
    try {
      console.log("data fetch started...");
      const response = await fetch('http://localhost:8080/demo', {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data)
      const returnedObj = createData(data);

      setDateArray(returnedObj[0]);
      setCostArray(returnedObj[1]);


      const allData = createallData(data);
      setallSprendObj(allData);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const createData = (obj) => {
    let dateArr = [];
    let costArr = [];

    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    currentMonth += 1;

    let subObj = {};
    for (let i in obj) {
      //if ((obj[i].date.split("-")[0] == new Date().getFullYear()) && (parseInt(obj[i].date.substring(5, 7)) == currentMonth)) {
      if (!subObj[obj[i].date.substring(0, 10)]) {
        subObj[obj[i].date.substring(0, 10)] = 0
      }
      subObj[obj[i].date.substring(0, 10)] += obj[i].cost;
      //}
    }

    for (let key in subObj) {
      dateArr.push(key);
      costArr.push(subObj[key]);
    }
    return [dateArr, costArr];
  };

  const createallData = (data) => {
    const nestedObject = {};
    data.forEach(item => {
      let { _id, date, ...rest } = item;
      date = date.substring(0, 10)
      if (!nestedObject[date]) {
        nestedObject[date] = {};
      }
      nestedObject[date][_id] = rest;
    });

    const dataArray = Object.entries(nestedObject);
    dataArray.sort((a, b) => {
      const dateA = new Date(a[0]);
      const dateB = new Date(b[0]);
      return dateA - dateB;
    });
    const sortedData = Object.fromEntries(dataArray);
    return sortedData;
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center bg-clip-border">
        <div className="bg-white p-4 md:p-8 rounded shadow-md md:w-200">

          <div>
            {/* Check if dateArray and costArray are not empty before rendering */}
            <div>
              <CollapsibleTable allSprendObj={allSprendObj} />
            </div>

          </div>
          <div className='' style={{ "border-radius": "15%" }}>
            <h1 className="text-2xl md:text-3xl font-black mt-10 mb-2 md:mb-4 pb-4 md:pb-8 ml-20">Analysis</h1>
            {dateArray.length > 0 && costArray.length > 0 && (
              <SimpleLineChart dateArray={dateArray} costArray={costArray} />
            )}
          </div>



        </div>
      </div>
    </>
  );
}

export default ChartApp;
