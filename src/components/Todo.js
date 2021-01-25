import React from 'react'
import './Todo.css';

const Todo = () =>{
    return (
        <div className="col-3 offset-2">
        <div className="card text-center todo mb-5">
            <div className="card-title">1</div>
            <div className="card-body">testing</div>
            <div className="card-footer">
                <button className="btn btn-danger float-left">delete</button>
                <button className="btn btn-warning float-right">done</button>
            </div>
        </div>
        </div>
    )
}

export default Todo;