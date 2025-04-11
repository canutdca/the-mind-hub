import { UserProfile } from '@/app/profile/domain/user-profile.model'
import { getUser } from '../repository/user.repository'

export function getUserProfile(): Promise<UserProfile> {
	return getUser()
}
