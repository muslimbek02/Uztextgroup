import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { productsArr } from '../../data'
import { ReactComponent as Next } from './Icons/next-btn-img.svg'
import { ReactComponent as Prev } from './Icons/prev-btn-img.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ProductsSlider.css'
const ProductsSlider = () => {
  const [slideItem, setSlideItem] = useState(0);
  
  const increase = () => {
    if(slideItem < productsArr.length - 1){
      setSlideItem(prev => prev + 1)
    }
    else{
      setSlideItem(0)
    }
  }
  
  const decrease = () => {
    if(slideItem > 0){
      setSlideItem(prev => prev - 1)
    }
    else{
      setSlideItem(productsArr.length - 1)
    }
  }

  return (
    <div className='products' id='products'>
      <h2>Bizning ishlab chiqarish</h2>
      <div className="carousel-product">
        <button
          className="next-slide-btn"
          onClick={increase}
        >
          <Next />
        </button>
        <button
          className="prev-slide-btn"
          onClick={decrease}
        >
          <Prev />
        </button>
        <Carousel
          selectedItem={slideItem}
          showArrows={false}
          infiniteLoop={true}
          emulateTouch={true}>
          {
            productsArr.map(({ product, img }, idx) => (
              <div key={product}>
                <div className="slider-item">
                  <img src={`./images/${img}`} alt={product} />
                  <div className="slider-content">
                    <p className="slider-content-type">Mahsulotlar</p>
                    <h1 className="slider-content-title">{product}</h1>
                    <a href="/" className='slider-content-btn'>BATAFSIL MA'LUMOT</a>
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