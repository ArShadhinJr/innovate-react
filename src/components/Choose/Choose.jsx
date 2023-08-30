import './Choose.css';
import '../CommonCss/common.css'

const Choose = () => {
  return (
    <section id="choose">
      <div className="container">
        <div className="row">
          <div className="choose-right order-lg-1 order-2 col-lg-6">
            <div className="col row choose-item">
              <span className="circle rounded rounded-circle"> </span>
              <span className="pera">
                We solve real-world problems through people and the web.
              </span>
            </div>
            <div className="col row choose-item">
              <span className="circle rounded rounded-circle"> </span>
              <span className="pera">
                We make processes and technology work efficiently together.
              </span>
            </div>
            <div className="col row choose-item">
              <span className="circle rounded rounded-circle"> </span>
              <span className="pera">
                We advance improve existing technology through research and
                development.
              </span>
            </div>
            <div className="col row choose-item">
              <span className="circle rounded rounded-circle"> </span>
              <span className="pera">
                We develop long-lasting and scalable solutions, relationships
                partnerships.
              </span>
            </div>
          </div>
          <div className="choose-left order-1 text-center text-lg-start col-lg-6 oder-lg-2">
            <h3 className="text-1 mb-2">Why Choose Us</h3>
            <p className="pera mb-4 mx-auto mx-lg-0">
              We are now a team of strategists, engineers, designers, and
              marketers who both use and develop technology for a variety of
              client needs.
            </p>
            <button className="btn-web">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose