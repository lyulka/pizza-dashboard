import React from 'react';
import { Card } from 'antd';
import OrderList from './OrderList.jsx';
import { Draggable } from 'react-beautiful-dnd';

import 'antd/dist/antd.css';

const OrderCard = ({orderGroup, index, innerRef}) => {
    const cardStyle = {
        textAlign: "right",
        marginBottom: '16px'
    }

    var statusStyle = {
        marginTop: "8px",
        fontWeight: 'bold',
        color: "#fa541c" // default: volcano
    }

    switch (orderGroup.status) {
        case 'Pending':
            break;
        case 'Preparing':
            statusStyle.color = "#ad8b00" // 'yellow'
            break;
        case 'Delivered':
            statusStyle.color = "#7cb305" // 'lime'
            break;
        default:
            break;
    }

    return (
        <Draggable draggableId={(orderGroup.id).toString()} index={index}>
            {(provided) => (
                <div
                    className="order-card"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                        <Card style={cardStyle} title={"ID #" + orderGroup.id}>
                            <OrderList orderItems={orderGroup.pizzas}/>
                            <p style={statusStyle}>{"Status: " + orderGroup.status}</p>
                        </Card>
                </div>
            )}
        </Draggable>
    );
}

export default OrderCard;