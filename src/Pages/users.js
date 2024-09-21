import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel, faPlus } from "@fortawesome/free-solid-svg-icons";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";
import MessageSuccess from "../Components/messageSucess";

const Users = () => {
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
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const rowsPerPage = 9;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = shipments.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(shipments.length / rowsPerPage);

  const exportToExcel = () => {
    const sheetData = [
      [
        "رقم الشحنة",
        "المستلم",
        "جوال المستلم",
        "عنوان المستلم",
        "المرسل",
        "جوال المرسل",
        "عنوان المرسل",
        "قيمة الشحنة",
      ],
      ...currentRows.map((row) => [
        row.id,
        row.recipient,
        row.recipientPhone,
        row.recipientAddress,
        row.sender,
        row.senderPhone,
        row.senderAddress,
        row.value,
      ]),
    ];
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(sheetData);
    XLSX.utils.book_append_sheet(wb, ws, "Shipments");
    XLSX.writeFile(wb, "المستخدمون.xlsx");
    setShowSuccessMessage(true);
  };

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row">
        <nav className="col-12 col-md-2 navbar bg-dark"></nav>

        <div
          className="col-12 col-md-10 p-4"
          style={{ backgroundColor: "#F5F7FA" }}
        >
          <div className="d-flex justify-content-start mb-3">
            <Link
               className="px-4 py-2 bg-light text-light"
               style={{
                 backgroundImage: "linear-gradient(180deg, #135D66 0%, #22A6B6 100%)",
                 textDecorationLine:"none",
                 borderRadius: '5px',
               }}
              to="/addUser"
            >
              اضافه مستخدم <FontAwesomeIcon icon={faPlus} />
            </Link>
             <button
              className="btn border mx-1"
              style={{ backgroundColor: "#fff",color:"#22A6B6" }}
              onClick={exportToExcel}
            >
              إصدار كملف اكسيل <FontAwesomeIcon icon={faFileExcel} />
            </button>
          </div>
          {showSuccessMessage && <MessageSuccess onClose={() => setShowSuccessMessage(false)} />}
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

export default Users;
