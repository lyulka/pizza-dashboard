import React from 'react';
import OrderCard from './OrderCard.jsx';
import { Droppable } from 'react-beautiful-dnd';

import 'antd/dist/antd.css';

const OrderTab = ({status, orders}) => {
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
            <h1>{status}</h1>
            <Droppable droppableId={status}>
                {(provided) => (
                    <div className="order-card-container"
                        style={{ width: '90%', height: '100%' }}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        >
                        {orders.map((orderGroup, index) => {
                                if (orderGroup.status === status) {
                                    return (
                                        <OrderCard 
                                            orderGroup={orderGroup}
                                            index={index}
                                            key={orderGroup.id}
                                            >
                                            {provided.placeholder}
                                        </OrderCard>
                                    );
                                } else {
                                    return null;
                                }
                            }
                        )}
                    </div>
                )}
            </Droppable>
        </div>
    );
}

export default OrderTab;