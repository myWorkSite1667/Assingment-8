import React from 'react';
import './OwnerIdenty.css'
import '../StorageCart/StorageCart.css'
const OwnerIdenty = () => {
    return (
        <div>
            <div className="imgHead">
                        <img src={'Capture.PNG'} alt="" />
                       <div className="headText">
                       <p>Md.Shoriful Islam Pranto</p>
                    <p><i class="fa-solid fa-location-dot"></i> Sirajganj, Bangladesh</p>
                       </div>
                </div>
                
                <div className="healthData">
                    <div className="child">
                        <p>60kg</p>
                        <p>Weight</p>
                    </div>
                    <div className="child">
                        <p>5.6</p>
                        <p>Height</p>
                    </div>
                    <div className="child">
                        <p>23yrs</p>
                        <p>Age</p>
                    </div>
                </div>
        </div>
    );
};

export default OwnerIdenty;