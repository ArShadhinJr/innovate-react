import './Banner.css';
const Banner = () => {
  return (
    // <!-- ========================================
    //             BANNER SECTION
    // ======================================== -->
    <section className="banner">
      <div className="container row mx-auto text-white text-center">
        <div className="col-lg-10 mx-auto">
          <h1>You're unique. your website should be too.</h1>
          <p>
            A beautiful website passionately crafted for your small business.
            Our Digital Agency development has changed the way brands and
            businesses use technology for growing business.
          </p>
          <button className="btn-web me-3 text-capitalize">get free quoto</button>
          <button className="btn-web-2 text-capitalize">Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default Banner