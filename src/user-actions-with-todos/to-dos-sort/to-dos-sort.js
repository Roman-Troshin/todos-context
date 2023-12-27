
export const ToDosSort = ({ checked, setChecked }) => {
	return (
		<div>
			<input
				name="sortCheckbox"
				id="sortCheckbox"
				type="checkbox"
				value={checked}
				onChange={() => setChecked(!checked)}
			/>
			<label htmlFor="sortCheckbox">Сортировать по алфавиту</label>
		</div>
	);
};
