'use client'

import { useState, useEffect } from 'react'
import { Product } from '@/contexts/products/domain/Product'
import { getProductsList } from '@/contexts/products/application/get-products.application'

export function useProducts() {
	const [filter, setFilter] = useState('')
	const [products, setProducts] = useState<Product[]>([])
	const [isLoading, setIsLoading] = useState(true)

	const loadProducts = async () => {
		try {
			setIsLoading(true)
			const data = await getProductsList()
			setProducts(data)
		} catch (error) {
			console.error('Error loading products:', error)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		loadProducts()
	}, [])

	const filteredProducts = products.filter((product) =>
		product.name.toLowerCase().includes(filter.toLowerCase()),
	)

	return {
		products: filteredProducts,
		filter,
		setFilter,
		isLoading,
	}
}
