import HeaderOther from "../../components/Home/HeaderOthers";

import { useEffect } from "react";

const SearchDefault = () => {
  useEffect(() => {}, []);

  


  return (
    <>
      <HeaderOther
        titre="Search"
        home="Home"
        view="Pages"
        lien="Search"
        imageUrl="/assets/img/carousel-1.jpg"
      />
      <div className="container-fluid feature py-3">
        <div className="container ">
          <div
            className="text-center mx-auto  wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}>
            <h4  className="text-primary py-2" style={{border:'1px solid var(--bs-primary)'}}>Search</h4>

            {/* <h1 className="display-5 mb-4">
              Connecting businesses, ideas, and people for greater impact.
            </h1> */}
            <p className="mb-0">
              Discover our successful projects and see how we bring ideas to
              life. Our expertise and innovative approach have driven impactful
              results across various industries.
            </p>
          </div>
        
          <div className="row mb-3">
            <div className="col-xl-8">
            
            <input type="text" className="form-control" />
            </div>
          
            <div className="col-xl-4">
           <button className="btn btn-primary  ">Search</button>
            </div>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.2s">
              <div className="feature-item p-4">
                
                <h4>Global Management</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  hic laborum odit pariatur...
                </p>
                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.4s">
              <div className="feature-item p-4">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-university fa-4x text-primary"></i>
                </div>
                <h4>Corporate Banking</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  hic laborum odit pariatur...
                </p>
                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.6s">
              <div className="feature-item p-4">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-file-alt fa-4x text-primary"></i>
                </div>
                <h4>Asset Management</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  hic laborum odit pariatur...
                </p>
                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.8s">
              <div className="feature-item p-4">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-hand-holding-usd fa-4x text-primary"></i>
                </div>
                <h4>Investment Bank</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  hic laborum odit pariatur...
                </p>
                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchDefault;
