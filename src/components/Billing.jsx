import React from "react";
import TablesBilling from "./TablesBilling";
import BillingBottom from "./BillingBottom";
import Example from "./BillModal";

const Billing = () => {
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-12 d-flex justify-content-between mt-3 bg p-2">
          <h5 className="text-white">Billing </h5>
          {/* <button className="btn m-0 rounded">Close</button> */}
          <Example />
        </div>
      </div>
      <div className="bg p-3 mt-3">
        <div className="row mt-3 justify-content-center align-items-center">
          <div className="col-lg-12 align-items-center">
            <form className="bg_billing p-2">
              <div class="row justify-content-center align-items-center ">
                <div class="col-lg-4 d-flex">
                  <label for="uname" className="fw-bold">
                    {" "}
                    Bill{" "}
                  </label>
                  <input
                    type="text"
                    class="form-control ms-3 height"
                    id="uname"
                    placeholder="Enter student name"
                    name="sname"
                  />
                </div>
                <div class="col-lg-4 d-flex">
                  <label for="pswd" className="fw-bold">
                    {" "}
                    Name{" "}
                  </label>
                  <input
                    type="password"
                    class="form-control ms-3 height"
                    id="pswd"
                    placeholder="Enter student password"
                    name="pswd "
                  />
                </div>
                <div class="col-lg-1">
                  <button type="submit" class="btn btn_add">
                    {" "}
                    Add{" "}
                  </button>
                </div>
                <div class="col-lg-3 ">
                  <button type="submit" class="btn btn_add">
                    {" "}
                    Refresh{" "}
                  </button>
                  <button type="submit" class="btn btn_add ms-2">
                    {" "}
                    Save{" "}
                  </button>
                  <button type="submit" class="btn btn_add ms-2 mt-2">
                    {" "}
                    New{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-12  align-items-center">
            <form>
              <div class="row justify-content-center p-2 align-items-center">
                <div class="col-lg-4 d-flex">
                  <label for="uname" className="fw-bold">
                    {" "}
                    Bill{" "}
                  </label>
                  <input
                    type="text"
                    class="form-control ms-3 height"
                    id="uname"
                    placeholder="Enter student name"
                    name="sname"
                  />
                </div>
                <div class="col-lg-4 d-flex">
                  <label for="pswd" className="fw-bold">
                    {" "}
                    Name{" "}
                  </label>
                  <input
                    type="password"
                    class="form-control ms-3 height"
                    id="pswd"
                    placeholder="Enter student password"
                    name="pswd "
                  />
                </div>
                <div class="col-lg-1">
                  <button type="submit" class="btn btn_add">
                    {" "}
                    Add{" "}
                  </button>
                </div>
                <div class="col-lg-3">
                  {/* <button type = "submit" class = "btn btn_add"> Add </button>   */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <TablesBilling />
      <BillingBottom />
    </div>
  );
};

export default Billing;
