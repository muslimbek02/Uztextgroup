import { Link } from 'react-router-dom'
import './newsPage.css'
import { AiOutlineRight } from 'react-icons/ai'
import { articleList } from './data'
const NewsPage = () => {

  return (
    <div className='newspage-wrapper'>
      <div className="header-back"></div>
      <div className="news-page-heading">
        <div className="container">
          <p className='news-heading-text'>So'ngi yangiliklar</p>
          <div className="news-article-list">
            {
              articleList.map(({img, title, date, body})=>(
                <div className="news-article-item" key={title}>
                  <Link to='/' className='article-link'>
                    <div className="article-img-box">
                      <img src={img} alt={title} />
                    </div>
                    <div className="news-article-body">
                      <p className="article-date">Yangiliklar <span>{date}</span></p>
                      <p className="article-title-text">
                        {title}
                      </p>
                      <p className="article-body-text">
                        {body}
                      </p>
                      <Link to='/' className='article-more-btn'>
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