import { useState } from 'react';
import { FetchService } from '../../Services/FetchService';
import dot from "dot-object";
import { ToastContainer, toast } from "react-toastify";
import './job-details.css'
import Block from '../Block/block';
import i18n from '../../Services/MultiLanguageComponent/i18n';

const JobDetails = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const encodedData = searchParams.get("d");
  const jobData = JSON.parse(encodedData);
  const [isLoading, setIsLoading] = useState(false);
  const PostApplication = (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    let form = ev.target;
    const formData = new FormData(form);
    const postData = dot.object(Object.fromEntries(formData.entries()));
    FetchService.PostAsync("/api/application/", postData)
      .then(res => {
        toast(i18n.Get("application.checkApplication"), { type: "success" });
        form.reset();
      })
      .catch(err => {

        if (err instanceof Error)
          toast(err.message, { type: "error" });
        let msg = `${err.status} - ${err.statusText}`;
        const errorMsgs = Object.keys(err.data?.errors)?.map((x, i) => {
          return `${i + 1}. ` + err.data?.errors[x][0];

        }).join("\n");
        toast(`${msg}\n${errorMsgs}`, { type: "error", style: { whiteSpace: "pre-wrap" } });
      })
      .finally(() => setIsLoading(false));
  }
  return (
    <div className="job-details-wrapper">
      <Block state={isLoading} />
      <div className="header-back"></div>
      <div className="container">
        <div className="job-details-box">
          <h2 className="job-details-title">{jobData["name"]}</h2>
          <p className="job-details-desc">{jobData["description"]}</p>
          <div className='job-details-time'>
            <span><b>{i18n.Get("application.time")}</b></span>
            <p>{jobData["workTime"]}</p>
          </div>
          <div className='job-details-salary'>
            <span><b>{i18n.Get("application.salary")}</b></span>
            <p>{jobData["salary"]}</p>
          </div>
        </div>
        <div className="job-details-form">
          <form id='jobForm' onSubmit={PostApplication}>
            <input type={"hidden"} value={jobData["id"]} name="jobId"></input>
            {/* <input type={"hidden"} name="createAddressDto" value={"parent"}></input> */}
            <div className="client-data-box">
              <div>
                <label htmlFor="first-name">{i18n.Get('application.name')}</label>
                <input type="text" placeholder={i18n.Get('application.name')} id='first-name' name='firstName' required />
              </div>
              <div>
                <label htmlFor="last-name">{i18n.Get('application.lastName')}</label>
                <input type="text" placeholder={i18n.Get('application.lastName')} id='last-name' name='lastName' required />
              </div>
              <div>
                <label htmlFor="phone-num">{i18n.Get('contact.tel')}</label>
                <input type="tel" placeholder='+998939494411' id='phone-num' name='phoneNumber' required />
              </div>
              <div>
                <label htmlFor="email-data">{i18n.Get('contact.email')}</label>
                <input type="email" placeholder='example@gmail.com' id='email-data' name='email' required />
              </div>
            </div>
            <div className="location-box">
              <div>
                <label htmlFor="">{i18n.Get('application.country')}</label>
                <input type="text" placeholder={i18n.Get('application.country')} name='createAddressDto.country' />
              </div>
              <div>
                <label htmlFor="">{i18n.Get('application.region')}</label>
                <input type="text" placeholder={i18n.Get('application.region')} name='createAddressDto.region' />
              </div>
              <div>
                <label htmlFor="">{i18n.Get('application.district')}</label>
                <input type="text" placeholder={i18n.Get('application.district')} name='createAddressDto.district' />
              </div>
              <div>
                <label htmlFor="">{i18n.Get('application.street')}</label>
                <input type="text" placeholder={i18n.Get('application.street')} name='createAddressDto.street' />
              </div>
              <div>
                <label htmlFor="">{i18n.Get('application.code')}</label>
                <input type="number" placeholder='30' name='createAddressDto.postalCode' />
              </div>
            </div>
            <div className="app-message-box">
              <label htmlFor='applicationMessage'>{i18n.Get('application.message')}</label>
              <textarea placeholder={i18n.Get('application.message')} rows={"5"} name='applicationMassage' id='applicationMessage'></textarea>
            </div>
            <button type='submit' className='job-submit-btn'>{i18n.Get('contact.send')}</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default JobDetails