export default function NotFound() {
  return (
    <div className="full-screen section-container bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <p className="text-xl text-slate-300">Page not found</p>
        <a href="/" className="inline-block mt-4 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white transition-colors">
          Go Home
        </a>
      </div>
    </div>
  )
}
