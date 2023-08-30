import logo from '../../assets/images/logo.png';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" className="nav-logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"aria-controls="offcanvasWithBothOptions">
              <span className="fs-2 text-white">
                <i className="fa-solid fa-bars"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Price</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Blog</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button className="btn-web text-white" type="submit">
                  Contact Us
                </button>
              </form>
            </div>
            <div className="offcanvas offcanvas-start d-lg-none" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" >
              <div className="offcanvas-header bg-canvas">
                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                  <img src={logo} alt="logo" />
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body bg-canvas">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"
                      >About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"
                      >Service</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"
                      >Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Price</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"
                      >Blog</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <button className="btn-web text-white d-block w-100" type="submit" >
                    Contact Us
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar