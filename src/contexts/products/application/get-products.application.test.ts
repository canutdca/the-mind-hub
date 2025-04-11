import { getProductsList } from './get-products.application'
import { getProducts } from '../repository/product.repository'

jest.mock('../repository/product.repository', () => ({
	getProducts: jest.fn(),
}))

describe('getProductsList', () => {
	const mockProducts = [
		{
			id: '1',
			name: 'Product 1',
			description: 'Description 1',
			price: 99.99,
		},
	]

	beforeEach(() => {
		jest.clearAllMocks()
		;(getProducts as jest.Mock).mockResolvedValue(mockProducts)
	})

	it('should call the repository getProducts function', async () => {
		await getProductsList()
		expect(getProducts).toHaveBeenCalledTimes(1)
	})

	it('should return the products from the repository', async () => {
		const result = await getProductsList()
		expect(result).toEqual(mockProducts)
	})

	it('should handle repository errors', async () => {
		const error = new Error('Repository error')
		;(getProducts as jest.Mock).mockRejectedValue(error)

		await expect(getProductsList()).rejects.toThrow('Repository error')
	})
})
