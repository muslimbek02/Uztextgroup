import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import './NewsDetails.css'
import { articleList } from "../../NewsPage/data";
import { useState, useEffect } from "react";
import Block from "../Block/block";
import { FetchService } from '../../Services/FetchService';
const NewsDetails = () => {
    const [apiNews, setApiNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams();
    useEffect(() => {
      setIsLoading(true);
      FetchService
        .GetAsync(`/api/news/id: Guid?newsId=b443f38d-a002-4681-9bf0-0ac8dd9bfb8a`)
        .then(res => setApiNews(res.data))
        .catch(console.log)
        .finally(() => setIsLoading(false));
    }, []);
  return (
    <div>
      <div className="header-back"></div>
      <Block state={isLoading} />
      <div className="news-img-box" style={{backgroundImage: (`url(${`${FetchService.axios.defaults.baseURL}/uploads/${id}${localStorage.getItem("lang") ?? "uz"}.jpg`})`)}}></div>
      <div className="container">
        <p className="news-detail-date">
          <Link to='/news' className="news-detail-link">Yangiliklar</Link>
          <span className="news-detail-date-text">{apiNews.date}</span>
        </p>
        <h1 className="news-detail-title">{apiNews.title}</h1>
        <p className="news-detail-body">{apiNews.description}</p>
      </div>
    </div>
  )
}

export default NewsDetails