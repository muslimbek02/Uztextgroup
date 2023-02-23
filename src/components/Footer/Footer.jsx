import './Footer.css';
import i18n from '../../Services/MultiLanguageComponent/i18n';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-top">
                <div className="footer-item">
                    <h3 className="footer-head">{i18n.Get("footer.navigation")}</h3>
                    <ul>
                        <li><a href="/">{i18n.Get("header.menu.first")}</a></li>
                        <li><a href="/">{i18n.Get("header.menu.third")}</a></li>
                        <li><a href="/">{i18n.Get("header.menu.second.company")}</a></li>
                        <li><a href="/">{i18n.Get("header.menu.fourth")}</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h3 className="footer-head">{i18n.Get("footer.making.title")}</h3>
                    <ul>
                        <li><a href="/">{i18n.Get("contact.section.ip")}</a></li>
                        <li><a href="/">{i18n.Get("contact.section.mato")}</a></li>
                        <li><a href="/">{i18n.Get("contact.section.teri")}</a></li>
                        <li><a href="/">{i18n.Get("contact.section.paypoq")}</a></li>
                        <li><a href="/">{i18n.Get("contact.section.trikotaj")}</a></li>
                        <li><a href="/">{i18n.Get("contact.section.aksessuar")}</a></li>
                        <li><a href="/">{i18n.Get("footer.making.UzExPro")}</a></li>
                        <li><a href="/">{i18n.Get("footer.making.qop")}</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h3 className="footer-head">{i18n.Get("header.menu.fourth")}</h3>
                    <p>
                        {i18n.Get("contact.address")}
                    </p>
                    <p>
                        Tel:<br />
                        <a href="/">+998 (70) 717-19-00</a> <br />
                        <a href="/">+998 (70) 717-00-00</a> <br />
                        <a href="/">+998 (70) 717-00-77</a> <br />
                        {i18n.Get("contact.email")} : <br />
                        <a href="/">marketing@uztex.uz</a>
                    </p>
                </div>
                <div className="footer-item">
                    <h3 className="footer-head">{i18n.Get("footer.information.title")}</h3>
                    <p>{i18n.Get("footer.information.message")}</p>
                    <div>
                        <input type="text" placeholder={i18n.Get("contact.email")}/>
                        <button className="footer-btn">{i18n.Get("footer.information.subscribe")}</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2009-2022 <span>UZTEX GROUP</span>. All Rights Reserved. Design by <span>Muslimbek & Rustamjon</span></p>
                <div className="footer-icons">
                    <a href="/" className="bi bi-facebook"></a>
                    <a href="/" className="bi bi-instagram"></a>
                    <a href="/" className="bi bi-twitter"></a>
                    <a href="/" className="bi bi-linkedin"></a>
                </div>
            </div>
        </div>
    )
}
export default Footer;