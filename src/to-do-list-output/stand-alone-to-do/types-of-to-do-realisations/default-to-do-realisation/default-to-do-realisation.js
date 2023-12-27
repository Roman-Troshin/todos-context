import styles from './default-to-do-realisation.module.css';
import { useContext } from 'react';
import { AppContext } from '../../../../context';

export const DefaultToDoRealisation = ({
	actualToDoValue,
	setIsToDoInModificationProcess,
	toDoId,
}) => {
	const { toDos, setToDos } = useContext(AppContext);

	const onRequestDeleteToDo = () => {
		fetch(`http://localhost:3004/todos/${toDoId}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задача удалена ', response);

				const copyTasks = [...toDos];
				const updatedTasks = copyTasks.filter((copyTask) => copyTask.id !== toDoId);
				setToDos(updatedTasks);
			});
	};

	return (
		<div className={styles.todoItem}>
			<div>{actualToDoValue}</div>
			<div>
				<button
					type="button"
					onClick={() => {
						setIsToDoInModificationProcess(true);
					}}
				>
					Исправить
				</button>
				<button
					type="button"
					onClick={() => {
						onRequestDeleteToDo();
					}}
				>
					Удалить
				</button>
			</div>
		</div>
	);
};
