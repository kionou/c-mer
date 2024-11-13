import HeaderOther from "../../components/Home/HeaderOthers";

const TeamsDefault = () => {
    return ( 
        <>
          <HeaderOther 
                titre="Teams"
                home="Home"
                view="Pages"
                lien="Teams"
                imageUrl="/assets/img/carousel-1.jpg"
            />
            <div className="container-fluid team py-3">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4 className="text-primary py-2" style={{border:'1px solid var(--bs-primary)'}}>Our Team</h4>
                        <h1 className="display-5 mb-4">Meet Our Advisers</h1>
                        <p className="mb-0">At C-MER, we have a diverse team of experts in economics, finance, and data science...
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="/assets/img/team-1.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="team-title">
                                    <h4 className="mb-0">Dr. Alice Martin</h4>
                                    <p className="mb-0">Chief Economist</p>
                                </div>
                                <div className="team-icon">
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-0" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="/assets/img/team-2.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="team-title">
                                    <h4 className="mb-0">John Doe</h4>
                                    <p className="mb-0">Director of Market Research</p>
                                </div>
                                <div className="team-icon">
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-0" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="/assets/img/team-3.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="team-title">
                                    <h4 className="mb-0">David Liu</h4>
                                    <p className="mb-0">Data Scientist</p>
                                </div>
                                <div className="team-icon">
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-0" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="/assets/img/team-4.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="team-title">
                                    <h4 className="mb-0">Sarah Liu</h4>
                                    <p className="mb-0">Profession</p>
                                </div>
                                <div className="team-icon">
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-0" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default TeamsDefault;