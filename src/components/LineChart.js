import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div className="container">
      <main className="col-lg-9 px-md-6 py-4" style={{ marginLeft: "20%" }}>
        <div className="row stats">
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row">
                  <div className="round round-color icon"><i className="sl-icon-target"></i></div>
                  <div className="m-l-10" style={{ paddingLeft: "20px" }}>
                    <h5 className="m-b-0">$100.00</h5>
                    <h3 className="m-b-0">Today</h3></div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row">
                  <div className="round  round-color icon"><i className="sl-icon-chart"></i></div>
                  <div className="m-l-10" style={{ paddingLeft: "20px" }}>
                    <h5 className="m-b-0">$6,069.00</h5>
                    <h3 className="m-b-0">This Month</h3></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row">
                  <div className="round round-color icon"><i className="sl-icon-graph"></i></div>
                  <div className="m-l-10" style={{ paddingLeft: "20px" }}>
                    <h5 className="m-b-0">$7,681.00</h5>
                    <h3 className="m-b-0">This Year</h3></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row">
                  <div className="round  round-color icon"><i className="sl-icon-people"></i></div>
                  <div className="m-l-10" style={{ paddingLeft: "20px" }}>
                    <h5 className="m-b-0">22</h5>
                    <h3 className="m-b-0">Customers</h3></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      <div className="px-md-4 py-4" style={{ marginLeft: "20%", backgroundColor: "white",width:"100%",maxWidth:"75%"}}>
        <p> Payments <button className="btn btn-sm" style={{ float: "right", borderRadius: "20px", backgroundColor: "#24d2b5", fontSize: "10px", color: "White", fontWeight: "bold" }}>2023</button></p>
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: ""
              },
              legend: {
                display: false
              }
            }
          }}
        />
      </div>
    </div>
  );
}
export default LineChart;