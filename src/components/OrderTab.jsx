import React from 'react';
import OrderCard from './OrderCard.jsx';
import { Droppable } from 'react-beautiful-dnd';

import 'antd/dist/antd.css';

const OrderTab = ({column}) => {
    // Hierarchy:
    // OrderTab
    // -OrderCard
    //  -<p>
    //  -OrderList
    //  -OrderItem

    const orderTabStyle = { 
        width: '33%',
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        alignContent: 'flex-start' 
    }

    return (
        <div className="order-tab" style={orderTabStyle}>
            <h1 style={{ marginBottom: '24px' }}>{column.status}</h1>
            <Droppable droppableId={column.status}>
                {(provided) => (
                    <div className="order-card-container"
                        style={{ width: '90%', height: '100%' }}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        >
                        {column.orderGroups.map((orderGroup, index) => {
                            console.log(orderGroup.id);
                            return (
                                <OrderCard 
                                    orderGroup={orderGroup}
                                    index={index}
                                    key={orderGroup.id}
                                    >
                                </OrderCard>
                            );
                        })}
                    {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}

export default OrderTab;
