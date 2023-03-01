import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import './NewsDetails.css'
import { useState, useEffect } from "react";
import Block from "../Block/block";
import { FetchService } from '../../Services/FetchService';
import i18n from '../../Services/MultiLanguageComponent/i18n';

const NewsDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  let { news } = useParams();
  news = JSON.parse(news);
  return (
    <div>
      <div className="header-back"></div>
      <Block state={isLoading} />
      <div className="news-img-box" style={{ backgroundImage: (`url(${`${FetchService.axios.defaults.baseURL}/uploads/${news.id}${localStorage.getItem("lang") ?? "uz"}.jpg`})`) }}></div>
      <div className="container">
        <p className="news-detail-date">
          <Link to='/news' className="news-detail-link">{i18n.Get("header.menu.third")}</Link>
          <span className="news-detail-date-text">{news.date}</span>
        </p>
        <h1 className="news-detail-title">{news.title}</h1>
        <p className="news-detail-body">{news.description}</p>
      </div>
    </div>
  )
}

export default NewsDetails