import { Product } from '@/contexts/products/domain/Product'
import styles from './ProductList.module.scss'

interface ProductListProps {
	products: Product[]
}

export function ProductList({ products }: ProductListProps) {
	return (
		<ul className={styles.container}>
			{products.map((product) => (
				<li key={product.id} className={styles.productCard}>
					<article className={styles.productInfo}>
						<h3 className={styles.productName}>{product.name}</h3>
						<p className={styles.productDescription}>
							{product.description}
						</p>
						<p className={styles.productPrice}>
							${product.price.toFixed(2)}
						</p>
					</article>
				</li>
			))}
		</ul>
	)
}
