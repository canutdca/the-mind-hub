import { render } from '@testing-library/react'
import { ProductList } from './ProductList'
import { Product } from '@/contexts/products/domain/Product'

const mockProducts: Product[] = [
	{
		id: '1',
		name: 'Product 1',
		description: 'Description 1',
		price: 99.99,
	},
	{
		id: '2',
		name: 'Product 2',
		description: 'Description 2',
		price: 149.99,
	},
]

describe('ProductList', () => {
	it('should render all products', () => {
		const { container } = render(<ProductList products={mockProducts} />)
		const productCards = container.getElementsByClassName('productCard')
		expect(productCards).toHaveLength(mockProducts.length)
	})

	it('should display product information correctly', () => {
		const { getByText } = render(<ProductList products={mockProducts} />)

		mockProducts.forEach((product) => {
			expect(getByText(product.name)).toBeInTheDocument()
			expect(getByText(product.description)).toBeInTheDocument()
			expect(
				getByText(`$${product.price.toFixed(2)}`),
			).toBeInTheDocument()
		})
	})
})
