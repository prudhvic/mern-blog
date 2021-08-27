import { useState, useEffect } from "react";
import Todo from "./Todo";
let List = () => {
	let [todos, setTodos] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/todos").then((response) => {
			return response.json()
		}).then((data) => {
			console.log(data);
			setTodos(data)
		})
	},[])
	return (
		<div className="todos">
			{
				todos.map((todo) => (
					
					<a  key={todo._id}href={`/todos/${todo._id}`} >
						<h2>{todo.title}</h2>
						<p>{todo.body}</p>
						<h3>{todo.createdAt}</h3>
				</a>
					
					
				))}
		</div>
	);
}
export default List;