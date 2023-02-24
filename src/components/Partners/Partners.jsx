import './partners.css'
import i18n from '../../Services/MultiLanguageComponent/i18n';

const Partners = () => {
  return (
    <>
      <div className="container">
        <h3 className="heading-text">{i18n.Get("partner.partner")}</h3>
      </div>
      <div className="clients">
        <div className="container">
          <div className='partners'>
            <div className="partners-inner">
              <div className="img-box">
                <img src="./images/partners-img/img1.png" alt="img" />
              </div>
              <div className="img-box">
                <img src="./images/partners-img/img2.png" alt="img" />
              </div>
              <div className="img-box">
                <img src="./images/partners-img/img3.png" alt="img" />
              </div>
              <div className="img-box">
                <img src="./images/partners-img/img4.png" alt="img" />
              </div>
              <div className="img-box">
                <img src="./images/partners-img/img5.png" alt="img" />
              </div>
              <div className="img-box">
                <img src="./images/partners-img/img1.png" alt="img" />
              </div>
              <div className="img-box">
                <img src="./images/partners-img/img2.png" alt="img" />
              </div>
              <div className="img-box">
                <img src="./images/partners-img/img3.png" alt="img" />
              </div>
              <div className="img-box">
                <img src="./images/partners-img/img4.png" alt="img" />
              </div>
              <div className="img-box">
                <img src="./images/partners-img/img5.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partners