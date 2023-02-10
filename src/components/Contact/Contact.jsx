import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
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
          <div className="input-group">
            <div>
              <input type="text" placeholder="Tuliq ism sharif" />
              <p>Iltimos, to'liq ismingizni kiriting!</p>
            </div>
            <div>
              <input type="email" placeholder="Elektron pochta" />
              <p>Please enter your email!</p>
            </div>
          </div>
          <div className="input-group">
            <div>
              <input type="text" placeholder="Telefon raqam" />
              <p>Iltimos, telefon raqamingizni kiriting!</p>
            </div>
            <div>
              <input type="text" placeholder="Shahar" />
              <p>Iltimos, shahringizga kiring!</p>
            </div>
          </div>
          <div>
            <select>
              <option value="" selected="selected" disabled="disabled">
                Bo'limni tanlang
              </option>
              <option value="0">Маркетинговый отдел</option>
              <option value="1">Махровые изделия</option>
              <option value="2">Готовые трикотажные изделия</option>
              <option value="3">Чулочно-носочные изделия</option>
              <option value="4">Полотно</option>
              <option value="5">UZTEX PRO</option>
            </select>
            <p>Iltimos, bo'limni tanlang!</p>
          </div>
          <div>
            <div>
              <textarea
                name="sms"
                id="sms"
                placeholder="Sizning xatingiz"
              ></textarea>
              <p>Please enter your message!</p>
            </div>
            <button>
              Jo'natish <span className="bi bi-caret-right-fill"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
