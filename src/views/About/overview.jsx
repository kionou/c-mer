import HeaderOther from "../../components/Home/HeaderOthers";
import "../../assets/css/about/overview.css";

const OverviewDefault = () => {
  return (
    <>
      <HeaderOther
        titre="Who are we ?"
        home="Home"
        view="Pages"
        lien="Who are we ?"
        imageUrl="/assets/img/carousel-1.jpg"
      />
      <div className="container-fluid service py-3" style={{backgroundColor:'#fff'}}>
       <div className="container ">
       <div className="text-center mx-auto  wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4  className="text-primary py-2" style={{border:'1px solid var(--bs-primary)'}}>Our Vision and Goals</h4>
                      
            
                    </div>
       </div>
      </div>
      <section className="our-vision-and-goals" style={{ padding: "0 20px" }}>
      
      <p className="mb-0">
      C-MER | Centre for Monitoring, Evaluation and Research is a research consulting firm
 dedicated to providing cutting-edge research, monitoring, and evaluation services. Our work
 revolves around delivering both quantitative and qualitative research, primarily focusing on
 monitoring, evaluation, and research. We employ a combination of summative and formative
 evaluations to enhance our services.

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
                C-MER’s mission is to support partners in effectively and successfully solving social problems
                to improve the well-being of the people they aim to benefit globally. Our expertise is dedicated
                to creating development impact in various sectors, including health, agriculture, food security,
                governance, education, livelihoods, youth, women, and environmental management.
                </p>
            
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
                C-MER’s Vision is to become a leading, dynamic socio-economic development consultancy
            firm that contributes to creating a better world by strengthening transformative processes for
            community development.
                </p>
             
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
               
              </div>
            </div>
          </li>
        </ul>

        <div className="journey-wrapper">
          <h3 id="rand-is-on-a-journey-" style={{textAlign:'center'}}> Why Choose Us</h3>

          <p>
          We employ a combination of approaches including participatory/collaborative evaluation,
          utilization-focused evaluation, values-reective and engaged evaluation, as well as realist
          evaluation. This comprehensive methodology helps our clients gain valuable insights into their
          work and supports them in improving their programs and projects. Our comprehensive
          approach ensures that we provide valuable insights and practical recommendations to help our
          clients improve their programs and projects. Our client portfolio comprises Ministries, 
          nongovernmental organizations, public agencies, universities, and foundations.
          </p>
        </div>
      </section>
    </>
  );
};

export default OverviewDefault;
