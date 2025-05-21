import Link from "next/link"
import "./globals.css"

export const metadata = {
    title: "Simple Blog",
    description: "A Next.js blog with comments",
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className='font-sans p-6 bg-gray-50 min-h-screen'>
                <nav className='mb-6 border-b border-gray-300 pb-4 flex justify-center space-x-6'>
                    <Link href='/' className='text-blue-600 hover:underline'>
                        Home
                    </Link>
                    <Link
                        href='/about-us'
                        className='text-blue-600 hover:underline'
                    >
                        About
                    </Link>
                    <Link href="/create" className="text-blue-600 hover:underline">Create Post</Link>
                </nav>

                <main>{children}</main>
            </body>
        </html>
    )
}
