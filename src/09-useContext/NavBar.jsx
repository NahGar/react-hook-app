import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <NavLink className={ (args) => { return args.isActive ? 'nav-link active': 'nav-link' } } 
                        to="/">
                        Home
                    </NavLink>
                    { /* OTRA FORMA */ }
                    <NavLink className={ ({ isActive }) => `nav-link  ${ isActive ? 'active' : ''}` } 
                        to="about">
                        About
                    </NavLink>
                    
                    <NavLink className={ (args) => { return args.isActive ? 'nav-link active': 'nav-link' } } 
                        to="login">
                        Login
                    </NavLink>
                </ul>
                </div>
            </div>
        </nav>
    )
}
