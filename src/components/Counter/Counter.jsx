import CountUp from 'react-countup';
import './counter.css'
import i18n from '../../Services/MultiLanguageComponent/i18n';

const Counter = () => {
  return (
    <div className="counter-wrapper">
      <div className="container">
        <div className="counter-items-wrapper">
          <div className="counter-item">
            <div className="counter-item-value">
              <CountUp end={10} delay={2} enableScrollSpy={true} scrollSpyOnce={true} />
            </div>
            <div className="counter-item-text">{i18n.Get("shortly.employees")}</div>
          </div>
          <div className="counter-item">
            <div className="counter-item-value">
              <CountUp end={45} delay={2} enableScrollSpy={true} scrollSpyOnce={true} />
            </div>
            <div className="counter-item-text">{i18n.Get("shortly.exports")}</div>
          </div>
          <div className="counter-item">
            <div className="counter-item-value">
              <CountUp end={12} delay={2} enableScrollSpy={true} scrollSpyOnce={true} />
            </div>
            <div className="counter-item-text">{i18n.Get("shortly.factory")}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter