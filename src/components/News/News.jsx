import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchService } from '../../Services/FetchService';
import Block from "../Block/block";
import './News.css';


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
                    <span className='news-title'>Yangiliklar</span>
                    <Link to="/news" className='all-article'>Barcha maqolalarni ko'rish</Link>
                </div>
            </div>
            <div className="news-card">
                <div className="container">
                    <div className="news-cards">
                        {
                            apiNews?.map(({ id, title, date }) => (
                                <div className="card-item" key={id}>
                                    <a href="#1">
                                        <img 
                                        src={`${FetchService.axios.defaults.baseURL}/uploads/${id}${localStorage.getItem("lang") ?? "uz"}.jpg`}
                                            alt=""
                                        />
                                        <div className='news-content'>
                                            <div className="news-footer">
                                                <span className="news-category">Yangiliklar</span>
                                                <span className="news-date">{new Date(date).toLocaleDateString()}</span>
                                            </div>
                                            <span className="post-title">
                                                {title}
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default News;