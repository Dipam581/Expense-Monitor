import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const ExpenseFront = (props) => {
  let data = props.Arr
  const getMonthIndex = (month) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Augus", "Sep", "Oct", "Nov", "Dec"];
    return months.indexOf(month);
  };

  // Sort the array based on the month order
  data.sort((a, b) => {
    const monthIndexA = getMonthIndex(a.date);
    const monthIndexB = getMonthIndex(b.date);
    return monthIndexA - monthIndexB;
  });
  useEffect(() => {
    am4core.options.commercialLicense = true;
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;
    // Set background color
    chart.background.fill = am4core.color("#3e4852");

    chart.data = data;

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "date";
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.fill = am4core.color("#ffffff");


    // Create value axis
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.baseValue = 0;
    // Disable grid lines for the value axis
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.fill = am4core.color("#ffffff");

    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "date";
    series.strokeWidth = 3;
    series.tensionX = 0.77;

    // bullet is added because we add tooltip to a bullet for it to change color
    var bullet = series.bullets.push(new am4charts.Bullet());
    bullet.tooltipText = "{valueY}";

    bullet.adapter.add("fill", function (fill, target) {
      if (target.dataItem.valueY > 1000) {
        return am4core.color("#FF0000");
      }
      return fill;
    })
    var range = valueAxis.createSeriesRange(series);
    range.value = 500;
    range.endValue = 1000000;
    range.contents.stroke = am4core.color("#FF0000");
    range.contents.fill = range.contents.stroke;

    // Add scrollbar
    // var scrollbarX = new am4charts.XYChartScrollbar();
    // scrollbarX.series.push(series);
    // chart.scrollbarX = scrollbarX;

    chart.cursor = new am4charts.XYCursor();
  }, []);

  return <div id="chartdiv" className='shadow-xl' style={{ width: '100%', height: '100%' }} />;
};

export default ExpenseFront;
