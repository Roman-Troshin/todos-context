import styles from './apdating-process-to-do-realisation.module.css';
import { useRef } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../../../context';

export const ApdatingProcessToDoRealisation = ({
	actualToDoValue,
	setActualToDoValue,
	setIsToDoInModificationProcess,
	toDoId,
}) => {
	const initialFieldValue = useRef(actualToDoValue);

	const {toDos, setToDos} = useContext(AppContext);

	const onRequestUpdateToDo = (value) => {
		fetch(`http://localhost:3004/todos/${toDoId}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				value,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задача обновлена ', response);

				const updatedTaskIndex = toDos.findIndex((task) => task.id === Number(toDoId));
				const copyTasks = [...toDos];
				copyTasks[updatedTaskIndex] = response;
				setToDos(copyTasks);
			});
	};

	return (
		<div className={styles.todoItem}>
			<input
				name="changingToDosField"
				type="text"
				value={actualToDoValue}
				onChange={({ target }) => setActualToDoValue(target.value)}
			/>
			<div>
				<button
					type="button"
					onClick={() => {
						setActualToDoValue(initialFieldValue.current);
						setIsToDoInModificationProcess(false);
					}}
				>
					Отменить
				</button>
				<button
					type="button"
					onClick={() => {
						setIsToDoInModificationProcess(false);
						onRequestUpdateToDo(actualToDoValue);
					}}
				>
					Сохранить
				</button>
			</div>
		</div>
	);
};
