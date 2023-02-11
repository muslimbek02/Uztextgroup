import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="container">
        <div className="contact">
          <div className="contact-info">
            <h1>
              MChJ QK <span>"UZTEX GROUP"</span>
            </h1>
            <p className="contact-info-item">
              O'zbekiston Respublikasi, Toshkent viloyati, Chirchiq shahri, Yumalak
              posyolkasi, ko'ch. V. Qodirov, 207 y <br />
              Tel:
              <br />
              <a href="/">+998 (70) 717-19-00</a> <br />
              <a href="/">+998 (70) 717-00-00</a> <br />
              <a href="/">+998 (70) 717-00-77</a> <br />
              E-mail: <br />
              <a href="/">marketing@uztex.uz</a>
            </p>
          </div>
          <div className="contact-form">
            <form action="#">
              <div className="input-wrapper">
                <div className="input-item-1">
                  <div>
                    <input type="text" placeholder="Tuliq ism sharif" />
                    <p>Iltimos, to'liq ismingizni kiriting!</p>
                  </div>
                </div>
                <div className="input-item-2">
                  <div>
                    <input type="email" placeholder="Elektron pochta" />
                    <p>Please enter your email!</p>
                  </div>
                </div>
                <div className="input-item-3">
                  <div>
                    <input type="text" placeholder="Telefon raqam" />
                    <p>Iltimos, telefon raqamingizni kiriting!</p>
                  </div>
                </div>
                <div className="input-item-4">
                  <div>
                    <input type="text" placeholder="Shahar" />
                    <p>Iltimos, shahringizga kiring!</p>
                  </div>
                </div>
                <div className="input-item-5">
                  <div>
                    <input list="bolimlar" placeholder="Bo'limni tanlang" />
                    <datalist id="bolimlar">
                      <option value="Маркетинговый отдел" />
                      <option value="Махровые изделия" />
                      <option value="Готовые трикотажные изделия" />
                      <option value="Чулочно-носочные изделия" />
                      <option value="Полотно" />
                      <option value="UZTEX PRO" />
                      <option value="Пряжа" />
                      <option value="Аксессуары" />
                    </datalist>
                    <p>Iltimos, bo'limni tanlang!</p>
                  </div>
                </div>
                <div className="input-item-6">
                  <div>
                    <textarea
                      name="sms"
                      id="sms"
                      placeholder="Sizning xatingiz"
                     />
                    <p>Please enter your message!</p>
                  </div>
                  <button type="submit">
                    Jo'natish <span className="bi bi-caret-right-fill"></span>
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
