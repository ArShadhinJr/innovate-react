import './Post.css';
import news from '../../assets/images/news.png'

const Post = () => {
  return (
    <section id="post">
      <div className="container">
        <div className="post-up text-md-center">
          <h3 className="text-1 mb-5">You May Also Like</h3>
        </div>
        <div className="post-down">
          <div className="row mb-5">
            <div className="col-lg-4 col-md-5 offset-lg-1">
              <img src={news} alt="news" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-7 offset-lg-1">
              <div>
                <span className="pera-3">News</span>
                <span className="pera-3">By</span>
                <span className="pera-3">Tomas Nikelson</span>
                <span className="pera-3">Posted</span>
                <span className="pera-3">5 Hours Ago</span>
                <h4 className="text-5 my-lg-4 my-md-2">
                  Punto Pago Allows Quick And Secure Payments For Services In
                  Panama
                </h4>
                <a href="#" className="btn-service">Read more</a>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-4 col-md-5 offset-lg-1">
              <img src={news} alt="news" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-7 offset-lg-1">
              <div>
                <span className="pera-3">News</span>
                <span className="pera-3">By</span>
                <span className="pera-3">Tomas Nikelson</span>
                <span className="pera-3">Posted</span>
                <span className="pera-3">5 Hours Ago</span>
                <h4 className="text-5 my-lg-4 my-md-2">
                  The User Can Also Replenish A Balance Make Remittances
                </h4>
                <a href="#" className="btn-service">Read more</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-lg-1">
              <img src={news} alt="news" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-7 offset-lg-1">
              <div>
                <span className="pera-3">News</span>
                <span className="pera-3">By</span>
                <span className="pera-3">Tomas Nikelson</span>
                <span className="pera-3">Posted</span>
                <span className="pera-3">5 Hours Ago</span>
                <h4 className="text-5 my-lg-4 my-md-2">
                  Replenish a User Can Also Replenish A Balance Make Remittances
                </h4>
                <a href="#" className="btn-service">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Post