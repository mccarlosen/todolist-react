import React from "react";
import TodoList from "./components/TodoList";
import uuid from "uuid/v4";
import logo from "./assets/logo.svg";

function App(props) {
	const [todos, setTodos] = React.useState(props.todos);
	const [isSelectedAll, setIsSelectedAll] = React.useState(false);

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

	const handleToggleSelectAll = (e) => {
		const oldTodos = [...todos];
		if (e.target.checked) {
			oldTodos.map((todo) => (todo.status = true));
		} else {
			oldTodos.map((todo) => (todo.status = false));
		}
		setTodos(oldTodos);
		checkSelectedAll(oldTodos);
	};

	const handleClearAll = () => {
		const oldTodos = [...todos];
		const newTodos = oldTodos.filter((todo) => todo.status !== true);
		setTodos(newTodos);
		setIsSelectedAll(false);
	};

	const checkSelectedAll = (todos) => {
		if (todos.filter((todo) => todo.status).length === todos.length) {
			setIsSelectedAll(true);
		} else {
			setIsSelectedAll(false);
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
						<input onKeyDown={handleAddTodo} type="text" className="h-14 w-full bg-color1-700 text-color1-200 text-xl px-4 rounded" autoFocus placeholder="Insert you text" />
					</div>
					<TodoList todos={todos} handleStatus={handleStatus} handleToggleSelectAll={handleToggleSelectAll} handleClearAll={handleClearAll} isSelectedAll={isSelectedAll} />
				</div>
			</section>
		</div>
	);
}

export default App;
