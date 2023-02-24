import { Link } from 'react-router-dom'
import './newsPage.css'
import { AiOutlineRight } from 'react-icons/ai'
import { useState, useEffect } from "react";
import Block from "../components/Block/block";
import { FetchService } from '../Services/FetchService';
import i18n from '../Services/MultiLanguageComponent/i18n';

const NewsPage = () => {
  const [apiNews, setApiNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    FetchService
      .GetAsync(`/api/news`)
      .then(res => setApiNews(res.data))
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className='newspage-wrapper'>
      <Block state={isLoading} />
      <div className="header-back"></div>
      <div className="news-page-heading">
        <div className="container">
          <p className='news-heading-text'>{i18n.Get("news.lastNews")}</p>
          <div className="news-article-list">
            {
              apiNews.map((news, index) => (
                <div className="news-article-item" key={news.id}>
                  <Link to={`/news-detail/${encodeURI(JSON.stringify(news))}`} className='article-link'>
                    <div className="article-img-box">
                      <img
                        src={`${FetchService.axios.defaults.baseURL}/uploads/${news.id}${localStorage.getItem("lang") ?? "uz"}.jpg`}
                        alt={news.title} />
                    </div>
                    <div className="news-article-body">
                      <p className="article-date">{i18n.Get("header.menu.third")} <span>{new Date(news.date).toLocaleDateString()}</span></p>
                      <p className="article-title-text">
                        {news.title}
                      </p>
                      <p className="article-body-text">
                        {news.description}
                      </p>
                      <Link to={`/news-detail/${encodeURI(JSON.stringify(news))}`} className='article-more-btn'>
                        <span>BATAFSIL</span> <AiOutlineRight />
                      </Link>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPage