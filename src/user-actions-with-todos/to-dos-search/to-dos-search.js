import styles from './to-dos-search.module.css';
import { useState } from 'react';

export const ToDosSearch = ({ setConfirmedSearchValue }) => {
	const [currentSearchFieldValue, setCurrentSearchFieldValue] = useState('');

	return (
		<div className={styles.searchContainer}>
			<input
				name="searchingToDosField"
				type="text"
				value={currentSearchFieldValue}
				placeholder="Поиск..."
				onChange={({ target }) => setCurrentSearchFieldValue(target.value)}
			/>
			<div>
				<button
					type="button"
					onClick={() => {
						setConfirmedSearchValue(currentSearchFieldValue);
					}}
				>
					Найти
				</button>
				<button
					type="button"
					onClick={() => {
						setCurrentSearchFieldValue('');
						setConfirmedSearchValue('');
					}}
				>
					Очистить
				</button>
			</div>
		</div>
	);
};
