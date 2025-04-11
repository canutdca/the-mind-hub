import { render } from '@testing-library/react'
import { UserProfile as UserProfileModel } from '../../domain/user-profile.model'

const mockUser: UserProfileModel = {
	id: '1',
	name: 'Juan Pérez',
	email: 'juan.perez@example.com',
	profilePicture: 'https://i.pravatar.cc/300',
}

jest.mock('@/contexts/user/application/get-user.application', () => ({
	getUserProfile: jest.fn().mockResolvedValue(mockUser),
}))

describe('UserProfile', () => {
	it('should render user information correctly', async () => {
		const { UserProfile } = await import('./UserProfile')
		const Component = await UserProfile()
		const { container } = render(Component)

		expect(container).toHaveTextContent(mockUser.name)
		expect(container).toHaveTextContent(mockUser.email)
	})

	it('should render the profile image with correct attributes', async () => {
		const { UserProfile } = await import('./UserProfile')
		const Component = await UserProfile()
		const { container } = render(Component)

		const image = container.querySelector('img')
		expect(image).toBeInTheDocument()
		expect(image).toHaveAttribute('src')
		expect(image?.getAttribute('src')).toContain(
			encodeURIComponent(mockUser.profilePicture),
		)
		expect(image).toHaveAttribute('alt', `${mockUser.name}'s profile`)
		expect(image).toHaveClass('image')
	})
})
