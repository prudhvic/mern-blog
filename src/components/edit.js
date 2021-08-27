import React from 'react'
import { useState ,useEffect} from 'react';
import { useHistory, useParams } from 'react-router';
const Edit = () => {
	let history = useHistory()
		let {id}=useParams()
	
	let [title, setTitle] = useState("");
	let [body, setBody] = useState("");
	let handleSubmit = (e) => {
		e.preventDefault();
		let newtodo={title,body}
		fetch(`http://localhost:5000/todos/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newtodo)
		})
		history.push(`/todos/${id}`);
		window.location.reload()
		
	}
	useEffect(() => {
		fetch(`http://localhost:5000/todos/${id}`).then((response) => {
			return response.json()
		}).then((todo) => {
			setTitle(todo.title);
			setBody(todo.body);
		})
	}, [])
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
				<button className="btn btn-save">save</button>
			</form>
		</div>
	);
}

export default Edit;