
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TestimonialCarousel = () => {
  // Options pour Owl Carousel
  const options = {
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1200: { items: 3 },
    },
  };

  return (
    <div className="container-fluid testimonial pb-5">
  
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Testimonial</h4>
          <h1 className="display-5 mb-4">Our Clients Reviews</h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus.
          </p>
        </div>
        
        {/* Utilisation de react-owl-carousel avec les options */}
        <OwlCarousel className="owl-theme" {...options}>
          {[1, 2, 3, 4].map((item, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial-quote-left">
                <i className="fas fa-quote-left fa-2x"></i>
              </div>
              <div className="testimonial-img">
                <img src={`/assets/img/testimonial-${item}.jpg`} className="img-fluid" alt="Client" />
              </div>
              <div className="testimonial-text">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis excepturi quisquam temporibus voluptatum reprehenderit.
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
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
