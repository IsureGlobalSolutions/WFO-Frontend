import React from "react";
import { RxDownload } from "react-icons/rx";
import { GrFormView } from "react-icons/gr";
import { Modal } from "react-bootstrap";
import "../Estimation.css";

const ViewEstimationdata = ({getfteestimationdata,
  getfiledata,
  handleDownloadFile,
  handleokbutton,
  handleViewFile}) => {
  return (
    <div className="col-7 ">
      <div className="card shadow mb-4 pe-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">List of Files</h6>
        </div>
        <div className="col-xl-12 ms-2"></div>
        <ul className="nav nav-tabs tab-card pt-1 col-12" role="tablist">
          <li className="nav-item col-4">
            <a
              className="nav-link active"
              data-bs-toggle="tab"
              href="#nav_week1"
              role="tab"
            >
              Original File
            </a>
          </li>
          <li className="nav-item col-4">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="#nav_week2"
              role="tab"
            >
              Customized File
            </a>
          </li>
        </ul>
        <div className="col-12" >
          <div className="card-body">
            <div className="overflow-auto">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active table-responsive"
                  id="nav_week1"
                  role="tabpanel"
                >
                  <table
                    id="tblEstimationFiles"
                    className="table table-striped table-bordered table-sm table-bordered-custom"
                  >
                    <thead>
                      <tr className="table-bordered-custom">
                        <th>File Name</th>
                        <th>File Type</th>
                        <th>File FTE</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(getfteestimationdata) &&
                        getfiledata?.map((file, index) => (
                          <tr key={index} className="table-bordered-custom">
                            <td className="table-bordered-custom">
                              {file.fileName}
                            </td>
                            <td className="table-bordered-custom">
                              {file.fileExtension}
                            </td>
                            <td className="table-bordered-custom">
                              {file.fte}
                            </td>
                            <td className="table-bordered-custom">
                              <button
                                className="btn btn-sm btn-outline-primary col-xs-12 me-2"
                                title="Download"
                                onClick={() =>
                                  handleDownloadFile(file.fileName)
                                }
                              >
                                <RxDownload style={{ fontSize: "15px" }} />
                              </button>
                              <button
                                className="btn btn-sm btn-outline-danger col-xs-12 rounded-2"
                                type="button"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Delete"
                                onClick={() => handleokbutton(file.id)}
                              >
                                <i className="fa fa-trash" />
                              </button>
                              <button
                                className="btn btn-sm btn-outline-info col-xs-12 ms-1 rounded-1"
                                title="View"
                                onClick={() => handleViewFile(file.fileName)}
                              >
                                <GrFormView />
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                <div className="tab-pane fade" id="nav_week2" role="tabpanel">
                  <table
                    id="tblCustomFiles"
                    className="table myDataTable table-hover align-middle mb-0"
                  >
                    <thead>
                      <tr>
                        <th>File Name</th>
                        <th>File Type</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody />
                  </table>
                </div>
                <div className="tab-pane fade" id="nav_week3" role="tabpanel">
                  <div className="card">
                    <div className="card-body text-center p-5">
                      <img
                        src="../assets/img/no-data.svg"
                        className="w120"
                        alt="No Data"
                      />
                      <div className="mt-4 mb-3">
                        <span className="text-muted">No data to show</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-white border lift"
                      >
                        Get Started
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary border lift"
                      >
                        Back to Home
                      </button>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav_week4" role="tabpanel">
                  <div className="card">
                    <div className="card-body text-center p-5">
                      <img
                        src="../assets/img/no-data.svg"
                        className="w120"
                        alt="No Data"
                      />
                      <div className="mt-4 mb-3">
                        <span className="text-muted">No data to show</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-white border lift"
                      >
                        Get Started
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary border lift"
                      >
                        Back to Home
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEstimationdata;
