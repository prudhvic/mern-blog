import React from 'react'

const Nav = () => {
	return (
		<header>
			<h1>Todo project</h1>

			<nav>
				<ul>
					<li><a href="/todos">All todos</a></li>
					<li><a href="/todos/create">create todo</a></li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
