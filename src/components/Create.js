import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router';
const Create = () => {
	let  history=useHistory()
	let [title, setTitle] = useState("");
	let [body, setBody] = useState("");
	let handleSubmit = (e) => {
		e.preventDefault();
		let newtodo={title,body}
		fetch("https://mern-todo-crud.herokuapp.com/todos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newtodo)
		})
		history.push("/todos");
		
	}
	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="title">Enter title of todo</label>
					<input value={title} id="title" type="text" onChange={(e)=>setTitle(e.target.value) }/>
				</div>
				<div className="form-control">
					<label htmlFor="body">Enter content of todo</label>
					<input value={body} id="body" type="text" onChange={ (e)=>setBody(e.target.value)}/>
				</div>
				<button className="btn btn-save">submit</button>
			</form>
		</div>
	);
}

export default Create;
