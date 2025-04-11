import { render, screen, fireEvent } from '@testing-library/react'
import { TodoAdd } from './TodoAdd'

describe('TodoAdd', () => {
	const mockOnAddTodo = jest.fn()

	beforeEach(() => {
		mockOnAddTodo.mockClear()
	})

	it('should render the form correctly', () => {
		render(<TodoAdd onAddTodo={mockOnAddTodo} />)
		expect(screen.getByPlaceholderText('New task')).toBeInTheDocument()
		expect(screen.getByText('Add')).toBeInTheDocument()
	})

	it('should call onAddTodo with the entered text when submitting the form', () => {
		render(<TodoAdd onAddTodo={mockOnAddTodo} />)
		const input = screen.getByPlaceholderText('New task')
		const form = screen.getByRole('form')

		fireEvent.change(input, { target: { value: 'Test task' } })
		fireEvent.submit(form)

		expect(mockOnAddTodo).toHaveBeenCalledWith('Test task')
		expect(input).toHaveValue('')
	})

	it('should not call onAddTodo if the input is empty', () => {
		render(<TodoAdd onAddTodo={mockOnAddTodo} />)
		const input = screen.getByPlaceholderText('New task')
		const form = screen.getByRole('form')

		fireEvent.change(input, { target: { value: '' } })
		fireEvent.submit(form)

		expect(mockOnAddTodo).not.toHaveBeenCalled()
	})
})
