import  { useEffect } from 'react';
// import $ from 'jquery';
// import WOW from 'wowjs';


import HeaderCarousel from '../../components/Home/HeaderCarousel';
import { Link } from 'react-router-dom';
// import TestimonialCarousel from '../../components/Home/TestimonialCarousel'
// import TestimonialCarouselClient from '../../components/Home/TestimonialCarouselClient';
const HomeDefault = () => {
    useEffect(() => {
      

        // new WOW.WOW().init();
    
        
       // Ajouter la classe sticky-top et shadow-sm à la navbar lorsque la page est défilée de plus de 45px
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 45) {
      navbar.classList.add('sticky-top', 'shadow-sm');
    } else {
      navbar.classList.remove('sticky-top', 'shadow-sm');
    }
  });
  
  // Afficher le bouton back-to-top lorsque la page est défilée de plus de 300px
  window.addEventListener('scroll', function () {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  
  // Remonter en haut de la page lorsque le bouton back-to-top est cliqué
  document.querySelector('.back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
      }, []);
    
      return (
        <>
      
            <div className="container-fluid position-relative p-0">
               
                <HeaderCarousel/>
         
            </div>
           
            <div className="container-fluid about py-4">
                <div className="container pt-5 pb-2">
                    <div className="row g-5 pt-3">
                        <div className="col-xl-7 wow fadeInLeft mt-0" data-wow-delay="0.2s">
                            <div>
                                <h4 className="text-white bg-primary p-2">About Us</h4>
                                <h1 className="display-6 mb-4">Welcome to the Centre for Monitoring, Evaluation, and Research</h1>
                                <p className="mb-4">The Centre for Monitoring, Evaluation & Research (CMER) is dedicated to improving development
                                 programs through evidence-based analysis and rigorous impact monitoring. 
                                 We collaborate with various partners to assess the effectiveness and impact
                                  of projects in key sectors such as health, education, and economic development
                                </p>
                              
                            </div>
                        </div>
                        <div className="col-xl-5 wow fadeInLeft mt-0 px-0" data-wow-delay="0.2s">
                        <div>
                        <h4 className="text-white bg-primary p-2">What we do ?</h4>
                            <div className="accordion accordion-flush bg-light rounded p-1" id="accordionFlushSection">
                                <div className="accordion-item rounded-top">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Data Analysis & Interpretation
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushSection">
                                        <div className="accordion-body"> 

                                        Using advanced statistical tools and methodologies to 
                                        transform raw data into actionable insights that guide strategic decisions.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Program Design & Optimization
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushSection">
                                        <div className="accordion-body">
                                        Developing and refining program models to maximize impact and efficiency, ensuring resources are utilized effectively.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Community Development & Empowerment
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushSection">
                                        <div className="accordion-body"> 
                                        Focusing on programs that promote sustainable growth, enhance livelihoods,
                                         and empower communities through targeted interventions.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        Public Health & Well-being
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushSection">
                                        <div className="accordion-body">   
                                        Implementing initiatives aimed at improving health outcomes,
                                         addressing critical health challenges, and promoting wellness.


                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        Evaluation & Reporting Systems
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushSection">
                                        <div className="accordion-body"> 
                                        Building robust reporting systems that provide transparent, detailed evaluations for continuous improvement and accountability
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item rounded-bottom">
                                    <h2 className="accordion-header" id="flush-headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                        Training & Capacity Building Programs
                                        </button>
                                    </h2>
                                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushSection">
                                        <div className="accordion-body"> 
                                        Providing training sessions and workshops to strengthen the monitoring and evaluation capacities of partner organizations.
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
         
            <div className="container-fluid service pb-2" style={{backgroundColor:'#f8f8f8'}}>
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4 className="text-primary">News</h4>
                        <h1 className="display-5 mb-4">News provided best offer</h1>
                        <p className="mb-0"> 
                        Stay informed with the latest trends, analysis, and updates from the industry. 
                        Our news section keeps you in the loop with insights and expert perspectives.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-3 col-lg-4 wow fadeInUp position-relative" data-wow-delay="0.2s">
                            <div className="service-item">
                            <div className='bg-primary text-white ' style={{ position: 'absolute', top: '3%',  left: '13px', right: '24px', bottom: '0', height: '26px',display: 'flex',alignItems: 'center', width: '50px', zIndex: '111', paddingLeft: '5px',}}>New</div>

                                <div className="service-img">
                                    <img src="/assets/img/service-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="rounded-bottom p-3">
                                    <a href="#" className="h4 d-inline-block mb-2"> Strategy Consulting</a>
                                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis 
                                    </p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-4 wow fadeInUp position-relative" data-wow-delay="0.2s">
                            <div className="service-item">
                            <div className='bg-primary text-white ' style={{ position: 'absolute', top: '3%',  left: '13px', right: '24px', bottom: '0', height: '26px',display: 'flex',alignItems: 'center', width: '50px', zIndex: '111', paddingLeft: '5px',}}>New</div>

                                <div className="service-img">
                                    <img src="/assets/img/service-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="rounded-bottom p-3">
                                    <a href="#" className="h4 d-inline-block mb-2"> Strategy Consulting</a>
                                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis 
                                    </p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-4 wow fadeInUp position-relative" data-wow-delay="0.2s">
                            <div className="service-item">
                            <div className='bg-primary text-white ' style={{ position: 'absolute', top: '3%',  left: '13px', right: '24px', bottom: '0', height: '26px',display: 'flex',alignItems: 'center', width: '50px', zIndex: '111', paddingLeft: '5px',}}>New</div>

                                <div className="service-img">
                                    <img src="/assets/img/service-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="rounded-bottom p-3">
                                    <a href="#" className="h4 d-inline-block mb-2"> Strategy Consulting</a>
                                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis 
                                    </p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-4 wow fadeInUp position-relative" data-wow-delay="0.2s">
                            <div className="service-item">
                            <div className='bg-primary text-white ' style={{ position: 'absolute', top: '3%',  left: '13px', right: '24px', bottom: '0', height: '26px',display: 'flex',alignItems: 'center', width: '50px', zIndex: '111', paddingLeft: '5px',}}>New</div>

                                <div className="service-img">
                                    <img src="/assets/img/service-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="rounded-bottom p-3">
                                    <a href="#" className="h4 d-inline-block mb-2"> Strategy Consulting</a>
                                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis 
                                    </p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-4 wow fadeInUp position-relative" data-wow-delay="0.2s">
                            <div className="service-item">
                            <div className='bg-primary text-white ' style={{ position: 'absolute', top: '3%',  left: '13px', right: '24px', bottom: '0', height: '26px',display: 'flex',alignItems: 'center', width: '50px', zIndex: '111', paddingLeft: '5px',}}>New</div>

                                <div className="service-img">
                                    <img src="/assets/img/service-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="rounded-bottom p-3">
                                    <a href="#" className="h4 d-inline-block mb-2"> Strategy Consulting</a>
                                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis 
                                    </p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-4 wow fadeInUp position-relative" data-wow-delay="0.2s">
                            <div className="service-item">
                            <div className='bg-primary text-white ' style={{ position: 'absolute', top: '3%',  left: '13px', right: '24px', bottom: '0', height: '26px',display: 'flex',alignItems: 'center', width: '50px', zIndex: '111', paddingLeft: '5px',}}>New</div>

                                <div className="service-img">
                                    <img src="/assets/img/service-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="rounded-bottom p-3">
                                    <a href="#" className="h4 d-inline-block mb-2"> Strategy Consulting</a>
                                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis 
                                    </p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-4 wow fadeInUp position-relative" data-wow-delay="0.2s">
                            <div className="service-item">
                            <div className='bg-primary text-white ' style={{ position: 'absolute', top: '3%',  left: '13px', right: '24px', bottom: '0', height: '26px',display: 'flex',alignItems: 'center', width: '50px', zIndex: '111', paddingLeft: '5px',}}>New</div>

                                <div className="service-img">
                                    <img src="/assets/img/service-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="rounded-bottom p-3">
                                    <a href="#" className="h4 d-inline-block mb-2"> Strategy Consulting</a>
                                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis 
                                    </p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        

                     
                    </div>
                    <div className='float-end'>
                    <Link className="btn btn-primary rounded-pill py-2 px-4" to={'/news'}>More <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
    
            
           
            <div className="container-fluid offer-section pb-2">
                <div className="container pb-2">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4 className="text-primary">Insights</h4>
                        <h1 className="display-5 mb-4">Benefits We offer</h1>
                        <p className="mb-0">Explore the achievements, trends, and impact that define C-MER’s
                         journey toward innovation and excellence.</p>
                       
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="nav nav-pills bg-light rounded p-2">
                                <a className="accordion-link  active p-3 mb-2" data-bs-toggle="pill" href="#collapseOne">
                                    <h5 className="mb-0">Insights Search</h5>
                                </a>
                                <a className="accordion-link p-3 mb-2" data-bs-toggle="pill" href="#collapseTwo">
                                    <h5 className="mb-0">Events</h5>
                                </a>
                                <a className="accordion-link p-3 mb-2" data-bs-toggle="pill" href="#collapseThree">
                                    <h5 className="mb-0">C-mer Podcasts</h5>
                                </a>
                                <a className="accordion-link p-3 mb-2" data-bs-toggle="pill" href="#collapseFour">
                                    <h5 className="mb-0">Perspectives Blog</h5>
                                </a>
                                <a className="accordion-link p-3 mb-2" data-bs-toggle="pill" href="#collapseFive">
                                    <h5 className="mb-0">Publications</h5>
                                </a>
                                <a className="accordion-link p-3 mb-0" data-bs-toggle="pill" href="#collapseSix">
                                    <h5 className="mb-0">Spotlight On</h5>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.4s">
                            <div className="tab-content">
                                <div id="collapseOne" className="tab-pane fade show p-0 active">
                                    <div className="row g-4">
                                        <div className="col-md-7">
                                            <img src="/assets/img/offer-1.jpg" className="img-fluid w-100 rounded" alt="" />
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="display-5 mb-4">Explore Our Insights Search</h1>
                                            <p className="mb-4"> Our Insights Search allows you to explore various studies, data analyses, and expert insights across multiple sectors. Whether youre looking for information on finance, technology, or
                                             global markets, our platform offers extensive resources to support your research needs.
                                            </p>
                                            <Link className="btn btn-primary rounded-pill py-2 px-4" to={'/insights-search'}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseTwo" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-md-7">
                                            <img src="/assets/img/offer-2.jpg" className="img-fluid w-100 rounded" alt="" />
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="display-5 mb-4">Upcoming Events</h1>
                                            <p className="mb-4">We host a variety of events, including webinars, conferences, and workshops, where industry leaders share their knowledge and insights. 
                                            Check out our event calendar to stay informed on upcoming sessions that may interest you.
                                            </p>
                                            <Link className="btn btn-primary rounded-pill py-2 px-4" to={'/insights-events'}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseThree" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-md-7">
                                            <img src="/assets/img/offer-3.jpg" className="img-fluid w-100 rounded" alt="" />
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="display-5 mb-4">Listen to C-MER Podcasts.</h1>
                                            <p className="mb-4">Our podcasts feature conversations with industry experts and thought leaders on topics ranging from finance and technology to market strategies. Each episode brings you valuable 
                                            insights to help you stay ahead of the curve in your field.
                                            </p>
                                            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseFour" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-md-7">
                                            <img src="/assets/img/offer-4.jpg" className="img-fluid w-100 rounded" alt="" />
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="display-5 mb-4">Insights from Our Perspectives Blog</h1>
                                            <p className="mb-4">The Perspectives Blog offers in-depth articles covering various topics in economics, finance, and global markets. Our team of experts shares
                                             their thoughts and analyses on current events, market trends, and more.
                                            </p>
                                            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseFive" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-md-7">
                                            <img src="/assets/img/offer-4.jpg" className="img-fluid w-100 rounded" alt="" />
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="display-5 mb-4">Access Our Publications</h1>
                                            <p className="mb-4">Our publications include research reports, white papers, and case studies on critical industry 
                                            topics. Each document provides thorough analysis and actionable insights to inform your decision-making.
                                            </p>
                                            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseSix" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-md-7">
                                            <img src="/assets/img/offer-4.jpg" className="img-fluid w-100 rounded" alt="" />
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="display-5 mb-4">Spotlight On: Featured Topics</h1>
                                            <p className="mb-4">The Spotlight On series highlights key topics and sectors, offering a closer look at emerging trends, challenges, and opportunities. Each feature is carefully 
                                            curated by our team of experts to bring you valuable perspectives on issues that matter.
                                            </p>
                                            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <a href="#" className="btn btn-primary btn-lg-square rounded-circle back-to-top" style={{display:'flex !important'}}><i className="bi bi-arrow-up"></i></a>   
    
        </>
      )
}
 
export default HomeDefault;