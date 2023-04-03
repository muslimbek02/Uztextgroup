import './jobs.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { FetchService } from '../../Services/FetchService';
import Block from "../Block/block";
import i18n from '../../Services/MultiLanguageComponent/i18n';

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
          <h2>{i18n.Get("job.vacancies")}</h2>
        </div>
        {
          jobs.length ? 
          <div className="jobs-card-list">
          {
            jobs.map(job => {
              return (<div className="jobs-card-item" key={job.id}>
                <h5 className='job-title'>{job.name}</h5>
                <p className='job-desc'>{job["description"]}</p>
                <div className='job-time'>
                  <span><b>{i18n.Get("application.time")}</b></span>
                  <p>{job["workTime"]}</p>
                </div>
                <div className='job-salary'>
                  <span><b>{i18n.Get("application.salary")}</b></span>
                  <p>{job["salary"]} {i18n.Get("job.sum")}</p>
                </div>
                <button className="job-btn" onClick={() => navigate('/job-details?d=' + encodeURI(JSON.stringify(job)))}>{i18n.Get("job.apply")}</button>
              </div>)
            })
          }
        </div>
        :
        <h1 style={{textAlign: 'center', margin: '100px'}}>Hozirda bo'sh ish o'rinlari yo'q!</h1>
        }
        
      </div>
    </div>
  )
}

export default Jobs