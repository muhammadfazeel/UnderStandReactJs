import React from 'react';

const person =(props)=>{
    return(
    <div>
    <p>My Name is {props.name} and My Class is {props.class}</p>
    <p>{props.children}</p>
    </div>
    )
};
export default person;