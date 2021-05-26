import React from "react";
import TodoList from "./components/TodoList";
import uuid from "uuid/v4";
import logo from "./assets/logo.svg";

function App(props) {
	const [todos, setTodos] = React.useState(props.todos);
	const [hasSelected, setHasSelected] = React.useState(false);
	const [todosFiltered, setTodosFiltered] = React.useState(todos);
	const [tab, setTab] = React.useState(null);

	React.useEffect(() => {
		if (tab === null) {
			setTodosFiltered(todos);
		} else {
			setTodosFiltered(todos.filter((todo) => todo.status === tab));
		}
	}, [todos, tab]);

	const handleFilter = (filter) => {
		setTab(filter);
		if (filter === null) {
			setTodosFiltered(todos);
		} else {
			setTodosFiltered(todos.filter((todo) => todo.status === filter));
		}
	};

	const handleAddTodo = (e) => {
		const value = e.target.value;
		if (e.keyCode === 13) {
			if (value.trim() !== "") {
				setTodos([
					...todos,
					{
						id: uuid(),
						text: value,
						status: false,
					},
				]);
				e.target.value = "";
			}
		}
	};

	const handleStatus = (todoId) => {
		const oldTodos = [...todos];
		const todo = oldTodos.find((todo) => todo.id === todoId);
		todo.status = !todo.status;
		setTodos(oldTodos);
		checkSelectedAll(oldTodos);
	};

	const handleClearAll = () => {
		const oldTodos = [...todos];
		const newTodos = oldTodos.filter((todo) => todo.status !== true);
		setTodos(newTodos);
		setHasSelected(false);
	};

	const checkSelectedAll = (todos) => {
		if (todos.filter((todo) => todo.status).length) {
			setHasSelected(true);
		} else {
			setHasSelected(false);
		}
	};

	return (
		<div className="max-w-xl w-full space-y-8">
			<header className="flex flex-col items-center justify-center">
				<img src={logo} className="h-20 mb-4" alt="logo" />
				<h1 className="font-bold text-5xl text-color2-500 shadow-sm">ToDo List</h1>
			</header>
			<section>
				<div className="w-auto bg-color9-500 rounded-md shadow-md">
					<div className="p-4">
						<input
							onKeyDown={handleAddTodo}
							type="text"
							className="h-14 w-full text-color1-200 text-xl px-4 rounded bg-color6-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-color1-400 focus:border-transparent"
							autoFocus
							placeholder="Enter your task"
						/>
					</div>
					<TodoList
						todos={todos}
						todosFiltered={todosFiltered}
						handleStatus={handleStatus}
						handleClearAll={handleClearAll}
						handleFilter={handleFilter}
						hasSelected={hasSelected}
						tab={() => tab}
					/>
				</div>
			</section>
		</div>
	);
}

export default App;
