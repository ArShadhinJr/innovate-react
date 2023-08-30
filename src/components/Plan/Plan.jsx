import './Plan.css';
import plan1 from '../../assets/images/plan1.png'
import plan2 from '../../assets/images/plan2.png'
import plan3 from '../../assets/images/plan5.png'
import '../CommonCss/common.css'


const Plan = () => {
  return (
    <section id="plan">
      <div className="container">
        <div className="plan-up text-center">
          <h3 className="text-1 mb-5">Choose The Right Plan</h3>
        </div>
        <div className="plan-down">
          <div className="row row-cols-1 row-cols-lg-3 row-col-md-1 g-4">
            <div className="col">
              <div className="plan-item text-center">
                <h3 className="text-2 mb-3">Basic</h3>
                <img src={plan1} alt="plan1" />
                <h2 className="dolar-amount">
                  <span className="dolar-sign">$</span> 160
                </h2>
                <p className="pera">
                  Responsive Design Dynamic Elements Service Pages Custom Design
                  & Features
                </p>
              </div>
            </div>
            <div className="col">
              <div className="plan-item text-center">
                <h3 className="text-2 mb-3">Professional</h3>
                <div className="impact-img">
                  <img src={plan2} alt="plan1" className="img-fluid" />
                </div>
                <h2 className="dolar-amount">
                  <span className="dolar-sign">$</span> 240
                </h2>
                <p className="pera">
                  Responsive Design Dynamic Elements Service Pages Custom Design
                  & Features
                </p>
              </div>
            </div>
            <div className="col">
              <div className="plan-item text-center">
                <h3 className="text-2 mb-3">Exclusive</h3>
                <img src={plan3} alt="plan1" className="img-bg" />
                <h2 className="dolar-amount">
                  <span className="dolar-sign">$</span> 325
                </h2>
                <p className="pera">
                  Responsive Design Dynamic Elements Service Pages Custom Design
                  & Features
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plan