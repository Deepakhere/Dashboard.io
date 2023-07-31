import React from 'react'
import './style.css'
import { FaRegStar } from 'react-icons/fa';

const Cards = () => {
    return (
        <div className="col-lg-9 px-md-4 py-4" style={{ marginLeft: "20%" }}>

            <p style={{ color: '#0ea6ec', fontSize: "20px", fontWeight: "400" }}>Plans</p>
            <div className='card-desk d-flex'>
                <div className="card " style={{ width: "15rem", marginRight: "15px", boxShadow: "0px 0px 7px -4px green" }}>
                    <div className="">
                        <h3 style={{ fontSize: "18px", textAlign: "center", marginTop: "10px" }}>Free Plan</h3>
                        <h5 style={{ fontWeight: "bold", fontSize: "24px", textAlign: "center", marginTop: "16px", marginBottom: "0" }}>$0.00 <span style={{ fontSize: "12px" }}>/MONTH</span></h5>
                        <h3 style={{ fontWeight: "400", fontSize: "14px", textAlign: "center" }}>$0.00/Year</h3>
                    </div>
                    <ul className="list-group list-group-flush text-center">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">
                            <div className=''>
                                <button type="button" className="btn btn-warning btn-sm m-1">Archieve</button>
                                <button type="button" className="btn btn-danger btn-sm m-1">Delete</button>
                                <button type="button" className="btn btn-primary btn-sm m-1">Edit</button>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className="card" style={{ width: "15rem", marginRight: '15px', boxShadow: "0px 0px 7px -4px orange" }}>
                    <div className="">
                        <h3 style={{ fontSize: "18px", textAlign: "center", marginTop: "10px" }}>Silver Plan <FaRegStar style={{ color: "red", fontSize: "20px" }} /></h3>
                        <h5 style={{ fontWeight: "bold", fontSize: "24px", textAlign: "center", marginTop: "16px", marginBottom: "0" }}>$5.99 <span style={{ fontSize: "12px" }}>/MONTH</span></h5>
                        <h3 style={{ fontWeight: "400", fontSize: "14px", textAlign: "center" }}>$50.00/Year</h3>
                    </div>
                    <ul className="list-group list-group-flush text-center">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">
                            <div className=''>
                                <button type="button" className="btn btn-warning btn-sm m-1">Archieve</button>
                                <button type="button" className="btn btn-danger btn-sm m-1">Delete</button>
                                <button type="button" className="btn btn-primary btn-sm m-1">Edit</button>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="card" style={{ width: "15rem", boxShadow: "0px 0px 7px -4px green" }}>
                    <div className="">
                        <h3 style={{ fontSize: "18px", textAlign: "center", marginTop: "10px" }}>Gold Plan</h3>
                        <h5 style={{ fontWeight: "bold", fontSize: "24px", textAlign: "center", marginTop: "16px", marginBottom: "0" }}>$9.99 <span style={{ fontSize: "12px" }}>/MONTH</span></h5>
                        <h3 style={{ fontWeight: "400", fontSize: "14px", textAlign: "center" }}>$90.00/Year</h3>
                    </div>
                    <ul className="list-group list-group-flush text-center">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">
                            <div className=''>
                                <button type="button" className="btn btn-warning btn-sm m-1">Archieve</button>
                                <button type="button" className="btn btn-danger btn-sm m-1">Delete</button>
                                <button type="button" className="btn btn-primary btn-sm m-1">Edit</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards