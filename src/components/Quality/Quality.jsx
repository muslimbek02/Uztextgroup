import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';
import { GrNext, GrPrevious } from 'react-icons/gr'
import 'swiper/css';
import 'swiper/css/navigation'
import './quality.css'
import i18n from '../../Services/MultiLanguageComponent/i18n';

const Quality = () => {
  return (
    <div className='quality-container'>
      <div className="quality-bg-content"></div>
      <div className="quality-body">
        <div className="container">
          <div className="quality-title">{i18n.Get("header.menu.second.third")}</div>
          <div className="quality-text">
            <p>
            {i18n.Get("quality.text")}
            </p>
          </div>
          <div className="sertificates-title">{i18n.Get("quality.certificate")}</div>
          <div className="quality-swiper">
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              navigation={
                {
                  nextEl: ".image-swiper-button-next",
                  prevEl: ".image-swiper-button-prev",
                  disabledClass: "swiper-button-disabled"
                }
              }
              modules={[Navigation]}
              breakpoints={
                {
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                  },
                  500: {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  708: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                  },
                  1120: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                  },
                }
              }
            >
              <button className='image-swiper-button-prev quality-btn-prev'>
                <GrPrevious />
              </button>
              <button className='image-swiper-button-next quality-btn-next'>
                <GrNext />
              </button>
              <SwiperSlide><img src="./images/sertificates/sertificate1.jpg" alt="sertificate" /></SwiperSlide>
              <SwiperSlide><img src="./images/sertificates/sertificate2.jpg" alt="sertificate" /></SwiperSlide>
              <SwiperSlide><img src="./images/sertificates/sertificate3.jpg" alt="sertificate" /></SwiperSlide>
              <SwiperSlide><img src="./images/sertificates/sertificate4.jpg" alt="sertificate" /></SwiperSlide>
              <SwiperSlide><img src="./images/sertificates/sertificate5.jpg" alt="sertificate" /></SwiperSlide>
              <SwiperSlide><img src="./images/sertificates/sertificate6.jpg" alt="sertificate" /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quality