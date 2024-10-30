
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect } from 'react';
// import WOW from 'wowjs';

const BlogCarousel = () => {
    useEffect(() => {
        // new WOW.WOW().init();
      }, []);
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
    <div className="container-fluid blog pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp"   data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Our Blog & News</h4>
          <h1 className="display-5 mb-4">Articles For Pro Traders</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
          </p>
        </div>
        
        {/* Utilisation de react-owl-carousel avec les options */}
        <OwlCarousel className="owl-theme blog-carousel wow fadeInUp" data-wow-delay="0.2s" {...options}>
          {[1, 2, 3, 4].map((item, index) => (
            <div className="blog-item p-4" key={index}>
              <div className="blog-img mb-4">
                <img src={`/assets/img/service-${item}.jpg`} className="img-fluid w-100 rounded" alt="" />
                <div className="blog-title">
                  <a href="#" className="btn">Dividend Stocks</a>
                </div>
              </div>
              <a href="#" className="h4 d-inline-block mb-3">Options Trading Business?</a>
              <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut aliquam suscipit error corporis accusamus labore....</p>
              <div className="d-flex align-items-center">
                <img src={`/assets/img/testimonial-${item}.jpg`} className="img-fluid rounded-circle" style={{ width: '60px', height: '60px' }} alt="" />
                <div className="ms-3">
                  <h5>Admin</h5>
                  <p className="mb-0">October 9, 2025</p>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default BlogCarousel;
