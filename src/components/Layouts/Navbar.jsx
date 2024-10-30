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
                        <Link to="/about"  className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`} >About</Link>
                        <Link to="/what-we-do"className={`nav-item nav-link ${isActive('/what-we-do') ? 'active' : ''}`}>What We Do</Link>
                        <Link to="/where-we-work"className={`nav-item nav-link ${isActive('/where-we-work') ? 'active' : ''}`}>Where We Work</Link>
                        <Link to="/projects"className={`nav-item nav-link ${isActive('/projects') ? 'active' : ''}`}>Projects</Link>
                        <Link to="/insights"className={`nav-item nav-link ${isActive('/insights') ? 'active' : ''}`}>Insights</Link>
                        {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link" data-bs-toggle="dropdown">
                                <span className="dropdown-toggle">Pages</span>
                            </a>
                            <div className="dropdown-menu m-0">
                                <a href="feature.html" className="dropdown-item">Our Features</a>
                                <a href="team.html" className="dropdown-item">Our team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="offer.html" className="dropdown-item">Our offer</a>
                                <a href="FAQ.html" className="dropdown-item">FAQs</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact Us</a> */}
                    </div>
                </div>
            </nav>
           
     
        </div>
    </> 
    );
}
 
export default Navbar;