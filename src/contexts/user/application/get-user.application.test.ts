import { getUserProfile } from './get-user.application'
import { getUser } from '../repository/user.repository'

jest.mock('../repository/user.repository', () => ({
	getUser: jest.fn(),
}))

describe('getUserProfile', () => {
	const mockUser = {
		id: '1',
		name: 'John Doe',
		email: 'john.doe@example.com',
		profilePicture: 'https://example.com/avatar.jpg',
	}

	beforeEach(() => {
		jest.clearAllMocks()
		;(getUser as jest.Mock).mockResolvedValue(mockUser)
	})

	it('should call the repository getUser function', async () => {
		await getUserProfile()
		expect(getUser).toHaveBeenCalledTimes(1)
	})

	it('should return a user with the correct structure', async () => {
		const result = await getUserProfile()

		expect(result).toEqual(
			expect.objectContaining({
				id: expect.any(String),
				name: expect.any(String),
				email: expect.any(String),
				profilePicture: expect.any(String),
			}),
		)
	})

	it('should return a user with valid values', async () => {
		const result = await getUserProfile()

		expect(result.id).toBeTruthy()
		expect(result.name).toBeTruthy()
		expect(result.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
		expect(result.profilePicture).toMatch(/^https?:\/\/.+/)
	})

	it('should handle repository errors', async () => {
		const error = new Error('Repository error')
		;(getUser as jest.Mock).mockRejectedValue(error)

		await expect(getUserProfile()).rejects.toThrow('Repository error')
	})
})
