import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Header from "../Header/Header"
import { useState, useEffect } from 'react';
import Footer from "../Footer/Footer";
import NewsPage from "../../NewsPage/NewsPage";
import Main from "./Main";
import Contact from "../Contact/Contact";

const App = () => {
  const [offset, setOffset] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 350) {
        setIsVisible(true)
      }
      else {
        setOffset(window.pageYOffset)
        setIsVisible(false)
      }
    })
  }, []);

  return (
    <BrowserRouter>
      <Header isVisible={isVisible} />
      <Routes>
        <Route path="/" element={<Main offset={offset} isVisible={isVisible} />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App