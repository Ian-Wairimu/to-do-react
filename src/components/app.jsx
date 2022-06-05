import React, { useState } from "react";
import "./style/style.css"

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s


const App = () => {
    const [list, setList] = useState("");
    const [items, setItems] = useState([]);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setList(newValue);
    }
    const handleClick = () => {
        setItems(prevItem => {
            return [...prevItem, list]
        })
    }

   

    return (
        <>
            <div className="container">
                <div className="heading">
                    <h1>To-Do List</h1>
                </div>
                <div className="form">
                    <input type="text" name="list" onChange={handleChange} value={list}/>
                    <button onClick={handleClick}>
                    <span>Add</span>
                    </button>
                </div>
                <div>
                    <ul>
                   {items.map((listItems) => {
                       return <li>{listItems}</li>
                   })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default App;