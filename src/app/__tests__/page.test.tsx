import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home', () => {
	it('debería renderizar el texto "Hello world!"', () => {
		render(<Home />)
		const helloWorldElement = screen.getByText('Hello world!')
		expect(helloWorldElement).toBeInTheDocument()
	})
})
