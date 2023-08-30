import '../CommonCss/common.css'
import './Review.css'
import revi from '../../assets/images/reviewer.png'

const Review = () => {
  return (
    <section id="review">
      <div className="container">
        <div className="review-up text-center">
          <h3 className="text-1 mb-5">What The People Thinks About Us</h3>
        </div>
        <div className="row">
          <div className="review-down text-center col-lg-11 mx-auto">
            <div className="review-item">
              <i className="fa-solid fa-less-than arrow-left d-none d-lg-inline"></i>
              <i className="fa-solid fa-greater-than arrow-right d-none d-lg-inline"></i>
              <div className="reviewer">
                <img src={revi} alt="" className="rounded rounded-circle" />
              </div>
              <div className="review-star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-4">
                Lesser Replenish bearing they’re him cattle kind dominion. You
                which fill place. Land she’d subdue divided gathering blessed
                seasons it. Without, wherein days.
              </p>
              <h5 className="text-3">Lukan Depina</h5>
              <p className="pera">Ceo And Head Of Idea</p>
              <div className="review-sild-icon d-lg-none">
                <i className="fa-solid fa-less-than arrow-md-left"></i><i className="fa-solid fa-greater-than arrow-md-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review