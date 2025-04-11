import { Product } from '../domain/Product'

const mockProducts: Product[] = [
	{
		id: '1',
		name: 'Product 1',
		description: 'Description for product 1',
		price: 99.99,
	},
	{
		id: '2',
		name: 'Product 2',
		description: 'Description for product 2',
		price: 149.99,
	},
	{
		id: '3',
		name: 'Product 3',
		description: 'Description for product 3',
		price: 199.99,
	},
]

export async function getProducts(): Promise<Product[]> {
	return new Promise<Product[]>((resolve) => {
		setTimeout(() => resolve(mockProducts), 1000)
	})
}
