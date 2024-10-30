import  { useEffect } from 'react';
// import $ from 'jquery';
// import WOW from 'wowjs';


import HeaderCarousel from '../../components/Home/HeaderCarousel';
import TestimonialCarousel from '../../components/Home/TestimonialCarousel'
import TestimonialCarouselClient from '../../components/Home/TestimonialCarouselClient';
const HomeDefault = () => {
    useEffect(() => {

        // new WOW.WOW().init();
    
        
        // $(window).on('scroll', function () {
        //   if ($(this).scrollTop() > 45) {
        //     $('.navbar').addClass('sticky-top shadow-sm');
        //   } else {
        //     $('.navbar').removeClass('sticky-top shadow-sm');
        //   }
        // });
    
        // $(window).on('scroll', function () {
        //   if ($(this).scrollTop() > 300) {
        //     $('.back-to-top').fadeIn('slow');
        //   } else {
        //     $('.back-to-top').fadeOut('slow');
        //   }
        // });
    
        // $('.back-to-top').on('click', function () {
        //   $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        //   return false;
        // });

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
           
            <div className="container-fluid about py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
                            <div>
                                <h4 className="text-primary">About Us</h4>
                                <h1 className="display-5 mb-4">Meet our company unless miss the opportunity</h1>
                                <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum velit temporibus repudiandae ipsa, eaque perspiciatis cumque incidunt tenetur sequi reiciendis.
                                </p>
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex">
                                            <div><i className="fas fa-lightbulb fa-3x text-primary"></i></div>
                                            <div className="ms-4">
                                                <h4>Business Consuluting</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex">
                                            <div><i className="bi bi-bookmark-heart-fill fa-3x text-primary"></i></div>
                                            <div className="ms-4">
                                                <h4>Year Of Expertise</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="#" className="btn btn-primary rounded-pill py-3 px-5 flex-shrink-0">Discover Now</a>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex">
                                            <i className="fas fa-phone-alt fa-2x text-primary me-4"></i>
                                            <div>
                                                <h4>Call Us</h4>
                                                <p className="mb-0 fs-5" style={{letterSpacing: '1px'}}>+01234567890</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
                            <div className="bg-primary rounded position-relative overflow-hidden">
                                <img src="/assets/img/about-2.png" className="img-fluid rounded w-100" alt="" />
                                
                                <div className="" style={{position: 'absolute', top: '-15px' ,right:' -15px'}}>
                                    <img src="/assets/img/about-3.png" className="img-fluid" style={{width: '150px', height:' 150px',opacity: '0.7'}} alt="" />
                                </div>
                                <div className="" style={{position: 'absolute',top: '-20px', left: '10px', transform: 'rotate(90deg)'}}>
                                    <img src="/assets/img/about-4.png" className="img-fluid" style={{width: '100px', height:' 150px', opacity: '0.9'}} alt="" />
                                </div>
                                <div className="rounded-bottom">
                                    <img src="/assets/img/about-5.jpg" className="img-fluid rounded-bottom w-100" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
            <div className="container-fluid service pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4 className="text-primary">Our Services</h4>
                        <h1 className="display-5 mb-4">We Services provided best offer</h1>
                        <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="/assets/img/service-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="rounded-bottom p-4">
                                    <a href="#" className="h4 d-inline-block mb-4"> Strategy Consulting</a>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                                    </p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="/assets/img/service-2.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="rounded-bottom p-4">
                                    <a href="#" className="h4 d-inline-block mb-4">Financial Advisory</a>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                                    </p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="/assets/img/service-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="rounded-bottom p-4">
                                    <a href="#" className="h4 d-inline-block mb-4">Managements</a>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                                    </p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="/assets/img/service-4.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="rounded-bottom p-4">
                                    <a href="#" className="h4 d-inline-block mb-4">Supply Optimization</a>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                                    </p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="/assets/img/service-5.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="rounded-bottom p-4">
                                    <a href="#" className="h4 d-inline-block mb-4">Hr Consulting</a>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                                    </p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="/assets/img/service-6.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="rounded-bottom p-4">
                                    <a href="#" className="h4 d-inline-block mb-4">Marketing Consulting</a>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                                    </p>
                                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="container-fluid feature pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s"style={{maxWidth: '800px'}}>
                        <h4 className="text-primary">Our Features</h4>
                        <h1 className="display-5 mb-4">Connecting businesses, ideas, and people for greater impact.</h1>
                        <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="feature-item p-4">
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fas fa-chart-line fa-4x text-primary"></i>
                                </div>
                                <h4>Global Management</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...
                                </p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="feature-item p-4">
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fas fa-university fa-4x text-primary"></i>
                                </div>
                                <h4>Corporate Banking</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...
                                </p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="feature-item p-4">
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fas fa-file-alt fa-4x text-primary"></i>
                                </div>
                                <h4>Asset Management</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...
                                </p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="feature-item p-4">
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fas fa-hand-holding-usd fa-4x text-primary"></i>
                                </div>
                                <h4>Investment Bank</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...
                                </p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="container-fluid offer-section pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4 className="text-primary">Our Offer</h4>
                        <h1 className="display-5 mb-4">Benefits We offer</h1>
                        <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </p>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="nav nav-pills bg-light rounded p-5">
                                <a className="accordion-link p-4 active mb-4" data-bs-toggle="pill" href="#collapseOne">
                                    <h5 className="mb-0">Lending money for investment of your new projects</h5>
                                </a>
                                <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseTwo">
                                    <h5 className="mb-0">Lending money for investment of your new projects</h5>
                                </a>
                                <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseThree">
                                    <h5 className="mb-0">Mobile payment is more flexible and easy for all investors</h5>
                                </a>
                                <a className="accordion-link p-4 mb-0" data-bs-toggle="pill" href="#collapseFour">
                                    <h5 className="mb-0">all transaction is kept free for the member of pro traders</h5>
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
                                            <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?
                                            </p>
                                            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseTwo" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-md-7">
                                            <img src="/assets/img/offer-2.jpg" className="img-fluid w-100 rounded" alt="" />
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?
                                            </p>
                                            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseThree" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-md-7">
                                            <img src="/assets/img/offer-3.jpg" className="img-fluid w-100 rounded" alt="" />
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?
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
                                            <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?
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
           <TestimonialCarousel />
            <div className="container-fluid faq-section pb-5">
                <div className="container pb-5 overflow-hidden">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4 className="text-primary">FAQs</h4>
                        <h1 className="display-5 mb-4">Frequently Asked Questions</h1>
                        <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </p>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="accordion accordion-flush bg-light rounded p-5" id="accordionFlushSection">
                                <div className="accordion-item rounded-top">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        What Does This Tool Do?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushSection">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first items accordion body.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        What Are The Disadvantages Of Online Trading?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushSection">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second items accordion body. Lets imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Is Online Trading Safe?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushSection">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second items accordion body. Lets imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        What Is Online Trading, And How Dose It Work?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushSection">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second items accordion body. Lets imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        Which App Is Best For Online Trading?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushSection">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second items accordion body. Lets imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item rounded-bottom">
                                    <h2 className="accordion-header" id="flush-headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                        How To Create A Trading Account?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushSection">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                            <div className="bg-primary rounded">
                                <img src="/assets/img/about-2.png" className="img-fluid w-100" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="container-fluid team pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4 className="text-primary">Our Team</h4>
                        <h1 className="display-5 mb-4">Meet Our Advisers</h1>
                        <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="/assets/img/team-1.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="team-title">
                                    <h4 className="mb-0">David James</h4>
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
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="/assets/img/team-2.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="team-title">
                                    <h4 className="mb-0">David James</h4>
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
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="/assets/img/team-3.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="team-title">
                                    <h4 className="mb-0">David James</h4>
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
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="/assets/img/team-4.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="team-title">
                                    <h4 className="mb-0">David James</h4>
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
        
        <TestimonialCarouselClient/>
            {/* <div className="container-fluid testimonial pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4 className="text-primary">Testimonial</h4>
                        <h1 className="display-5 mb-4">Our Clients Riviews</h1>
                        <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </p>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.2s">
                        <div className="testimonial-item">
                            <div className="testimonial-quote-left">
                                <i className="fas fa-quote-left fa-2x"></i>
                            </div>
                            <div className="testimonial-img">
                                <img src="/assets/img/testimonial-1.jpg" className="img-fluid" alt="Image" />
                            </div>
                            <div className="testimonial-text">
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis excepturi quisquam temporibus voluptatum reprehenderit culpa, quasi corrupti laborum accusamus.
                                </p>
                            </div>
                            <div className="testimonial-title">
                                <div>
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="mb-0">Profession</p>
                                </div>
                                <div className="d-flex text-primary">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div className="testimonial-quote-right">
                                <i className="fas fa-quote-right fa-2x"></i>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-quote-left">
                                <i className="fas fa-quote-left fa-2x"></i>
                            </div>
                            <div className="testimonial-img">
                                <img src="/assets/img/testimonial-2.jpg" className="img-fluid" alt="Image" />
                            </div>
                            <div className="testimonial-text">
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis excepturi quisquam temporibus voluptatum reprehenderit culpa, quasi corrupti laborum accusamus.
                                </p>
                            </div>
                            <div className="testimonial-title">
                                <div>
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="mb-0">Profession</p>
                                </div>
                                <div className="d-flex text-primary">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div className="testimonial-quote-right">
                                <i className="fas fa-quote-right fa-2x"></i>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-quote-left">
                                <i className="fas fa-quote-left fa-2x"></i>
                            </div>
                            <div className="testimonial-img">
                                <img src="/assets/img/testimonial-3.jpg" className="img-fluid" alt="Image" />
                            </div>
                            <div className="testimonial-text">
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis excepturi quisquam temporibus voluptatum reprehenderit culpa, quasi corrupti laborum accusamus.
                                </p>
                            </div>
                            <div className="testimonial-title">
                                <div>
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="mb-0">Profession</p>
                                </div>
                                <div className="d-flex text-primary">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div className="testimonial-quote-right">
                                <i className="fas fa-quote-right fa-2x"></i>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-quote-left">
                                <i className="fas fa-quote-left fa-2x"></i>
                            </div>
                            <div className="testimonial-img">
                                <img src="/assets/img/testimonial-2.jpg" className="img-fluid" alt="Image" />
                            </div>
                            <div className="testimonial-text">
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis excepturi quisquam temporibus voluptatum reprehenderit culpa, quasi corrupti laborum accusamus.
                                </p>
                            </div>
                            <div className="testimonial-title">
                                <div>
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="mb-0">Profession</p>
                                </div>
                                <div className="d-flex text-primary">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div className="testimonial-quote-right">
                                <i className="fas fa-quote-right fa-2x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
       
           
          
            <a href="#" className="btn btn-primary btn-lg-square rounded-circle back-to-top " ><i className="bi bi-arrow-up " ></i></a>   
    
        </>
      )
}
 
export default HomeDefault;