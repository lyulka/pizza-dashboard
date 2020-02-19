import React from 'react';
import { useState, useEffect } from 'react';
import OrderTab from './components/OrderTab.jsx'
import { Divider } from 'antd';
import LogoPizza from './pizza.svg';
import { DragDropContext } from 'react-beautiful-dnd';
import ordersJSON from './server/orders.json'

import 'antd/dist/antd.css';
import './App.css';

function App() {
  const [orders, setOrders] = useState(ordersJSON);

  // Fetch code:
  // const fetchOrders = async() => {
  //   const response = await fetch('./server/orders.json')
  //   const responseJson = await response.json();
  //   setOrders(responseJson);
  // }

  // Unfortunately I don't have a server-side script on me that'd allow for a POST
  // to orders.json, and browsers won't let me overwrite files in localstorage
  // (I suppose for good reason)
  // const postOrders = async () => {
  //   const newData = {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   }

  //   try {
  //     console.log("attempting to post")
  //     const fetchResponse = await fetch('/server/orders.json', newData);
      
  //     if (fetchResponse.ok) {
  //       console.log("success!")
  //     }
  //   } catch (error) {
  //     console.log("something went wrong when updating data")
  //   }
  // };

  // Fetch code:
  // useEffect(() => {
  //   fetchOrders();
  // }, [])

  const onDragEnd = (res) => {
    const { destination, draggableId } = res;

    var newOrders = orders;
    for (var i = 0; i < newOrders.length; i++) {
      if (newOrders[i].id === parseInt(draggableId)) {
        if (destination) {
          newOrders[i].status = destination.droppableId;
        }
      }
    }

    setOrders(newOrders);
  }

  return (
    <div className="App">
      <header>
        <img className="header-logo" src={LogoPizza} alt="Stylised pizza logo"/>
        <h1 className="header-title">Pizza Dashboard</h1>
      </header>
      <div className="order-container">
        <DragDropContext 
          onDragEnd={onDragEnd}>
          <OrderTab status="pending" orders={orders}/>
          <Divider type="vertical" style={{ height: "100vh"}}/>
          <OrderTab status="preparing" orders={orders}/>
          <Divider type="vertical" style={{ height: "100vh" }}/>
          <OrderTab status="delivered" orders={orders}/>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;