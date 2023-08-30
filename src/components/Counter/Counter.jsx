import './Counter.css';
import '../CommonCss/common.css'

const Counter = () => {
  return (
    <section className="counter">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className="col right-col">
            <div className="h-100 text-center">
              <h5>53k</h5>
              <p className="card-text text-capitalize">Happy client</p>
            </div>
          </div>
          <div className="col right-col">
            <div className="text-center h-100">
              <h5 className="card-title">10k</h5>
              <p className="card-text">Projects Done</p>
            </div>
          </div>
          <div className="col right-col">
            <div className="text-center h-100">
              <h5 className="card-title">120</h5>
              <p className="card-text">Gets Award</p>
            </div>
          </div>
          <div className="col">
            <div className="text-center h-100">
              <h5 className="card-title">16</h5>
              <p className="card-text text-capitalize">operated years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter