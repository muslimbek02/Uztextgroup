import VideoBox from "../VideoBox/VideoBox";
import AboutBox from "../AboutBox/AboutBox";
import PerNumbers from "../PerNumbers/PerNumbers";
import ProductsSlider from "../ProductsSlider/ProductsSlider";
import Technologies from "../Technologies/Technologies";
import Counter from "../Counter/Counter";
import Partners from "../Partners/Partners";
import News from "../News/News";
import Contact from "../Contact/Contact";

const Main = ({offset, isVisible}) => {
  return (
    <>
      <VideoBox offset={offset} isVisible={isVisible} />
      <AboutBox />
      <PerNumbers />
      <ProductsSlider />
      <Technologies />
      <Counter />
      <Partners />
      <News />
      <Contact />
    </>
  )
}

export default Main