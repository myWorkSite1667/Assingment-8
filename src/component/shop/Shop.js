import React, { useEffect, useState } from 'react';
import './Shop.css'
import Cart from '../Cart/Cart';
import { LocalStorage, getItem } from '../LocalStorage/LocalStorage';
import StorageCart from '../StorageCart/StorageCart';

const Shop = () => {
    const [user,SetUser]=useState([])
    const [cart,SetCart]=useState([])

        useEffect(()=>{
            fetch('Data.json')
            .then(res=>res.json())
            .then(data=>SetUser(data))
        },[])
        // // useEffect(()=>{
        // //     const saveCart=getItem()
        // //     for(const datas of saveCart){
        // //         const  loadData=user.find(porduct=>porduct.id=== datas)

        // //     }
        // },[user])
        const hanlar =(data)=>{
            let neCart = [...cart,data]
            SetCart(neCart)
        }
    return (
        <div className='mainShop'>
           <div className="header">
            <div className="topheader">
            <i class="fa-solid fa-dumbbell"></i>
           <p className='p1'>UTRA-ACTIVE-CLUB</p>
            </div>
           <p className='p2'>Select today's exercise</p>
           </div>
           <div className="cart">
            {
                user.map(data=><Cart
                    key={data.id}
                    cart={data}
                    hanlar={hanlar}
                ></Cart>)
            }
          
           </div>
           
        </div>
    
    );
};

export default Shop;