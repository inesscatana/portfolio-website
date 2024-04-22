import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Inês Catana | Personal Portfolio',
	description: 'Inês is a Frontend Developer with 8 years of experience.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-gray-50 text-gray-950`}>
				{children}
			</body>
		</html>
	)
}
