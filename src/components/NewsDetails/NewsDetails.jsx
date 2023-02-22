import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import './news-details.css'
import { articleList } from "../../NewsPage/data";
const NewsDetails = () => {
  const {index} = useParams();
  const {img, title, body, date} = articleList[index - 1]
  return (
    <div>
      <div className="header-back"></div>
      <div className="news-img-box" style={{backgroundImage: `url(${img})`}}></div>
      <div className="container">
        <p className="news-detail-date">
          <Link to='/news' className="news-detail-link">Yangiliklar</Link>
          <span className="news-detail-date-text">{date}</span>
        </p>
        <h1 className="news-detail-title">{title}</h1>
        <p className="news-detail-body">{body}</p>
      </div>
    </div>
  )
}

export default NewsDetails