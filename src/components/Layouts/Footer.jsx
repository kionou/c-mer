
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import WOW from 'wowjs';
const Footer = () => {
    useEffect(() => {
        // new WOW.WOW().init();
        
      }, []);
    return ( 
        <>
             <div className="container-fluid footer  wow fadeIn" data-wow-delay="0.2s">
            <div className=" py-2 border-start-0 border-end-0" style={{border: '1px solid', borderColor:' rgb(255, 255, 255, 0.08)',fontSize:'14px'}}>
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <div className="footer-item">
                            <Link to="/" className="p-0 image">
                              <img src="/assets/img/c_mer_mobile2.png" alt="Logo" style={{width:'95%'}} /> 
                            </Link>
                           
                        </div>
                    </div>
                    
                  
                    <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                        <div className="footer-item">
                            <h4 className="text-white ">Contact Info</h4>
                            <div className="d-flex align-items-center ms-3">
                            <i className="bi bi-geo-alt text-primary me-1"></i>
                                <p className="text-white mb-0">The Gambia</p>
                            </div>
                            <div className="d-flex align-items-center  ms-3">
                                <i className="fas fa-envelope text-primary me-1"></i>
                                <p className="text-white mb-0">cmer.consulting@gmail.com</p>
                            </div>
                            <div className="d-flex align-items-center  ms-3">
                                 <i className="bi bi-telephone text-primary me-1"></i>
                             
                                <p className="text-white mb-0">(+220) 9276737 | 4028960</p>
                            </div>
                        
                         
                        </div>
                        <div className="d-flex justify-content-center">
                                <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f text-white"></i></a>
                                <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-twitter text-white"></i></a>
                                <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-instagram text-white"></i></a>
                                <a className="btn btn-primary btn-sm-square rounded-circle me-0" href="#"><i className="fab fa-linkedin-in text-white"></i></a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="container-fluid copyright py-2">
            <div className="container">
                <div className="row g-4 align-items-center">
                    
                    <div className="col-xl-12 text-center  text-body">
                    <a href="#" className="border-bottom text-white"><i className="fas fa-copyright text-light me-2"></i>C-MER</a>, All right reserved  <br />
                    Designed and developed by <a className="border-bottom text-white" href="#">Kkhgroup</a>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Footer;