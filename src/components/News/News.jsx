import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchService } from '../../Services/FetchService';
import Loader from '../Loader/loader';
import './News.css';

const News = () => {
    const [news, setNews] = useState([]);
    console.log(news);
    return (
        <div className='news' id='news'>
            <Loader
                actionCallback={new Promise((res, rej) => {
                    FetchService
                        .GetAsync(`/${localStorage.getItem("lang") ?? "uz"}/api/news?size=3&page=1`)
                        .then(res)
                        .catch(rej);
                })}
                isBackground={false}
                setResultCallback={setNews}
            />
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
                            news?.map(({id, title,date}) => (
                                <div className="card-item" key={id}>
                                    <a href="#1">
                                        <img src="./images/news1.jpg" alt="" />
                                        <div className='news-content'>
                                            <div className="news-footer">
                                                <span className="news-category">Yangiliklar</span>
                                                <span className="news-date">{new Date(date)}</span>
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