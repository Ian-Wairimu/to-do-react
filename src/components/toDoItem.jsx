import React, { useState } from "react";

const ToDoList = (props) => {
    const [isDone, setIsDone] = useState(false);
    const handleClick = () => {
        setIsDone((prevValue) => {
            return !prevValue;
        });
    }
    return (
        <>
            <div onClick={handleClick}>
            <li style={{textDecoration: isDone ? 'line-through' : "none"}}>{props.name}</li>
            </div>
        </>
    );
}

export default ToDoList;