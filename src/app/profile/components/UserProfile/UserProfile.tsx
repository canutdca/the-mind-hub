import { getUserProfile } from '@/contexts/user/application/get-user.application'
import Image from 'next/image'
import styles from './UserProfile.module.scss'

export const UserProfile = async () => {
	const user = await getUserProfile()

	return (
		<article className={styles.profile}>
			<div className={styles.container}>
				<section className={styles.imageContainer}>
					<Image
						src={user.profilePicture}
						alt={`${user.name}'s profile`}
						fill
						className={styles.image}
					/>
				</section>
				<section className={styles.info}>
					<h1 className={styles.name}>{user.name}</h1>
					<p className={styles.email}>{user.email}</p>
				</section>
			</div>
		</article>
	)
}
