import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchService } from '../../Services/FetchService';
import Block from "../Block/block";
import './News.css';
import i18n from '../../Services/MultiLanguageComponent/i18n';

const News = () => {
    const [apiNews, setApiNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        FetchService
            .GetAsync(`/api/news?size=3&page=1`)
            .then(res => setApiNews(res.data))
            .catch(console.log)
            .finally(() => setIsLoading(false));
    }, []);
    return (
        <div className='news' id='news'>
            <Block state={isLoading} />
            <div className="container">
                <div className="news-top">
                    <span className='news-title'>{i18n.Get("header.menu.third")}</span>
                    <Link to="/news" className='all-article'>{i18n.Get("news.allNews")}</Link>
                </div>
            </div>
            <div className="news-card">
                <div className="container">
                    {
                        apiNews.length ? 
                        <div className="news-cards">
                        {
                            apiNews?.map((news) => (
                                <div className="card-item" key={news.id}>
                                    <Link to={`news-detail/${encodeURI(JSON.stringify(news))}`}>
                                        <img
                                            src={`${FetchService.axios.defaults.baseURL}/uploads/${news.id}${localStorage.getItem("lang") ?? "uz"}.jpg`}
                                            alt=""
                                        />
                                        <div className='news-content'>
                                            <div className="news-footer">
                                                <span className="news-category">{i18n.Get("header.menu.third")}</span>
                                                <span className="news-date">{new Date(news.date).toLocaleDateString()}</span>
                                            </div>
                                            <span className="post-title">
                                                {news.title}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    : <h1 style={{textAlign: 'center'}}>Yangiliklar topilmadi!</h1>
                    }
                    
                </div>
            </div>
        </div >
    )
}
export default News;