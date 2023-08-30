import './Footer.css';
import logo from '../../assets/images/logo.png';
import '../CommonCss/common.css'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-top row">
          <div className="col-lg-6 footer-left">
            <img src={logo} alt="logo" className="mb-lg-5 mb-3" />
            <p className="pera-4 mb-4">
              Install any demo or template with a single click. You can mix and
              match all the demos & templates. Every demo can be turned into one
              or multi-page.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 footer-right row">
            <div className="col-lg-4 col-md-4">
              <h4 className="text-3">Features</h4>
              <ul>
                <li><a href="#" className="pera-5 mb-4 d-block">Home</a></li>
                <li><a href="#" className="pera-5 mb-4 d-block">About</a></li>
                <li><a href="#" className="pera-5 mb-4 d-block">Benifit</a></li>
                <li><a href="#" className="pera-5 mb-4 d-block">Pricing</a></li>
                <li><a href="#" className="pera-5 mb-4 d-block">Blog</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <h4 className="text-3">Products</h4>
              <ul>
                <li>
                  <a href="#" className="pera-5 mb-4 d-block">Task Management</a>
                </li>
                <li>
                  <a href="#" className="pera-5 mb-4 d-block">Company growth</a>
                </li>
                <li>
                  <a href="#" className="pera-5 mb-4 d-block">Time tracking</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <h4 className="text-3">Support</h4>
              <ul>
                <li>
                  <a href="#" className="pera-5 mb-4 d-block">Customer service</a>
                </li>
                <li>
                  <a href="#" className="pera-5 mb-4 d-block">Accessibility</a>
                </li>
                <li><a href="#" className="pera-5 mb-4 d-block">Contact us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom row text-md-center text-lg-start">
          <div className="footer-bottom-left col-lg-6 order-lg-1 order-md-2">
            <p className="pera-4 ">@20201 Innovate.All rights reserved.</p>
          </div>
          <div className="footer-bottom-right col-lg-6 order-md-1 order-lg-2">
            <p className="float-lg-end float-md-center">
              <span className="text-white me-5">Privacy policy</span>
              <span className="text-white">Terms & condition</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer