import React from 'react';

const Fruit= (props) => {
    return (
        <div>
            
            <tr>
                <td>{props.name}</td>
                <td>{props.quantity}</td>
                <td onClick={props.click}>Delete</td>
            </tr>

        </div>
    )
};

export default Fruit;