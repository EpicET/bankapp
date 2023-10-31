/* eslint-disable react/prop-types */
import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function LineChart({ accounts }) {
  function getAmounts(transHistory) {
    const transactionLabels = [];
    const transactionAmounts = [];
    Object.entries(transHistory).forEach(([key, value]) => {
      transactionLabels.push(key);
      const words = value.split(" ");
      if (words.length > 0) {
        transactionAmounts.push(parseFloat(words[1]));
      }
    });
    return transactionAmounts;
  }

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function getAccountInfo(account) {
    const color = getRandomColor();
    return {
      label: account.accountID,
      data: getAmounts(account.transHistory),
      borderColor: color,
      backgroundColor: color,
    };
  }

  const allData = {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: accounts.map(getAccountInfo),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Recent Balance History",
      },
      scales: {
        x: {
          display: true,
          position: "bottom",
          text: "Last Ten Transactions",
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          text: "Amount",
        },
      },
    },
  };

  return (
    <div>
      <Line data={allData} options={options} />
    </div>
  );
}
