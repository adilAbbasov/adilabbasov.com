import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <p className="text-blue-400 text-sm font-medium mb-2">404</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Page not found</h1>
      <p className="text-slate-400 mb-8">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-400 text-white font-medium px-6 py-2.5 rounded-lg transition-colors text-sm"
      >
        Back to home
      </Link>
    </section>
  )
}
