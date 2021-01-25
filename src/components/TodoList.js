import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, mark, deleteHandler})=>{
    return (
            <div className="row">
            {todos.map((t)=>{
                    return <Todo key={t.id} todo={t} mark={mark} deleteHandler={deleteHandler} />
            })}
            </div>
    )
}

export default TodoList;