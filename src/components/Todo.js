import React from "react";
import classNames from "classnames";

function Todo({ todo, handleStatus }) {
	return (
		<li className="py-3 bg-color6-500 border-b border-color9-600 p-4">
			<input
				type="checkbox"
				id={todo.id}
				onChange={() => {
					handleStatus(todo.id);
				}}
				checked={todo.status}
				className="css-checkbox lrg"
			/>
			<label htmlFor={todo.id} className={classNames("css-label lrg vlad text-lg", { "line-through text-color4-400": todo.status })}>
				{todo.text}
			</label>
		</li>
	);
}

export default Todo;
