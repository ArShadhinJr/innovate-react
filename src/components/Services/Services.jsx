import './Services.css';
import ser1 from '../../assets/images/services1.png'
import ser2 from '../../assets/images/services2.png'
import  ser3  from '../../assets/images/services3.png'
import  ser4  from '../../assets/images/services4.png'
import  ser5 from '../../assets/images/services5.png'

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4">
          {/* What We Do */}
          <div className="col text-center">
            <h3 className="text-1 mb-2">What We Do</h3>
            <p className="pera mb-4">
              We are now a team of strategists, engineers, designers, and marketers who both use and develop technology
            </p>
            <button className="btn-web">Contact Us</button>
          </div>
          {/* Web Design & Dev */}
          <div className="col text-center">
            <div className="service-item">
              <img src={ser1} alt="services image" />
              <h3 className="text-2 mt-5 mb-3">Web Design & Dev</h3>
              <p className="pera mb-4">
                Social Media has changed the way we interact & do business while creating
              </p>
              <a href="#" className="btn-service">Read more</a>
            </div>
          </div>
          {/* Software Dev */}
          <div className="col text-center">
            <div className="service-item">
              <img src={ser2} alt="services image" />
              <h3 className="text-2 mt-5 mb-3">Software Dev</h3>
              <p className="pera mb-4">
                Content Marketing is the other fold of online advertisement. If you are looking to build
              </p>
              <a href="#" className="btn-service">Read more</a>
            </div>
          </div>
          {/* Content Writing */}
          <div className="col text-center">
            <div className="service-item">
              <img src={ser3} alt="services image" />
              <h3 className="text-2 mt-5 mb-3">Content Writing</h3>
              <p className="pera mb-4">
                Social Media has changed the way we interact & do business while creating a new avenue.
              </p>
              <a href="#" className="btn-service">Read more</a>
            </div>
          </div>
          {/* Digital Marketing */}
          <div className="col text-center">
            <div className="service-item">
              <img src={ser4} alt="services image" />
              <h3 className="text-2 mt-5 mb-3">Digital Marketing</h3>
              <p className="pera mb-4">
                Social Media has changed the way we interact & do business while creating
              </p>
              <a href="#" className="btn-service">Read more</a>
            </div>
          </div>
          {/* Support & Training */}
          <div className="col text-center">
            <div className="service-item">
              <img src={ser5} alt="services image" />
              <h3 className="text-2 mt-5 mb-3">Support & Training</h3>
              <p className="pera mb-4">
                Content Marketing is the other fold of online advertisement. If you are looking to build
              </p>
              <a href="#" className="btn-service">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services