import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-top">
                <div className="footer-item">
                    <h3 className="footer-head">Navigatsiya</h3>
                    <ul>
                        <li><a href="/">Asosiy</a></li>
                        <li><a href="/">Yangiliklar</a></li>
                        <li><a href="/">Kompaniya haqida</a></li>
                        <li><a href="/">Aloqa</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h3 className="footer-head">Ishlab chiqarish</h3>
                    <ul>
                        <li><a href="/">Ip</a></li>
                        <li><a href="/">Mato</a></li>
                        <li><a href="/">Sochiq Mahsulotlari</a></li>
                        <li><a href="/">Paypoq</a></li>
                        <li><a href="/">Tayyor Trikotaj Mahsulotlari</a></li>
                        <li><a href="/">Aksessuarlar</a></li>
                        <li><a href="/">"UZTEXPRO" dasturi</a></li>
                        <li><a href="/">Polipropilen qoplari</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h3 className="footer-head">Aloqa</h3>
                    <p>
                        O'zbekiston Respublikasi, Toshkent viloyati, 
                        Chirchiq shahri,
                        Yumalak posyolkasi, 
                        ko'ch. V. Qodirov, 207 y
                    </p>
                    <p>
                        Tel:<br />
                        <a href="/">+998 (70) 717-19-00</a> <br />
                        <a href="/">+998 (70) 717-00-00</a> <br />
                        <a href="/">+998 (70) 717-00-77</a> <br />
                        E-mail: <br />
                        <a href="/">marketing@uztex.uz</a>
                    </p>
                </div>
                <div className="footer-item">
                    <h3 className="footer-head">Axborot byulleteni</h3>
                    <p>Xabar yuborish uchun elektron pochta manzilingizni kiriting.</p>
                    <div>
                        <input type="text" placeholder="E-mail kiriting..."/>
                        <button className="footer-btn">Obuna Bo'lish</button>
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