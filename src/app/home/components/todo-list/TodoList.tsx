'use client'

import styles from './TodoList.module.scss'
import { TodoItem } from '../todo-item/TodoItem'
import { TodoAdd } from '../todo-add/TodoAdd'
import { useTodoList } from '../../hooks/useTodoList'

export function TodoList() {
	const { todos, addTodo, deleteTodo } = useTodoList()

	return (
		<section className={styles.container}>
			<TodoAdd onAddTodo={addTodo} />
			<ul className={styles.list}>
				{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
				))}
			</ul>
		</section>
	)
}
