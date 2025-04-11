'use client'

import { useState } from 'react'
import styles from './TodoAdd.module.scss'

interface TodoAddProps {
	onAddTodo: (text: string) => void
}

export function TodoAdd({ onAddTodo }: TodoAddProps) {
	const [newTodo, setNewTodo] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (newTodo.trim()) {
			onAddTodo(newTodo.trim())
			setNewTodo('')
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className={styles.inputContainer}
			role="form"
		>
			<input
				type="text"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
				placeholder="New task"
				className={styles.input}
				aria-label="New task"
			/>
			<button type="submit" className={styles.button}>
				Add
			</button>
		</form>
	)
}
