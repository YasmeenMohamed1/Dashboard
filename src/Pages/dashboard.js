import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Line } from "react-chartjs-2";
import BarChart from "../Components/barChart";
import Pie from "../Components/pieChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { MdMargin } from "react-icons/md";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const shipments = Array.from({ length: 25 }, (_, index) => ({
    id: 12345 + index,
    recipient: "محمد أحمد " + index,
    recipientPhone: "010000000" + index,
    recipientAddress: "القاهرة",
    sender: "أحمد علي",
    senderPhone: "011000000" + index,
    senderAddress: "الإسكندرية",
    value: "2000 جنيه",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 9;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = shipments.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(shipments.length / rowsPerPage);

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row">
        <nav className="col-12 col-md-2 navbar bg-dark"></nav>

        <div
          className="col-12 col-md-10 p-4"
          style={{ backgroundColor: "#F5F7FA" }}
        >
          <div className="row my-5 d-flex justify-content-between">
            {[
              "الشحنات المطلوبة",
              "الشحنات قيد التوصيل",
              "الشحنات تم التسليم",
              "الشحنات المرتجعة",
            ].map((title, index) => (
              <div key={index} className="col-6 col-md-3 mb-3">
                <div
                  className="box p-3"
                  style={{ backgroundColor: "#fff", textAlign: "center" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 style={{ marginRight: "10px" }}>{title}</h3>
                  </div>
                  <h3>{[150, 120, 180, 90][index]}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="row my-4">
            <div className="col-12 col-md-7 mb-4">
              <h4>الشحنات آخر الأسبوع</h4>
              <div
                className="box"
                style={{
                  backgroundColor: "#fff",
                  padding: "20px",
                  height: "100%",
                }}
              >
                <BarChart />
              </div>
            </div>
            <div className="col-12 col-md-5 mb-4">
              <h4>الشحنات</h4>
              <div
                className="box"
                style={{
                  backgroundColor: "#fff",
                  padding: "20px",
                  height: "100%",
                }}
              >
                <Pie/>
              </div>
            </div>
          </div>

          <div className="row my-4">
            <h3 className="col-10">تفاصيل الشحنات</h3>
            <a className="col-2 text-right">المزيد</a>
          </div>

          <div
            className="box p-3"
            style={{ backgroundColor: "#fff", padding: "20px" }}
          >
            <div className="table-container">
              <table
                className="table mt-3"
                style={{
                  borderCollapse: "separate",
                  borderSpacing: "0 15px",
                  minWidth: "800px",
                }}
              >
                <thead>
                  <tr>
                    {[
                      "رقم الشحنة",
                      "المستلم",
                      "جوال المستلم",
                      "عنوان المستلم",
                      "المرسل",
                      "جوال المرسل",
                      "عنوان المرسل",
                      "قيمة الشحنة",
                      "حذف - توجيه",
                    ].map((header, index) => (
                      <th
                        key={index}
                        style={{
                          color: "#135D66",
                          border: "none",
                          padding: "10px",
                        }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentRows.map((row) => (
                    <tr
                      key={row.id}
                      style={{
                        backgroundColor: "#f9f9f9",
                        borderRadius: "10px",
                      }}
                    >
                      <td style={{ border: "none", padding: "10px" }}>
                        {row.id}
                      </td>
                      <td style={{ border: "none", padding: "10px" }}>
                        {row.recipient}
                      </td>
                      <td style={{ border: "none", padding: "10px" }}>
                        {row.recipientPhone}
                      </td>
                      <td style={{ border: "none", padding: "10px" }}>
                        {row.recipientAddress}
                      </td>
                      <td style={{ border: "none", padding: "10px" }}>
                        {row.sender}
                      </td>
                      <td style={{ border: "none", padding: "10px" }}>
                        {row.senderPhone}
                      </td>
                      <td style={{ border: "none", padding: "10px" }}>
                        {row.senderAddress}
                      </td>
                      <td style={{ border: "none", padding: "10px" }}>
                        {row.value}
                      </td>
                      <td style={{ border: "none", padding: "10px" }}>
                        <button className="btn btn-danger">حذف</button>
                        <button className="btn btn-primary">توجيه</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <hr />
            <div className="d-flex justify-content-end align-items-center mt-3">
              <div>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    className={`btn ${
                      currentPage === index + 1 ? "gradient" : "btn"
                    } mx-1`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div>
                <button
                  className="btn mx-1"
                  onClick={() =>
                    setCurrentPage(
                      currentPage < totalPages ? currentPage + 1 : totalPages
                    )
                  }
                >
                  التالي
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
