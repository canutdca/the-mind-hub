import { render, screen, fireEvent } from '@testing-library/react'
import { TodoItem } from './TodoItem'

describe('TodoItem', () => {
	const mockTodo = {
		id: '1',
		text: 'Test task',
	}

	const mockOnDelete = jest.fn()

	it('should render the task text', () => {
		render(<TodoItem todo={mockTodo} onDelete={mockOnDelete} />)
		expect(screen.getByText('Test task')).toBeInTheDocument()
	})

	it('should call onDelete when the delete button is clicked', () => {
		render(<TodoItem todo={mockTodo} onDelete={mockOnDelete} />)
		const deleteButton = screen.getByText('Delete')
		fireEvent.click(deleteButton)
		expect(mockOnDelete).toHaveBeenCalledWith('1')
	})
})
