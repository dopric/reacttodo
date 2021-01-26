import React from 'react'
import './Todo.css';

const Todo = ({todo, mark, deleteHandler}) =>{
    return (
        <div className="col-4 ">
        <div className="card text-center todo mb-5">
            <div className="card-header card-title">{todo.id}</div>
            <div className={todo.done? 'completed card-body': 'incomplete card-body'}>{todo.msg}</div>
            <div className="card-footer pt-5">
                <button className="btn btn-danger float-left" onClick={()=>deleteHandler(todo.id)}>Delete</button>
                <button className="btn btn-warning float-right" onClick={()=>mark(todo.id)}>Toggle
                </button>
            </div>
        </div>
        </div>
    )
}

export default Todo;