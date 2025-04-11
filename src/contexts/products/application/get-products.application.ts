import { Product as ProductResponse } from '@/app/products/domain/product.model'
import { getProducts } from '../repository/product.repository'

export async function getProductsList(): Promise<ProductResponse[]> {
	return getProducts()
}
