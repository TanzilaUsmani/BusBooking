import React from "react";
import '../../Components/common.css';

function Savingscards(){
    return(
    <div className="container bg-light py-4 smartbus-section" style={{ maxWidth: '1300px', maxHeight: '550px'}}>
      <div className="row align-items-center px-3 px-md-5">
        {/* Left Content */}
        <div className="col-md-7 text-white position-relative p-4 rounded smartbus-left">
          <h5 className="text-warning mb-0">SmartBus</h5>
          <h4 className="fw-bold mb-1">Savings Card</h4>
          <p className="mb-4">Smart is saving more on every trip</p>
          <h3 className="fw-bold">Save ₹600 on SmartBus</h3>
          <ul className="list-unstyled mt-3">
            <li>• Get 10% off on each trip (upto ₹200)</li>
            <li>• Can be applied over multiple trips to redeem the full savings value of ₹600</li>
            <li>• Valid from 6 months of purchase</li>
          </ul>
        </div>

        {/* Right Content */}
       
      </div>
    </div>
    )

    
}

export default Savingscards;