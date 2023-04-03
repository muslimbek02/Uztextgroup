import Counter from '../components/Counter/Counter'
import Partners from '../components/Partners/Partners'
import Technologies from '../components/Technologies/Technologies'
import './about-page.css'
import i18n from '../Services/MultiLanguageComponent/i18n';


const AboutPage = () => {
  return (
    <>
      <div className="about-page-bg"></div>
      <Counter />
      <div className="about-company">
        <div className="container">
          <div className="heading-text">{i18n.Get("company.about.allTextTitle")}</div>
          <p className="about-company-text">
          {i18n.Get("company.about.allText")}
          </p>
        </div>
      </div>
      <Technologies />
      <Partners />

      {/*------------- Awards block start ---------- */}

      <div className="awards-wrapper">
        <div className="container">
          <div className="heading-text">{i18n.Get("conference.title")}</div>
          <div className="awards-block">
            <div className="awards-block-item">
              <div className="awards-block-year">2019</div>
              <div class="awards-block__list">
                <div class="awards-block__text">{i18n.Get("conference.conference1")}
                  <div class="awards-block__text-footer">"China International Trade Fair for Fibres and Yarns Spring Edition " (Yarn Expo)</div>
                </div>
                <div class="awards-block__text">{i18n.Get("conference.conference2")}
                  <div class="awards-block__text-footer">"UzTextile Expo 2019"</div>
                </div>
                <div class="awards-block__text">{i18n.Get("conference.conference3")}
                  <div class="awards-block__text-footer">«Made in Uzbekistan»</div>
                </div>
                <div class="awards-block__text">{i18n.Get("conference.conference4")}
                  <div class="awards-block__text-footer">«Heimtextile 2019»</div>
                </div>
              </div>
            </div>
            <div className="awards-block-item">
              <div className="awards-block-year">2018</div>
              <div class="awards-block__list">
                <div class="awards-block__text">{i18n.Get("conference.conference5")}
                  <div class="awards-block__text-footer">«Текстильлегпром»</div>
                </div>
                <div class="awards-block__text">{i18n.Get("conference.conference6")}
                  <div class="awards-block__text-footer">«CJF - Детская мода. Осень 2018»</div>
                </div>
                <div class="awards-block__text">{i18n.Get("conference.conference7")}
                  <div class="awards-block__text-footer">"Textile Expo Uzbekistan 2018"</div>
                </div>
                <div class="awards-block__text">{i18n.Get("conference.conference8")}
                  <div class="awards-block__text-footer">"Heimtextil 2018"</div>
                </div>
              </div>
            </div>
            <div className="awards-block-item">
              <div className="awards-block-year">2017</div>
              <div class="awards-block__list">
                <div class="awards-block__text">{i18n.Get("conference.conference9")}
                  <div class="awards-block__text-footer">"Intertextile Shanghai HomeTextiles"</div>
                </div>
                <div class="awards-block__text">{i18n.Get("conference.conference10")}
                  <div class="awards-block__text-footer">"Textile Expo Uzbekistan 2017"</div>
                </div>
                <div class="awards-block__text">{i18n.Get("conference.conference11")}
                  <div class="awards-block__text-footer">"Узбекистан – Таджикистан"</div>
                </div>
              </div>
            </div>
            <div className="awards-block-item">
              <div className="awards-block-year">2016</div>
              <div class="awards-block__list">
                <div class="awards-block__text">{i18n.Get("conference.conference12")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------- Awards block end ---------- */}

    </>
  )
}

export default AboutPage