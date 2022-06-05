import React, { useState }from "react";

const ToDoItem = (props) => {
    const [list, setList] = useState("");

    const handleChange = (event) => {
        const newValue = event.target.value;
        setList(newValue);
    }
    return (
        <>
             <div className="form">
                    <input type="text" onChange={handleChange} value={list}/>
                    <button onClick={() => {
                        props.click(list);
                        setList("")
                    }}>
                    <span>Add</span>
                    </button>
                </div>
        </>
    );
} 

export default ToDoItem;