import React from 'react';

const person =(props)=>{
    return(
    <div>
    <p onClick={props.click}>My Name is {props.name} and My Class is {props.class}</p>
    <p>{props.children}</p>
    </div>
    )
};
export default person;