
import React, { useState } from 'react'


const NewTodo = ({ add }) => {
    let [msg, setMsg] = useState("")

    const update = (e) => {
        e.preventDefault()
        setMsg(e.target.value)
    }

    const submit = ()=>{
        add(msg);
        // reset
        setMsg("")
    }
    return (
        <div className="col-8 offset-2">
            <div className="input-group">
                <input type="text" className="form-control" id="msg" name="msg" value={msg} onChange={update}></input>
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={submit}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default NewTodo;