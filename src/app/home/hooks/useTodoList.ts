import { useState } from 'react'
import { Todo } from '../domain/todo.model'

export function useTodoList() {
	const [todos, setTodos] = useState<Todo[]>([])

	const addTodo = (text: string) => {
		setTodos([...todos, { id: Date.now().toString(), text }])
	}

	const deleteTodo = (id: string) => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	return {
		todos,
		addTodo,
		deleteTodo,
	}
}
