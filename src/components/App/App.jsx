import { BrowserRouter,} from "react-router-dom"
import Header from "../Header/Header"
import { useState, useEffect } from 'react';
import VideoBox from "../VideoBox/VideoBox";
import AboutBox from "../AboutBox/AboutBox";
import PerNumbers from "../PerNumbers/PerNumbers";
import ProductsSlider from "../ProductsSlider/ProductsSlider";

const App = () => {
  const [offset, setOffset] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.pageYOffset>350){
        setIsVisible(true)
      } 
      else{
        setOffset(window.pageYOffset)
        setIsVisible(false)
      }
    })
  }, []);

  return (
    <BrowserRouter>
      <Header isVisible={isVisible} />
      <VideoBox offset={offset} isVisible={isVisible} />
      <AboutBox />
      <PerNumbers />
      <ProductsSlider />
    </BrowserRouter>
  )
}

export default App