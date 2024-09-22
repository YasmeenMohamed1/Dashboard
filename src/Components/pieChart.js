import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

const CustomPieChart = () => {
    const circle = {
        labels: ["قيد التوصيل", "تم التسليم", "المرتجعه", "المحوله"],
        datasets: [
          {
            data: [20, 50, 20, 10],
            backgroundColor: ["yellow", "green", "red", "blue"],
          },
        ],
      };
  return (
    <MDBContainer style={{ width: "100%",height: "auto" }}>
      <Pie data={circle} />
    </MDBContainer>
  );
};

export default CustomPieChart;
