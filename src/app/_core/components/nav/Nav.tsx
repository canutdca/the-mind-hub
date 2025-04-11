import Link from 'next/link'
import { ROUTES } from '@/app/routes.constants'
import styles from './Nav.module.scss'

export function Nav() {
	return (
		<nav>
			<ul className={styles.list}>
				<li>
					<Link className={styles.link} href={ROUTES.HOME}>
						Todo List
					</Link>
				</li>
				<li>
					<Link className={styles.link} href={ROUTES.PROFILE}>
						Profile
					</Link>
				</li>
				<li>
					<Link className={styles.link} href={ROUTES.PRODUCTS}>
						Products
					</Link>
				</li>
			</ul>
		</nav>
	)
}
