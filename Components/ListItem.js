import React from 'react';

export default function ListItem(props) {

    return <div>
        <input type="checkbox"></input>
        <p onClick={e => {
            props.remove(props.key);
        }}>{props.item}</p>
    </div>


}