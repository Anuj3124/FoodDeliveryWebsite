import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    country:"",
    zipcode:"",
    phone:""
    })

    const OnChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    const placeOrder = async (event) => {
      event.preventDefault();
      let orderItems = [];
      food_list.map((item)=>{
        if (cartItems[item._id]>0) {
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo);
        }
      })
      let orderData = {
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+4,
      }
      let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
      if (response.data.success){
        const {session_url} = response.data;
        window.location.replace(session_url);
      }
      else{
        console.log(response.data);
        alert("Error");
      }
    }

    const navigate = useNavigate();

    useEffect(()=>{
      if(!token){
        navigate('/cart');
        alert("Please Login")
      }
      else if(getTotalCartAmount()===0){
        navigate('/cart')
        alert("Please Add Items")
      }
    },[token])

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Info</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={OnChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
          <input required name='lastName' onChange={OnChangeHandler} value={data.lastName} type="text" placeholder='Last Name' />
        </div>
        <input required name='email' onChange={OnChangeHandler} value={data.email} type="email" placeholder='Email'/>
        <input required name='street' onChange={OnChangeHandler} value={data.street} type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input required name='city' onChange={OnChangeHandler} value={data.city} type="text" placeholder='City' />
          <input required name='state' onChange={OnChangeHandler} value={data.state} type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input required name='country' onChange={OnChangeHandler} value={data.country} type="text" placeholder='Country' />
          <input required name='zipcode' onChange={OnChangeHandler} value={data.zipcode} type="text" placeholder='Zip Code' />
        </div>
        <input required name='phone' onChange={OnChangeHandler} value={data.phone} type="text" placeholder='Phone Number'/>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:4}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type='submit'>PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
