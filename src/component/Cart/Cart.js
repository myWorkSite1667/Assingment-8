import React from 'react';
import './Cart.css'



const Cart = ({cart,hanlar}) => {
    const{For_Age,Time,text,name}=cart;
    return (
        <div className='Cart'>
            <div className="img">
              <img src={'logo192.png'} alt="" />
            </div>
            <div className="body">
                <p>{name}</p>
                <p>{text}</p>
                <p>For Age : {For_Age} </p>
                <p> Time required :{Time} </p>
                <button className='button1' onClick={()=>hanlar(cart)} >Add to list</button>
            </div>
        </div>
    );
};

export default Cart;