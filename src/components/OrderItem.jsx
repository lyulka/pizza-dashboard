import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const OrderItem = ({OrderItem}) => {
    const qtyStyle = {
        display: 'inline',
        float: 'right',
        marginRight: '8px',
        marginBottom: '0px',
        color: '#7cb305',
        fontWeight: 'bold'
    }

    return (
        <Button className="dumb-button" style={{ textAlign: 'left', width: '100%', marginBottom: '8px' }}>
            <p style={{ display: 'inline'  }}>{OrderItem.name}</p>
            <p style={ qtyStyle }>{"Quantity: " + OrderItem.quantity}</p>
        </Button>
    );
}

export default OrderItem;