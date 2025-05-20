import { useEffect, useState } from "react";
import "../Estimation.css";
const arrData = [
  "S.No",
  "Resource",
  "Total Hrs",
  "Number Of Resources",
  "Annual Cost",
];
const Departmentwisedata = ({ Depfiledata, selectedCategory, Currency }) => {
  let category;
  if (selectedCategory == "department") {
    category = "Sub department";
  }
  if (selectedCategory == "subdepartment") {
    category = "Project";
  }
  if (selectedCategory == "project") {
    category = "Team";
  }
  if (selectedCategory == "team") {
    category = "Team";
  }
  if (selectedCategory == "organization") {
    category = "Department";
  }
  if (selectedCategory == "jobtitle") {
    category = "Jobtitle";
  }
  return (
    <div className="col-12 ms-3 pt-2 pe-4">
      <div className="card shadow mb-4  pt-2">
        <div className=" ms-3 py-3">
          <p
            className="mb-1"
            style={{
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "0px",
              color: "#000000",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Department Report
          </p>
        </div>
        <div
          className=" overflow-auto pt-0 ms-3 pe-3 "
          style={{ maxHeight: 245 }}
        >
          <table
            id="tblDepartmentFte"
            className="table    table-hover table-striped pb-1"
            style={{ borderRadius: "10px" }}
          >
            <thead>
              <tr style={{ border: "1px solid #dee2e6", borderRadius: "10px" }}>
                {arrData.map((data, index) => (
                  <th
                    scope="col"
                    key={index}
                    style={{
                      fontSize: "14px",
                      backgroundColor: "#E0E3E9",
                      lineHeight: "100%",
                      letterSpacing: "0px",
                      fontWeight: 600,
                      color: "#202224",
                      textAlign: "center",
                      justifyContent: "center",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {/* <div className="d-flex align-items-center"  > */}
                    <span className="d-flex align-items-center ms-1">
                      <span>{data}</span>
                      {data?.toLowerCase().includes("annual cost") && (
                        <span
                          className="ms-2"
                          style={{
                            fontSize: "15px",
                            color: "#4880FF",
                            fontWeight: "700",
                          }}
                        >
                          {Currency}
                        </span>
                      )}
                    </span>
                    {/* </div> */}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {Depfiledata && Depfiledata.length > 0 ? (
                Depfiledata.map((item, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        fontSize: "14px",
                        // backgroundColor:"#E0E3E9" ,
                        lineHeight: "100%",
                        letterSpacing: "0px",
                        fontWeight: 400,
                        color: "#202224",
                        textAlign: "start",
                        paddingLeft: "15px",
                        fontFamily: "Poppins, sans-serif",
                        justifyContent: "center",
                      }}
                    >
                      {index + 1}
                    </td>
                    <td
                      style={{
                        fontSize: "14px",
                        // backgroundColor:"#E0E3E9" ,
                        lineHeight: "100%",
                        letterSpacing: "0px",
                        fontWeight: 400,
                        color: "#202224",
                        textAlign: "start",
                        paddingLeft: "15px",
                        justifyContent: "center",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {item.entityName}
                    </td>
                    <td
                      style={{
                        fontSize: "14px",
                        // backgroundColor:"#E0E3E9" ,
                        lineHeight: "100%",
                        letterSpacing: "0px",
                        fontWeight: 400,
                        color: "#202224",
                        textAlign: "start",
                        paddingLeft: "15px",
                        justifyContent: "center",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {item.totalHours}
                    </td>
                    <td
                      style={{
                        fontSize: "14px",
                        // backgroundColor:"#E0E3E9" ,
                        lineHeight: "100%",
                        letterSpacing: "0px",
                        fontWeight: 400,
                        color: "#202224",
                        textAlign: "start",
                        paddingLeft: "15px",
                        justifyContent: "center",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {Math.round(item.numberOfResources * 100) / 100}
                    </td>
                    <td
                      style={{
                        fontSize: "14px",
                        // backgroundColor:"#E0E3E9" ,
                        lineHeight: "100%",
                        letterSpacing: "0px",
                        fontWeight: 400,
                        color: "#202224",
                        textAlign: "start",
                        paddingLeft: "15px",
                        justifyContent: "center",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {item.annualCost}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Departmentwisedata;
