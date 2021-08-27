
import React,{useState,useEffect}from 'react'
import { useParams,useHistory } from 'react-router';
const Todo = () => {
	let [todo, setTodo] = useState({ });
	let { id } = useParams()
	let history=useHistory()
	console.log(id);
	useEffect(() => {
		fetch(`http://localhost:5000/todos/${id}`).then((response) => {
			return response.json()
		}).then((data) => {
			console.log(data);
			setTodo(data)
		})
	}, [])
	function handledelete(e) {
		e.preventDefault();
		fetch(`http://localhost:5000/todos/${id}`, { method: "DELETE" });
		history.push("/todos")
	}
	
	return (
		<div>
		
			
			<div className="todo">
				<h2>{todo.title}</h2>
				<p>{todo.body}</p>
				<h3>{todo.createdAt}</h3>
			</div>
			<div className="actions">
	<form onSubmit={handledelete}>
				<button className="btn btn-delete">delete</button>
			</form>
			
			<a className="btn btn-save" href={`/todos/edit/${todo._id}`}>edit</a>
			</div>
		
			
		</div >
	
	);
}

export default Todo
