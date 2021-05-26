import React from "react";
import Todo from "./Todo";
import ButtonsFilter from "./ButtonsFilter";

function TodoList({ todos, todosFiltered, handleStatus, handleClearAll, handleFilter, hasSelected, tab }) {
	const messages = (tab) => {
		let message;
		switch (tab) {
			case true:
				message = "No records completed";
				break;
			case false:
				message = "No records active";
				break;
			default:
				message = "No records";
				break;
		}
		return message;
	};

	if (!todosFiltered.length) {
		return (
			<React.Fragment>
				<div className="flex justify-center text-color6-400 bg-color6-500 rounded-b-md p-4">{messages(tab())}</div>
				<ButtonsFilter
					countAll={todos.length}
					countActive={todos.filter((todo) => todo.status === false).length}
					countCompleted={todos.filter((todo) => todo.status === true).length}
					handleFilter={handleFilter}
				/>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<div className="flex flex-col px-4 mb-3">
					<div className="flex justify-end text-color5-500">
						{hasSelected && tab() !== false && (
							<button
								onClick={() => handleClearAll()}
								className="px-2 py-1 text-xs text-black bg-color8-500 transition duration-150 ease-in-out hover:bg-color8-900 hover:text-color1-100 rounded"
							>
								Clean Completed
							</button>
						)}
					</div>
				</div>
				<ul className="text-color5-500  border-t border-color9-600">
					{todosFiltered.map((todo) => {
						return <Todo key={todo.id} todo={todo} handleStatus={handleStatus} />;
					})}
				</ul>
				<ButtonsFilter
					countAll={todos.length}
					countActive={todos.filter((todo) => todo.status === false).length}
					countCompleted={todos.filter((todo) => todo.status === true).length}
					handleFilter={handleFilter}
				/>
			</React.Fragment>
		);
	}
}

export default TodoList;
