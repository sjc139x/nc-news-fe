import React from 'react';

function Error ({ location: { state } }) {
    return (
        <div>
            <img src="https://i.ibb.co/pjtdNgg/cartoon-1487217-1920-1.png" alt="error-potato" id="error-potato" />
            <h1>Root not found</h1>
            <h3>Unfortunately, {state.msg.split(':')[1]}</h3>
        </div>
    )
};

export default Error;