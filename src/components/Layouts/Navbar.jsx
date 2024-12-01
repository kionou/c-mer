import { Link  , useLocation} from 'react-router-dom';
const Navbar = () => {
    const location = useLocation();
    
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };
    return ( 
    <>
       <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <Link to="/" className="navbar-brand p-0">
                    {/* <h1 className="text-primary"><i className="fas fa-search-dollar me-3"></i>Stocker</h1> */}
                    <img src="/assets/img/c_mer_mobile.png" alt="Logo" /> 
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="bi bi-list"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/"   className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
                        <div className="nav-item dropdown">
                            <Link to="#"  className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`} data-bs-toggle="dropdown">
                                <span className="dropdown-toggle">About</span>
                            </Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/who-are-we" className={`dropdown-item ${isActive('/who-are-we') ? 'active' : ''}`}>Who are we?</Link>
                                <Link to="/teams" className={`dropdown-item ${isActive('/teams') ? 'active' : ''}`}>Our Team</Link>
                                <Link to="/news" className={`dropdown-item ${isActive('/news') ? 'active' : ''}`}>News</Link>
                                <Link to="/contact" className={`dropdown-item ${isActive('/contact') ? 'active' : ''}`}>Contact Us</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="#"  className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`} data-bs-toggle="dropdown">
                                <span className="dropdown-toggle">What We Do</span>
                            </Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/what-we-do/capabilities" className={`dropdown-item ${isActive('/what-we-do/capabilities') ? 'active' : ''}`}>Capabilities</Link>
                                <Link to="/what-we-do/focus-areas" className={`dropdown-item ${isActive('/what-we-do/focus-areas') ? 'active' : ''}`}>Focus Areas</Link>
                                <Link to="/what-we-do/tools" className={`dropdown-item ${isActive('/what-we-do/tools') ? 'active' : ''}`}>Tools</Link>
                            </div>
                        </div>
                        <Link to="/where-we-work" className={`nav-item nav-link ${isActive('/where-we-work') ? 'active' : ''}`}>Where We Work</Link>
                        <Link to="/projects" className={`nav-item nav-link ${isActive('/projects') ? 'active' : ''}`}>Projects</Link>
                        {/* <Link to="/insights" className={`nav-item nav-link ${isActive('/insights') ? 'active' : ''}`}>Insights</Link> */}
                        <div className="nav-item dropdown">
                            <Link to="#"  className={`nav-item nav-link ${isActive('/insights') ? 'active' : ''}`} data-bs-toggle="dropdown">
                                <span className="dropdown-toggle">Insights</span>
                            </Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/insights-search" className={`dropdown-item ${isActive('/insights-search') ? 'active' : ''}`}>Insights Search</Link>
                                <Link to="/insights-events" className={`dropdown-item ${isActive('/insights-events') ? 'active' : ''}`}>Events</Link>
                                <Link to="/insights-podcasts" className={`dropdown-item ${isActive('/insights-podcasts') ? 'active' : ''}`}>C-mer Podcasts</Link>
                                <Link to="/insights-blogs" className={`dropdown-item ${isActive('/insights-blogs') ? 'active' : ''}`}>Perspectives Blog</Link>
                                <Link to="/insights-publications" className={`dropdown-item ${isActive('/insights-publications') ? 'active' : ''}`}>Publications</Link>
                                <Link to="/insights-spotlight" className={`dropdown-item ${isActive('/insights-spotlight') ? 'active' : ''}`}>Spotlight On</Link>
                            </div>
                        </div>
                        <Link to="/search" className={`nav-item nav-link ${isActive('/search') ? 'active' : ''}`}>Search</Link>

                       
                       
                    </div>
                </div>
            </nav>
           
     
        </div>
    </> 
    );
}
 
export default Navbar;