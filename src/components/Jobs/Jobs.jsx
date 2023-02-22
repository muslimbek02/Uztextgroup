import './jobs.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { FetchService } from '../../Services/FetchService';
import Block from "../Block/block";
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    FetchService.GetAsync("/api/job")
      .then(res => { setJobs(res.data) })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, [])

  return (
    <div className='jobs-wrapper'>
      <Block state={isLoading} />
      <div className="header-back"></div>
      <div className="container">
        <div className="jobs-heading-text">
          <h2>Bo'sh ish o'rinlari</h2>
        </div>
        <div className="jobs-card-list">
          {
            jobs.map(job => {
              return (<div className="jobs-card-item" key={job.id}>
                <h5 className='job-title'>{job.name}</h5>
                <p className='job-desc'>{job["description"]}</p>
                <div className='job-time'>
                  <span><b>Ish vaqti:</b></span>
                  <p>{job["workTime"]}</p>
                </div>
                <div className='job-salary'>
                  <span><b>Maosh</b></span>
                  <p>{job["salary"]} so'm</p>
                </div>
                <button className="job-btn" onClick={() => navigate('/job-details?d=' + encodeURI(JSON.stringify(job)))}>Murojaat qilish</button>
              </div>)
            })
          }
          <div className="jobs-card-item">
            <h5 className='job-title'>Job title</h5>
            <p className='job-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.hfddddddd Perspiciatis impedit earum obcaecati praesentium minus mollitia.</p>
            <div className='job-time'>
              <span><b>Ish vaqti:</b></span>
              <p>9:00 dan 18:00 gacha</p>
            </div>
            <div className='job-salary'>
              <span><b>Maosh</b></span>
              <p>3 000 000 so'm</p>
            </div>
            <button className="job-btn">Murojaat qilish</button>
          </div>
          <div className="jobs-card-item">
            <h5 className='job-title'>Job title</h5>
            <p className='job-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.hfddddddd Perspiciatis impedit earum obcaecati praesentium minus mollitia.</p>
            <div className='job-time'>
              <span><b>Ish vaqti:</b></span>
              <p>9:00 dan 18:00 gacha</p>
            </div>
            <div className='job-salary'>
              <span><b>Maosh</b></span>
              <p>3 000 000 so'm</p>
            </div>
            <button className="job-btn">Murojaat qilish</button>
          </div>
          <div className="jobs-card-item">
            <h5 className='job-title'>Job title</h5>
            <p className='job-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.hfddddddd Perspiciatis impedit earum obcaecati praesentium minus mollitia.</p>
            <div className='job-time'>
              <span><b>Ish vaqti:</b></span>
              <p>9:00 dan 18:00 gacha</p>
            </div>
            <div className='job-salary'>
              <span><b>Maosh</b></span>
              <p>3 000 000 so'm</p>
            </div>
            <button className="job-btn">Murojaat qilish</button>
          </div>
          <div className="jobs-card-item">
            <h5 className='job-title'>Job title</h5>
            <p className='job-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.hfddddddd Perspiciatis impedit earum obcaecati praesentium minus mollitia.</p>
            <div className='job-time'>
              <span><b>Ish vaqti:</b></span>
              <p>9:00 dan 18:00 gacha</p>
            </div>
            <div className='job-salary'>
              <span><b>Maosh</b></span>
              <p>3 000 000 so'm</p>
            </div>
            <button className="job-btn">Murojaat qilish</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs