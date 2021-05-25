import React from "react";
import Todo from "./Todo";

function TodoList({ todos, handleStatus, handleToggleSelectAll, handleClearAll, isSelectedAll }) {
	if (!todos.length) {
		return <div className="flex justify-center text-color6-400 bg-color6-500 rounded-b-md p-4">Insert you first task</div>;
	} else {
		return (
			<React.Fragment>
				<div className="flex flex-col px-4 mb-3">
					<div className="flex justify-between text-color5-500">
						<label>
							<input id="select-all" type="checkbox" onChange={(e) => handleToggleSelectAll(e)} checked={isSelectedAll} className="css-checkbox lrg" />
							<label htmlFor="select-all" className="css-label lrg vlad">
								Select All
							</label>
						</label>
						{isSelectedAll && (
							<button onClick={() => handleClearAll()} className="px-2 py-1 text-xs text-black bg-color8-500 rounded">
								Clear All
							</button>
						)}
					</div>
				</div>
				<ul className="text-color5-500  border-t border-color9-600">
					{todos.map((todo) => {
						return <Todo key={todo.id} todo={todo} handleStatus={handleStatus} />;
					})}
				</ul>
				<div className="flex justify-between bg-color7-600 rounded-b-md px-4 py-3 mt-8 shadow-md border-t border-color7-500">
					<button className="text-sm bg-color8-500 shadow-sm rounded px-3 py-2">All (2)</button>
					<button className="text-sm bg-color8-500 shadow-sm rounded px-3 py-2">Active (2)</button>
					<button className="text-sm bg-color8-500 shadow-sm rounded px-3 py-2">Completed (0)</button>
				</div>
			</React.Fragment>
		);
	}
}

export default TodoList;
