import React from 'react';
import { Chart } from "react-google-charts";

// https://react-google-charts.com/gantt-chart
export default function({project}) {
  const columns = [
    { type: 'string', label: 'Task ID' },
    { type: 'string', label: 'Task Name' },
    { type: 'string', label: 'Resource' },
    { type: 'date', label: 'Start Date' },
    { type: 'date', label: 'End Date' },
    { type: 'number', label: 'Duration' },
    { type: 'number', label: 'Percent Complete' },
    { type: 'string', label: 'Dependencies' },
  ];

  const rows = project.news.map((item, i) => {
    const past = new Date(item.eventDate);
    const future = new Date(item.expectedDelivery);
    let percentDone = 0;
    if (
      new Date(item.expectedDelivery) < Date.now()) {
        percentDone = 100;
    } else {
      percentDone = Math.round((Date.now() - past) / (future - past) *100);
    }
    return [
      item.id,
      item.miniDesc,
      item.type,
      past,
      future,
      null,
      percentDone,
      item.dependency,
    ];
  });

  const startDate = new Date(project.news[0].eventDate);
  const initialEstimate = new Date(project.news[0].expectedDelivery);
  const finalEstimate = new Date(project.news[project.news.length - 1].expectedDelivery);
  const overEstimate = Math.round((finalEstimate - startDate) / (initialEstimate - startDate) * 100) - 100;
  const overRunMonth = Math.round((finalEstimate - initialEstimate)/1000/60/60/24/30);
  const initialMonth = Math.round((initialEstimate - startDate)/1000/60/60/24/30);
  // const options = { colors: ["salmon", "pink"] }; // Color do not seems to work.

  return (
  <div>
    <h1>{project.name} overun {overEstimate} % ({overRunMonth} month) from initial estimate of {initialMonth} months</h1>
    <Chart
      width={'95%'}
      height={`${55*project.news.length}px`}
      chartType="Gantt"
      loader={<div>Loading Chart</div>}
      data={[
        columns,
        ...rows,
      ]}
      rootProps={{ 'data-testid': '1' }}
  />
  </div>);
}