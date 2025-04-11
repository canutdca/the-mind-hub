'use client'

import { ChangeEvent } from 'react'
import styles from './ProductFilter.module.scss'

interface ProductFilterProps {
	onFilterChange: (value: string) => void
}

export function ProductFilter({ onFilterChange }: ProductFilterProps) {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onFilterChange(e.target.value)
	}

	return (
		<div className={styles.filterContainer}>
			<input
				type="text"
				placeholder="Filter products by name..."
				onChange={handleChange}
				className={styles.filterInput}
			/>
		</div>
	)
}
