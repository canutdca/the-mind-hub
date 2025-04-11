import { renderHook, act } from '@testing-library/react'
import { useProducts } from './useProducts'
import { getProductsList } from '@/contexts/products/application/get-products.application'

jest.mock('@/contexts/products/application/get-products.application', () => ({
	getProductsList: jest.fn(),
}))

const mockProducts = [
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

describe('useProducts', () => {
	beforeEach(() => {
		jest.clearAllMocks()
		;(getProductsList as jest.Mock).mockResolvedValue(mockProducts)
	})

	it('should load products on mount', async () => {
		const { result } = renderHook(() => useProducts())

		expect(result.current.isLoading).toBe(true)
		expect(result.current.products).toEqual([])

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0))
		})

		expect(result.current.isLoading).toBe(false)
		expect(result.current.products).toEqual(mockProducts)
	})

	it('should filter products when filter changes', async () => {
		const { result } = renderHook(() => useProducts())

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0))
		})

		act(() => {
			result.current.setFilter('Product 1')
		})

		expect(result.current.products).toEqual([mockProducts[0]])
	})

	it('should handle errors when loading products', async () => {
		const error = new Error('Failed to load products')
		;(getProductsList as jest.Mock).mockRejectedValue(error)

		const { result } = renderHook(() => useProducts())

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0))
		})

		expect(result.current.isLoading).toBe(false)
		expect(result.current.products).toEqual([])
	})
})
