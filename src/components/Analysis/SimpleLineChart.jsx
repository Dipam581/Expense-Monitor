import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("props ", props)

    this.state = {
      options: {
        chart: {
          id: "Date"
        },
        xaxis: {
          categories: props.dateArray
        }
      },
      series: [
        {
          name: "Cost",
          data: props.costArray
        }
      ]
    };
  }

  render() {
    return (
      <div className="border-separate rounded-lg">
        {/* <div className="row"> */}
        {/* <div className="mixed-chart"> */}
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="850"
        />
        {/* </div> */}
        {/* </div> */}
      </div>
    );
  }
}

export default App;