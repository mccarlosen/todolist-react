function ButtonsFilter({ countAll, countActive, countCompleted, handleFilter }) {
	if (countAll === 0) {
		return null;
	} else {
		return (
			<div className="flex justify-between bg-color7-600 rounded-b-md px-4 py-3 mt-8 shadow-md border-t border-color7-500">
				<button
					onClick={() => handleFilter(null)}
					className="text-sm bg-color8-500 transition duration-150 ease-in-out hover:bg-color8-900 hover:text-color1-100 shadow-sm rounded px-3 py-2"
				>
					All ({countAll})
				</button>
				<button
					onClick={() => handleFilter(false)}
					className="text-sm bg-color8-500 transition duration-150 ease-in-out hover:bg-color8-900 hover:text-color1-100 shadow-sm rounded px-3 py-2"
				>
					Active ({countActive})
				</button>
				<button
					onClick={() => handleFilter(true)}
					className="text-sm bg-color8-500 transition duration-150 ease-in-out hover:bg-color8-900 hover:text-color1-100 shadow-sm rounded px-3 py-2"
				>
					Completed ({countCompleted})
				</button>
			</div>
		);
	}
}

export default ButtonsFilter;
