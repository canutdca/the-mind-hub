'use client'

import { Todo } from '../../domain/todo.model'
import styles from './TodoItem.module.scss'

interface TodoItemProps {
	todo: Todo
	onDelete: (id: string) => void
}

export function TodoItem({ todo, onDelete }: TodoItemProps) {
	return (
		<li className={styles.listItem}>
			<span>{todo.text}</span>
			<button
				onClick={() => onDelete(todo.id)}
				className={styles.deleteButton}
			>
				Delete
			</button>
		</li>
	)
}
