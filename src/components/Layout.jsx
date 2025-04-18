import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="layout">
            <h2>Create Your Own Version of the Sidemen Charity Match!</h2>
            <nav className="navbar">
                <Link to='/'>Home</Link>
            
                <Link to='/create'>Add Player</Link>
            </nav>

            <main className="main-content">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout