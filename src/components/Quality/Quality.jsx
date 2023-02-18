import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';
import { GrNext, GrPrevious } from 'react-icons/gr'
import 'swiper/css';
import 'swiper/css/navigation'
import './quality.css'
const Quality = () => {
  return (
    <div className='quality-container'>
      <div className="quality-bg-content"></div>
      <div className="quality-body">
        <div className="container">
          <div className="quality-title">Sifat</div>
          <div className="quality-text">
            <p>
              Предприятия UZTEX GROUP располагают лабораторно-испытательным оборудованием ведущих европейских производителей. Пряжа тестируется и испытывается на разрывные нагрузки на современном оборудовании фирмы USTER (Швейцария). При производстве и окрашивании полотна применяются самые современные испытательные технологии, позволяющие проводить тесты на цветоустойчивость при 50-ти кратной нагрузке, включающей стирку и глажку, а также испытывать продукцию на устойчивость к ультрафиолетовому излучению и износу. Несомненное качество пряжи подтверждено международными сертификатами: USTERIZED, Oeko–Tex standard 100, ISO 9001:2008.(Швейцария).
              Швейцарский институт HOHENSTEIN, после проведения технологического аудита, дал положительное заключение на продукцию UZTEX, и компания была присоединена к международному сообществу производителей, которые используют только экологичные и безопасные материалы, соответствующие высоким европейским требованиям, отраженным в стандарте OEKO-TEX STANDARD 100. Продукция предприятий UZTEX имеет сертификат этого стандарта 1 класса.
            </p>
          </div>
          <div className="sertificates-title">SERTIFIKATLAR</div>
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