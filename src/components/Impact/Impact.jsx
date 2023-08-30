import './Impact.css'
import impactIcon1 from '../../assets/images/icon1.png'
import impactIcon2 from '../../assets/images/icon2.png'
import banner from '../../assets/images/banner.png'
import '../CommonCss/common.css'

const Impact = () => {
  return (
    <section id="impact">
      <div className="container">
        <div className="impact-up text-center text-lg-start">
          <h2 className="text-1 mb-3">We create real impact</h2>
          <p className="pera mx-auto mx-lg-0">
            We design, build and support websites and apps for clients
            worldwide. Create beautiful, eye-catching on-page messages without
            the need for a developer.
          </p>
        </div>
        <div className="impact-dowm text-center text-lg-start row">
          <div className="impact-down-left col-lg-6">
            <div className="col">
              <div className="row">
                <div className="col-lg-2">
                  <img src={impactIcon1} alt="icon" />
                </div>
                <div className="col-lg-10">
                  <h3 className="text-2 my-4 mt-lg-0">Competitive analysis</h3>
                  <p className="pera mb-5">
                    With an all-new look and powerful features, Ekko is the best
                    way to ensure success for your business.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2">
                  <img src={impactIcon2} alt="icon" />
                </div>
                <div className="col-lg-10">
                  <h3 className="text-2 my-4 mt-lg-0">Strategy And research</h3>
                  <p className="pera mb-5">
                    Save money and start building your website using the best
                    tools available on the market today.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="impact-down-right col-lg-6 col-12">
            <img src={banner} alt="banner" className="img-fluid"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact