import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';
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
            <p>Предприятия UZTEX GROUP располагают лабораторно-испытательным оборудованием ведущих европейских производителей. Пряжа тестируется и испытывается на разрывные нагрузки на современном оборудовании фирмы USTER (Швейцария). При производстве и окрашивании полотна применяются самые современные испытательные технологии, позволяющие проводить тесты на цветоустойчивость при 50-ти кратной нагрузке, включающей стирку и глажку, а также испытывать продукцию на устойчивость к ультрафиолетовому излучению и износу. Несомненное качество пряжи подтверждено международными сертификатами: USTERIZED, Oeko–Tex standard 100, ISO 9001:2008.(Швейцария).
              Швейцарский институт HOHENSTEIN, после проведения технологического аудита, дал положительное заключение на продукцию UZTEX, и компания была присоединена к международному сообществу производителей, которые используют только экологичные и безопасные материалы, соответствующие высоким европейским требованиям, отраженным в стандарте OEKO-TEX STANDARD 100. Продукция предприятий UZTEX имеет сертификат этого стандарта 1 класса.</p>
          </div>
          <div className="quality-swiper">
            {/* <Swiper
              spaceBetween={30}
              slidesPerView={4}
              navigation={true}
              modules={[Navigation]}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
            </Swiper> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quality