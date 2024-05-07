import React from 'react';
import './StorageCart.css'
import OwnerIdenty from '../ownerIdenty/OwnerIdenty';

const StorageCart = ({cart}) => {

        const toatl =(data)=>{
            const load = document.getElementById('sec')
                load.innerText=data
        
      
        }
    return (
        <div className='MainHead'>
                <OwnerIdenty></OwnerIdenty>

                <div className="mainStorage">
                <p className='addbreak'>Add A Break</p>
                   <div className="break">
                    <p><span onClick={()=>toatl(10)}>10</span>s</p>
                    <p><span onClick={()=>toatl(20)}>20</span>s</p>
                    <p><span onClick={()=>toatl(30)}>30</span>s</p>
                    <p><span onClick={()=>toatl(40)}>40</span>s</p>
                    <p><span onClick={()=>toatl(50)}>50</span>s</p>
                  
                   </div>
                   <p className='addbreak'>Exercise Details</p>
                   <div className="TimeSet">
                    <div className="Exercise">
                        <p>Excrcise time</p>
                        <p id='fst'>{}second</p>
                    </div>
                    <div className="Break">
                        <p>Break time</p>
                        <p><span id='sec'></span> second</p>
                    </div>
                   </div>
                   <button className='ActiveButton'>Activity Completed</button>
                </div>
        </div>
    );
};

export default StorageCart;