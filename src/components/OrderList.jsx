import React from 'react';
import 'antd/dist/antd.css';
import OrderItem from './OrderItem.jsx'

const OrderList = ({orderItems}) => {
    const divStyle = {
        textAlign: 'center',
        width: '100%',
        minHeight: '80px'
    };

    return (
        <div style={divStyle}>
            <h2>Pizzas</h2>
            {orderItems.map((item) => {
                return (
                    <OrderItem OrderItem={item} key={item.name}/>
                );
            })}
        </div>
    );
}

export default OrderList;