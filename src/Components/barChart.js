import React, { useState } from "react";
import { CDBContainer } from "cdbreact";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const [data] = useState({
    labels: [
      "السبت",
      "الاحد",
      "الاثنين",
      "الثلاثاء",
      "الاربعاء",
      "الخميس",
      "الجمعه",
    ],
    datasets: [
      {
        label: "الشحنات المحوله",
        backgroundColor: "rgba(194, 116, 161, 0.5)",
        borderColor: "rgb(194, 116, 161)",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: "الشحنات تم التسليم",
        backgroundColor: "rgba(71, 225, 167, 0.5)",
        borderColor: "rgb(71, 225, 167)",
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  });

  return (
    <CDBContainer style={{ width: "100%", height: "auto" }}>
      <Bar data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
};

export default BarChart;
