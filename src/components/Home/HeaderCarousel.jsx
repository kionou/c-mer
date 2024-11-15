
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

// function HeaderCarousel() {
//   const carouselOptions = {
//     animateOut: 'fadeOut',
//     items: 1,
//     margin: 0,
//     stagePadding: 0,
//     autoplay: true,
//     smartSpeed: 500,
//     dots: true,
//     loop: true,
//     nav: true,
//     navText: [
//       '<i class="bi bi-arrow-left"></i>',
//       '<i class="bi bi-arrow-right"></i>',
//     ],
//   };

//   return (
//     <OwlCarousel className="header-carousel owl-carousel" {...carouselOptions}>
//       <div className="header-carousel-item">
//         <img
//           src="/assets/img/carousel-1.jpg"
//           className="img-fluid w-100"
//           alt="Image"
//         />
//         <div className="carousel-caption">
//           <div className="container">
//             <div className="row gy-0 gx-5">
//               <div className="col-lg-0 col-xl-5"></div>
//               <div className="col-xl-7 animated fadeInLeft">
//                 <div className="text-sm-center text-md-end">
//                   <h4 className="text-primary text-uppercase fw-bold mb-4">
//                     Welcome To Stocker
//                   </h4>
//                   <h1 className="display-4 text-uppercase text-white mb-4">
//                     Invest your money with higher return
//                   </h1>
//                   <p className="mb-5 fs-5">
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industrys
//                     standard dummy...
//                   </p>
//                   <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
//                     <a
//                       className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
//                       href="#"
//                     >
//                       <i className="fas fa-play-circle me-2"></i> Watch Video
//                     </a>
//                     <a
//                       className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
//                       href="#"
//                     >
//                       Learn More
//                     </a>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-center justify-content-md-end">
//                     <h2 className="text-white me-2">Follow Us:</h2>
//                     <div className="d-flex justify-content-end ms-2">
//                       <a
//                         className="btn btn-md-square btn-light rounded-circle me-2"
//                         href=""
//                       >
//                         <i className="fab fa-facebook-f"></i>
//                       </a>
//                       <a
//                         className="btn btn-md-square btn-light rounded-circle mx-2"
//                         href=""
//                       >
//                         <i className="fab fa-twitter"></i>
//                       </a>
//                       <a
//                         className="btn btn-md-square btn-light rounded-circle mx-2"
//                         href=""
//                       >
//                         <i className="fab fa-instagram"></i>
//                       </a>
//                       <a
//                         className="btn btn-md-square btn-light rounded-circle ms-2"
//                         href=""
//                       >
//                         <i className="fab fa-linkedin-in"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="header-carousel-item">
//         <img
//           src="/assets/img/carousel-2.jpg"
//           className="img-fluid w-100"
//           alt="Image"
//         />
//         <div className="carousel-caption">
//           <div className="container">
//             <div className="row g-5">
//               <div className="col-12 animated fadeInUp">
//                 <div className="text-center">
//                   <h4 className="text-primary text-uppercase fw-bold mb-4">
//                     Welcome To Stocker
//                   </h4>
//                   <h1 className="display-4 text-uppercase text-white mb-4">
//                     Invest your money with higher return
//                   </h1>
//                   <p className="mb-5 fs-5">
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industrys
//                     standard dummy...
//                   </p>
//                   <div className="d-flex justify-content-center flex-shrink-0 mb-4">
//                     <a
//                       className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
//                       href="#"
//                     >
//                       <i className="fas fa-play-circle me-2"></i> Watch Video
//                     </a>
//                     <a
//                       className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
//                       href="#"
//                     >
//                       Learn More
//                     </a>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-center">
//                     <h2 className="text-white me-2">Follow Us:</h2>
//                     <div className="d-flex justify-content-end ms-2">
//                       <a
//                         className="btn btn-md-square btn-light rounded-circle me-2"
//                         href=""
//                       >
//                         <i className="fab fa-facebook-f"></i>
//                       </a>
//                       <a
//                         className="btn btn-md-square btn-light rounded-circle mx-2"
//                         href=""
//                       >
//                         <i className="fab fa-twitter"></i>
//                       </a>
//                       <a
//                         className="btn btn-md-square btn-light rounded-circle mx-2"
//                         href=""
//                       >
//                         <i className="fab fa-instagram"></i>
//                       </a>
//                       <a
//                         className="btn btn-md-square btn-light rounded-circle ms-2"
//                         href=""
//                       >
//                         <i className="fab fa-linkedin-in"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </OwlCarousel>



//   );
// }

// export default HeaderCarousel;


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HeaderCarousel() {
  const settings = {
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    dots: true,
    infinite: true,
    arrows: true,
    // prevArrow: <i className="bi bi-arrow-left"></i>,
    // nextArrow: <i className="bi bi-arrow-right"></i>,
  };

  return (
    <Slider {...settings} className="header-carousel">
      <div className="header-carousel-item">
        <img
          src="/assets/img/carousel-1.jpg"
          className="img-fluid w-100"
          alt="Image"
        />
        <div className="carousel-caption">
          <div className="container">
            <div className="row gy-0 gx-5">
              <div className="col-lg-0 col-xl-5"></div>
              <div className="col-xl-7 animated fadeInLeft">
                <div className="text-sm-center text-md-end">
                  <h4 className="text-primary text-uppercase fw-bold mb-4">
                  Unlock Your Financial Potential
                  </h4>
                  <h1 className="display-4 text-uppercase text-white mb-4">
                  Maximize returns with smart, strategic investments.
                  </h1>
                  <p className="mb-5 fs-5">
                  Discover the power of informed investment choices that secure your future. 
                  Our expertise guides you to make the best financial decisions for higher returns.
                  </p>
                  <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                    <a
                      className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                      href="#"
                    >
                      <i className="fas fa-play-circle me-2"></i> Watch Video
                    </a>
                    <a
                      className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                      href="#"
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                    <h2 className="text-white me-2">Follow Us:</h2>
                    <div className="d-flex justify-content-end ms-2">
                      <a className="btn btn-md-square btn-light rounded-circle me-2" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-md-square btn-light rounded-circle mx-2" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-md-square btn-light rounded-circle mx-2" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a className="btn btn-md-square btn-light rounded-circle ms-2" href="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-carousel-item">
        <img
          src="/assets/img/carousel-2.jpg"
          className="img-fluid w-100"
          alt="Image"
        />
        <div className="carousel-caption">
          <div className="container">
            <div className="row g-5">
              <div className="col-12 animated fadeInUp">
                <div className="text-center">
                  <h4 className="text-primary text-uppercase fw-bold mb-4">
                  Empowering Your Growth Journey
                  </h4>
                  <h1 className="display-4 text-uppercase text-white mb-4">
                  Invest today for a brighter tomorrow.
                  </h1>
                  <p className="mb-5 fs-5">
                  We provide the tools, insights, and strategies to turn your financial goals into reality. 
                  Join us on a path to success with higher returns on your investments.
                  </p>
                  <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                    <a
                      className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                      href="#"
                    >
                      <i className="fas fa-play-circle me-2"></i> Watch Video
                    </a>
                    <a
                      className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                      href="#"
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <h2 className="text-white me-2">Follow Us:</h2>
                    <div className="d-flex justify-content-end ms-2">
                      <a className="btn btn-md-square btn-light rounded-circle me-2" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-md-square btn-light rounded-circle mx-2" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-md-square btn-light rounded-circle mx-2" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a className="btn btn-md-square btn-light rounded-circle ms-2" href="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default HeaderCarousel;
