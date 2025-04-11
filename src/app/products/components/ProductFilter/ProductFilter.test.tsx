import { render, fireEvent } from '@testing-library/react'
import { ProductFilter } from './ProductFilter'

describe('ProductFilter', () => {
	it('should call onFilterChange when input value changes', () => {
		const mockOnFilterChange = jest.fn()
		const { getByPlaceholderText } = render(
			<ProductFilter onFilterChange={mockOnFilterChange} />,
		)

		const input = getByPlaceholderText('Filter products by name...')
		fireEvent.change(input, { target: { value: 'test' } })

		expect(mockOnFilterChange).toHaveBeenCalledWith('test')
	})
})
