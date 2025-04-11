'use client'

import { Suspense } from 'react'
import { ProductList } from './components/ProductList/ProductList'
import { ProductFilter } from './components/ProductFilter/ProductFilter'
import { Loader } from '@/app/_shared/components/loader/Loader'
import { useProducts } from './hooks/useProducts'

export default function ProductsPage() {
	const { products, setFilter, isLoading } = useProducts()

	return (
		<>
			<header>
				<h2>Products</h2>
			</header>
			<ProductFilter onFilterChange={setFilter} />
			<Suspense fallback={<Loader />}>
				{isLoading ? <Loader /> : <ProductList products={products} />}
			</Suspense>
		</>
	)
}
