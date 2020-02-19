import React from 'react';
import { useState } from 'react';
import OrderTab from './components/OrderTab.jsx'
import { Divider } from 'antd';
import LogoPizza from './pizza.svg';
import { DragDropContext } from 'react-beautiful-dnd';
import ordersJSON from './server/orders.json'

import 'antd/dist/antd.css';
import './App.css';

function App() {
  const orders = ordersJSON;

  const [columns, setColumns] = useState({
    Pending: {
      status: "Pending",
      orderGroups: orders.filter((order) => (order.status === "Pending")),
    },
    Preparing: {
      status: "Preparing",
      orderGroups: orders.filter((order) => (order.status === "Preparing")),
    },
    Delivered: {
      status: "Delivered",
      orderGroups: orders.filter((order) => (order.status === "Delivered")),
    }
  })

  const onDragEnd = (result) => {
    const { source, destination } = result;

      const sourceStatus = source.droppableId;
      const destinationStatus = destination.droppableId;

      var newColumns = columns;
      const movedItem =  newColumns[sourceStatus].orderGroups.splice(source.index, 1)[0];
      movedItem.status = destinationStatus;

      newColumns[destinationStatus].orderGroups.splice(destination.index, 0, movedItem);  

    setColumns(newColumns);
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
          <OrderTab status="pending" column={columns.Pending}/>
          <Divider type="vertical" style={{ height: "100vh"}}/>
          <OrderTab status="preparing" column={columns.Preparing}/>
          <Divider type="vertical" style={{ height: "100vh" }}/>
          <OrderTab status="delivered" column={columns.Delivered}/>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;