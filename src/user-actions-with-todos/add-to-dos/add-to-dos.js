import styles from './add-to-dos.module.css'
import { useState } from 'react';

export const AddToDos = ({tasks, setTasks}) => {

const [fieldValue, setFieldValue] = useState('');

const onRequestAddToDos = (event, value) => {
	event.preventDefault();
	fetch('http://localhost:3004/todos', {
		method: 'POST',
		headers:  { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			value,
		}),
	})
		.then((rawResponse) => rawResponse.json())
		.then((response) => {
			console.log('Задача добавлена: ', response);
			setTasks([...tasks, response])
			setFieldValue('')

		})

}

	return (
		<div>
			<form className={styles.form} onSubmit={(event) => onRequestAddToDos(event, fieldValue)}>
				<input
				name="toDosField"
				type="text"
				value={fieldValue}
				onChange={({target}) => setFieldValue(target.value)}
				></input>
				<button type="submit">
					Добавить задачу
				</button>
			</form>
		</div>
	)
};
