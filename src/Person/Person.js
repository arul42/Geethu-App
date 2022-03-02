import React from 'react';
import './person.css';

const person = (props) => {
    return (
        <div className='Person' >
        <p onClick={props.click}>my name is {props.name} and I'm a {props.guru} 's Slave</p>
        <h2>{props.children}</h2>
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;