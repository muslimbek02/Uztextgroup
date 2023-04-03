import "./Contact.css";
import i18n from '../../Services/MultiLanguageComponent/i18n';

const Contact = () => {
  return (
    <div className="contact-wrapper" id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact-info">
            <h1>
              MChJ QK <span>"UZTEX GROUP"</span>
            </h1>
            <p className="contact-info-item">
            {i18n.Get("contact.address")} <br />
              {i18n.Get("contact.tel")}
              <br />
              <a href="/">+998 (70) 717-19-00</a> <br />
              <a href="/">+998 (70) 717-00-00</a> <br />
              <a href="/">+998 (70) 717-00-77</a> <br />
              {i18n.Get("contact.")} <br />
              <a href="/">marketing@uztex.uz</a>
            </p>
          </div>
          <div className="contact-form">
            <form action="#">
              <div className="input-wrapper">
                <div className="input-item-1">
                  <div>
                    <input type="text" placeholder={i18n.Get("contact.fullname")}/>
                    <p>Iltimos, to'liq ismingizni kiriting!</p>
                  </div>
                </div>
                <div className="input-item-2">
                  <div>
                    <input type="email" placeholder={i18n.Get("contact.email")} />
                    <p>Please enter your email!</p>
                  </div>
                </div>
                <div className="input-item-3">
                  <div>
                    <input type="text" placeholder={i18n.Get("contact.tel")} />
                    <p>Iltimos, telefon raqamingizni kiriting!</p>
                  </div>
                </div>
                <div className="input-item-4">
                  <div>
                    <input type="text" placeholder={i18n.Get("contact.city")} />
                    <p>Iltimos, shahringizga kiring!</p>
                  </div>
                </div>
                <div className="input-item-5">
                  <div>
                    <input list="bolimlar" placeholder={i18n.Get("contact.section.title")} />
                    <datalist id="bolimlar">
                      <option value={i18n.Get("contact.section.marketing")}/>
                      <option value={i18n.Get("contact.section.teri")}/>
                      <option value={i18n.Get("contact.section.trikotaj")}/>
                      <option value={i18n.Get("contact.section.paypoq")}/>
                      <option value={i18n.Get("contact.section.mato")}/>
                      <option value="UZTEX PRO" />
                      <option value={i18n.Get("contact.section.ip")}/>
                      <option value= {i18n.Get("contact.section.aksessuar")}/>
                    </datalist>
                    <p>Iltimos, bo'limni tanlang!</p>
                  </div>
                </div>
                <div className="input-item-6">
                  <div>
                    <textarea
                      name="sms"
                      id="sms"
                      placeholder={i18n.Get("contact.xat")}
                     />
                    <p>Please enter your message!</p>
                  </div>
                  <button type="submit">
                  {i18n.Get("contact.send")} <span className="bi bi-caret-right-fill"></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
