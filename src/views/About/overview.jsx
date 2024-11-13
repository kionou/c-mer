import HeaderOther from "../../components/Home/HeaderOthers";
import "../../assets/css/about/overview.css";

const OverviewDefault = () => {
  return (
    <>
      <HeaderOther
        titre="Overview"
        home="Home"
        view="Pages"
        lien="Overview"
        imageUrl="/assets/img/carousel-1.jpg"
      />
      <div className="container-fluid service py-3" style={{backgroundColor:'#fff'}}>
       <div className="container ">
       <div className="text-center mx-auto  wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4  className="text-primary py-2" style={{border:'1px solid var(--bs-primary)'}}>Our Vision and Goals</h4>
                        <h1 className="display-5 mb-4">News provided best offer</h1>
            
                    </div>
       </div>
      </div>
      <section className="our-vision-and-goals" style={{ padding: "0 20px" }}>
      
      <p className="mb-0">
C-MER (Center for Market and Economic Research) is an organization
 dedicated to market analysis and economic research. Our mission
  is to provide cutting-edge insights and analyses to help businesses,
   governments, and investors make informed decisions. Founded by experts
    in economics and finance, C-MER is committed to delivering unique 
    perspectives and innovative solutions.

  </p>

        <ul className="vision-list">
          <li className="vision-item content-right">
            <div className="vision-item-inner">
              <div className="vision-image-wrap">
                <img
                  src="/assets/img/about-1.jpg"
                  alt="RAND staff throwing paper airplanes"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="vision-text">
                <h3>Mission</h3>
                <p>
                Our mission is to analyze, understand, and share market dynamics to 
                foster growth and economic resilience worldwide. We strive to make financial 
                information accessible 
                and understandable for everyone, promoting informed and responsible decision-making.
                </p>
                <a
                  href="#"
                  className="arrow-blue">
                  Learn <span className="last-word">more</span>
                </a>
              </div>
            </div>
          </li>
          <li className="vision-item content-left">
            <div className="vision-item-inner">
              <div className="vision-image-wrap">
                <img
                 src="/assets/img/about-2.jpg"
                  alt="Three RAND researchers talking and laughing"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="vision-text">
                <h3 style={{ textAlign: "center" }}>
                Vision
                </h3>
                <p>
                We aim to become a global leader in market research and analysis,
                 offering data-driven solutions and encouraging well-informed decisions
                  that positively impact the global economy.
                </p>
                <a
                  href="#"
                  className="arrow-blue">
                  Learn <span className="last-word">more</span>
                </a>
              </div>
            </div>
          </li>
          <li className="vision-item content-right">
            <div className="vision-item-inner">
              <div className="vision-image-wrap">
                <img
                  src="https://www.rand.org/content/dam/rand/www/external/about/diversity/culture-community-circle.jpg"
                  alt="RAND staff networking"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="vision-text">
                <h3 style={{ textAlign: "center" }}>
                 History
                </h3>
                <p>
                Founded with a mission to lead in market and economic research, C-MER has
                 evolved significantly over the years. From its early days, C-MER has been
                  committed to providing data-driven insights and research solutions to help
                   businesses, governments, and individuals make
                 informed decisions. Heres a look back at some of our key milestones.
                </p>
                <a
                  href="#"
                  className="arrow-blue">
                  Learn <span className="last-word">more</span>
                </a>
              </div>
            </div>
          </li>
        </ul>

        <div className="journey-wrapper">
          <h3 id="rand-is-on-a-journey-" style={{textAlign:'center'}}>Our Journey</h3>

          <p>
          At C-MER, our journey began with a bold mission: to provide clear, accurate,
           and insightful research to help shape better decisions. Since our founding
            in [founding year], we have been on a continuous journey, exploring innovative
             approaches to understanding complex markets, industries, and economic trends.
           Our commitment to excellence has been the cornerstone of our growth and success.
          </p>
        </div>
      </section>
    </>
  );
};

export default OverviewDefault;
