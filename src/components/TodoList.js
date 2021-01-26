import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, mark, deleteHandler }) => {
        return (
                <div className="col-8 offset-2">
                        <div className="row">
                                {todos.map((t) => {
                                        return <Todo key={t.id} todo={t} mark={mark} deleteHandler={deleteHandler} />
                                })}
                        </div>
                </div>
        )
}

export default TodoList;