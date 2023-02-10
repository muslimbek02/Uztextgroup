import CountUp from 'react-countup';
import './counter.css'

const Counter = () => {
  return (
    <div className="counter-wrapper">
      <div className="container">
        <div className="counter-items-wrapper">
          <div className="counter-item">
            <div className="counter-item-value">
              <CountUp end={10} delay={2} enableScrollSpy={true} scrollSpyOnce={true} />
            </div>
            <div className="counter-item-text">Тысяч Сотрудников</div>
          </div>
          <div className="counter-item">
            <div className="counter-item-value">
              <CountUp end={45} delay={2} enableScrollSpy={true} scrollSpyOnce={true} />
            </div>
            <div className="counter-item-text">СТРАН ЭКСПОРТА</div>
          </div>
          <div className="counter-item">
            <div className="counter-item-value">
              <CountUp end={12} delay={2} enableScrollSpy={true} scrollSpyOnce={true} />
            </div>
            <div className="counter-item-text">КРУПНЫХ ПРЕДПРИЯТИЙ ПО ВСЕМУ УЗБЕКИСТАНУ</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter