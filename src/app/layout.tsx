import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './styles/main.scss'
import { Nav } from './_core/components/nav/Nav'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'The Mind Hub',
	description: 'Technical test for The Mind Hub',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<h1>The Mind Hub</h1>
				<Nav />
				<main>{children}</main>
			</body>
		</html>
	)
}
