import { Outlet, NavLink } from 'react-router-dom'

function RootLayout() {
    return (
        <div className="app">
        <header className="header">
            <nav className="nav">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Home
            </NavLink>
            {/* weitere NavLinks hier */}
            </nav>
        </header>

        <main className="main">
            <Outlet />
        </main>

        <footer className="footer">
            <p>© {new Date().getFullYear()} Mein Projekt</p>
        </footer>
    </div>
    )
}

export default RootLayout
