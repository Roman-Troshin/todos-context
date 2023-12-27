import { StandaloneToDo } from './stand-alone-to-do/standaloneToDo';
import { getRandomKeyForTask } from '../help-functions/get-random-key-for-task';

export const ToDosListOutput = ({ toDosList, setToDosList }) => {
	return (
		<div>
			{toDosList.map((toDo) => (
				<StandaloneToDo
					key={getRandomKeyForTask()}
					task={toDo}
					tasks={toDosList}
					setTasks={setToDosList}
				/>
			))}
		</div>
	);
};
