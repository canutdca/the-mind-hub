import { User } from '../domain/User'

export async function getUser(): Promise<User> {
	const user: User = {
		id: '1',
		name: 'User Name',
		email: 'user@email.com',
		profilePicture: 'https://i.pravatar.cc/300',
	}
	return new Promise<User>((res) => setTimeout(() => res(user), 1000))
}
