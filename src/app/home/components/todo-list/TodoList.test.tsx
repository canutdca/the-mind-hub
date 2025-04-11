import { render, screen, fireEvent } from '@testing-library/react'
import { TodoList } from './TodoList'

describe('TodoList', () => {
	it('should render the component correctly', () => {
		render(<TodoList />)
		expect(screen.getByPlaceholderText('New task')).toBeInTheDocument()
		expect(screen.getByText('Add')).toBeInTheDocument()
	})

	it('should add a new task', () => {
		render(<TodoList />)
		const input = screen.getByPlaceholderText('New task')
		const addButton = screen.getByText('Add')

		fireEvent.change(input, { target: { value: 'Test task' } })
		fireEvent.click(addButton)

		expect(screen.getByText('Test task')).toBeInTheDocument()
		expect(input).toHaveValue('')
	})

	it('should not add an empty task', () => {
		render(<TodoList />)
		const addButton = screen.getByText('Add')

		fireEvent.click(addButton)

		expect(screen.queryByRole('listitem')).not.toBeInTheDocument()
	})

	it('should delete a task', () => {
		render(<TodoList />)
		const input = screen.getByPlaceholderText('New task')
		const addButton = screen.getByText('Add')

		// Add a task
		fireEvent.change(input, { target: { value: 'Task to delete' } })
		fireEvent.click(addButton)

		// Delete the task
		const deleteButton = screen.getByText('Delete')
		fireEvent.click(deleteButton)

		expect(screen.queryByText('Task to delete')).not.toBeInTheDocument()
	})
})
