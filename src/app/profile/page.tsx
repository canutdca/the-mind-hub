import { Suspense } from 'react'
import { UserProfile } from './components/UserProfile/UserProfile'
import { Loader } from '@/app/_shared/components/loader/Loader'

export default async function ProfilePage() {
	return (
		<>
			<header>
				<h2>Profile</h2>
			</header>
			<Suspense fallback={<Loader />}>
				<UserProfile />
			</Suspense>
		</>
	)
}
