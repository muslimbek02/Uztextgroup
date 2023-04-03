import './PerNumbers.css'
import i18n from '../../Services/MultiLanguageComponent/i18n';

const PerNumbers = () => {
  return (
    <div className='per-numbers'>
      <div className="container">
        <h1 className="per-numbers-title">{i18n.Get("perNumber.perNumber")}</h1>
        <div className="per-numbers-inner">
          {
            [...i18n.Get("perNumbers")].map((item) => (
              <div className="per-numbers-item" key={item.text}>
                <h1 className="per-numbers-item-title">{item.number}</h1>
                <p className="per-numbers-item-text">{item.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PerNumbers