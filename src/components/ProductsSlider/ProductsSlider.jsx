import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { productsArr } from '../../data'
import { ReactComponent as Next } from './Icons/next-btn-img.svg'
import { ReactComponent as Prev } from './Icons/prev-btn-img.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ProductsSlider.css'
import i18n from '../../Services/MultiLanguageComponent/i18n';

const ProductsSlider = () => {

  return (
    <div className='products' id='products'>
      <h2>{i18n.Get("productsSlider.productsSlider")}</h2>
      <div className="carousel-product">
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          interval={5000}
          autoPlay={true}
          emulateTouch={true}
          showStatus={false}
          showThumbs={false}
          renderArrowNext={(clickHandler) => {
            return (
              <button
                className="next-slide-btn"
                onClick={clickHandler}
              >
                <Next />
              </button>
            )
          }}
          renderArrowPrev={(clickHandler) => {
            return (
              <button
                className="prev-slide-btn"
                onClick={clickHandler}
              >
                <Prev />
              </button>
            )
          }}
        >
          {
            [...i18n.Get("productsArr")].map(({ product, img }, idx) => (
              <div key={product}>
                <div className="slider-item">
                  <img src={`./images/${img}`} alt={product} />
                  <div className="slider-content">
                    <p className="slider-content-type">{i18n.Get("header.menu.second.first")}</p>
                    <h1 className="slider-content-title">{product}</h1>
                    <a href="/" className='slider-content-btn'>{i18n.Get("productsSlider.allInfo")}</a>
                  </div>
                </div>
              </div>
            ))
          }
        </Carousel>
      </div>

    </div>
  )
}

export default ProductsSlider