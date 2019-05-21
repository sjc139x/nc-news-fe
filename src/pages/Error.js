import React from 'react';

function Error (props) {
    return (
        <div>
            <img src="https://i.ibb.co/pjtdNgg/cartoon-1487217-1920-1.png" alt="error-potato" className="ErrorPage-ErrorPotato" />
            <h1>Root not found</h1>
            {props.location.state &&
            <h3>Unfortunately, {props.location.state.msg.split(':')[1]}</h3>}
        </div>
    )
};

export default Error;