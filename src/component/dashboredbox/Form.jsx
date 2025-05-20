import React from "react";
import { RiQuestionMark } from "react-icons/ri";
import { SlSizeFullscreen } from "react-icons/sl";

import "./Form.css";

function Form() {
  return (
    <div
      className="container shadow-sm pb-3 pt-1 bg-white rounded"
      style={{ height: "max-content", border: "1.5px dotted lightgray" }}
    >
      <div
        className="d-flex justify-content-between align-items-center mt-3 border rounded-top p-3"
        style={{ borderColor: "lightgray" }}
      >
        <label htmlFor="inputPassword6" className="w-50 me-2">
          FTE Name
        </label>

        <div className="tool__container">
          <input
            type="text"
            id="FTE-Name"
            className="form-control rounded opacity-50 w-100"
            placeholder="FTE Name"
          />
          <span className="tool__text">FTE Name</span>
        </div>
      </div>

      <div
        className=" mt-1 border rounded p-3"
        style={{ borderColor: "lightgray" }}
      >
        <div className="mb-5 d-flex align-items-center justify-content-between">
          <div className="text-warning ">CalCulate FTE</div>
          <SlSizeFullscreen className="text-warning me-2" />
        </div>

        <div className="tool__container w-100">
          <input
            className="form-control mb-3 opacity-50 py-3 "
            type="text"
            placeholder="Daily Working Hours"
          />
          <span className="tool__text">Daily Working Hours</span>
        </div>

        <div className="d-flex mb-3">
          <div className="tool__container w-100">
            <input
              type="text"
              className="form-control opacity-50 py-3"
              style={{ borderRadius: "5px 0 0 5px" }}
              placeholder="Daily Break Hours"
            />
            <span className="tool__text">Daily Break Hours</span>
          </div>

          <button
            className="btn btn-outline-secondary bg-secondary text-white"
            style={{ borderRadius: "0 5px 5px 0" }}
            type="button"
            id="button-addon2"
          >
            Add
          </button>
        </div>

        <div className="tool__container w-100">
          <input
            className="form-control mb-3 opacity-50 py-3"
            type="text"
            placeholder="Weekly Working Days"
          />
          <span className="tool__text">Weekly Working Days</span>
        </div>

        <div className="d-flex align-items-center">
          Gazetted Holidays
          <div className="tool__container">
            <RiQuestionMark />
            <span className="tool__text">
              Kashmir Solidarity Day 1 Pakistan Day 1 Labour Day 1 Independence
              Day 1 Iqbal Day 1 Quaid-e-Azam Day 1 Eid-ul-fitar 3 Eid-ul-Adha 3
              Milad ul Nabi 1 Ashura 2
            </span>
          </div>
        </div>

        <div className="d-flex h-40 overflow-hidden mb-3">
          <div className="col-sm">
            <select
              className="form-select "
              id="specificSizeSelect"
              style={{ borderRadius: "5px 0 0 5px" }}
            >
              <option defaultValue>South Asia</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="col-sm d-flex ">
            <select
              className="form-select"
              style={{ borderRadius: "0 0 0 0" }}
              id="specificSizeSelect"
            >
              <option defaultValue>Pakistan</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <div
              className="d-flex align-items-center rounded-end bg-secondary text-white"
              style={{
                padding: "0px 9px",
              }}
            >
              15
            </div>
          </div>
        </div>

        <div className="tool__container w-100">
          <input
            className="form-control mb-3 opacity-50 py-3"
            type="text"
            placeholder="Annual Leaves"
          />
          <span className="tool__text">Annual Leaves</span>
        </div>

        <div className="tool__container w-100">
          <input
            className="form-control mb-3 opacity-50 py-3"
            type="text"
            placeholder="Sick Leaves"
          />
          <span className="tool__text">Sick Leaves</span>
        </div>

        <div className="tool__container w-100">
          <input
            className="form-control mb-3 opacity-50 py-3"
            type="text"
            placeholder="Casual Leaves"
          />
          <span className="tool__text">Casual Leaves</span>
        </div>

        <div className="d-flex mb-3">
          <div className="tool__container w-100">
            <input
              type="text"
              className="form-control opacity-50 py-3"
              style={{ borderRadius: "5px 0 0 5px" }}
              placeholder="Other Away Days"
            />
            <span className="tool__text">Other Away Days</span>
          </div>

          <button
            className="btn btn-outline-secondary bg-secondary text-white"
            style={{ borderRadius: "0 5px 5px 0" }}
            type="button"
            id="button-addon2"
          >
            Add
          </button>
        </div>

        <div className="ms-4">
          <button className="bg-danger border-0 me-2 rounded px-3 py-2 text-white ">
            Add
          </button>
          <button className="bg-secondary border-0 rounded px-3 py-2 text-white">
            Rest
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
