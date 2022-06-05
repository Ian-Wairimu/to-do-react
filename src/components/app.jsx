import React, { useState } from "react";
import "./style/style.css"
import ToDoItem from "./toDoArea";
import ToDoList from "./toDoItem";

const App = () => {
    const [items, setItems] = useState([]);

    const handleClick = (list) => {
        setItems(prevItem => {
            return [...prevItem, list]
        })
    }
    const itemDelete = (id) => {
        setItems((preValue) => {
            return preValue.filter((_, index) => {
                return id !== index;
            })
        })
    }

    return (
        <>
            <div className="container">
                <div className="heading">
                    <h1>To-Do List</h1>
                </div>
               <ToDoItem click={handleClick}/>
                <div>
                    <ul>
                   {items.map((listItems, index) => {
                     return <ToDoList key={index} id={index} name={listItems} onChecked={itemDelete} />;
                   })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default App;