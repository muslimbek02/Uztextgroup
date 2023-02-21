import { useEffect, useState } from 'react';
import { FetchService } from '../../Services/FetchService';
import dot, { object } from "dot-object";
import { ToastContainer, toast } from "react-toastify";
import './job-details.css'
import { AxiosResponse, formToJSON } from "axios";


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
        toast("Arizangiz muvoffaqiyatli qabul qilindi!", { type: "success" });
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
      <div className="header-back"></div>
      <div className="container">
        <div className="job-details-box">
          <h2 className="job-details-title">{jobData["name"]}</h2>
          <p className="job-details-desc">{jobData["description"]}</p>
          <div className='job-details-time'>
            <span><b>Ish vaqti:</b></span>
            <p>{jobData["workTime"]}</p>
          </div>
          <div className='job-details-salary'>
            <span><b>Maosh:</b></span>
            <p>{jobData["salary"]}</p>
          </div>
        </div>
        <div className="job-details-form">
          <form id='jobForm' onSubmit={PostApplication}>
            <input type={"hidden"} value={jobData["id"]} name="jobId"></input>
            {/* <input type={"hidden"} name="createAddressDto" value={"parent"}></input> */}
            <div className="client-data-box">
              <div>
                <label htmlFor="first-name">Ismingizni kiriting</label>
                <input type="text" placeholder='Ismingiz' id='first-name' name='firstName' required />
              </div>
              <div>
                <label htmlFor="last-name">Familiyangizni kiriting</label>
                <input type="text" placeholder='Familiyangiz' id='last-name' name='lastName' required />
              </div>
              <div>
                <label htmlFor="phone-num">Telefon raqamingizni kiriting</label>
                <input type="tel" placeholder='+998939494411' id='phone-num' name='phoneNumber' required />
              </div>
              <div>
                <label htmlFor="email-data">Elektron pochta manzilingizni kiriting</label>
                <input type="email" placeholder='example@gmail.com' id='email-data' name='email' required />
              </div>
            </div>
            <div className="location-box">
              <div>
                <label htmlFor="">Mamlakat</label>
                <input type="text" placeholder='Mamlakat' name='createAddressDto.country' />
              </div>
              <div>
                <label htmlFor="">Viloyat</label>
                <input type="text" placeholder='Mamlakat' name='createAddressDto.region' />
              </div>
              <div>
                <label htmlFor="">Tuman</label>
                <input type="text" placeholder='Tuman' name='createAddressDto.district' />
              </div>
              <div>
                <label htmlFor="">Ko'cha</label>
                <input type="text" placeholder="Ko'cha" name='createAddressDto.street' />
              </div>
              <div>
                <label htmlFor="">Postal kodi</label>
                <input type="text" placeholder='30' name='createAddressDto.postalCode' />
              </div>
            </div>
            <label htmlFor='applicationMessage'>Xabar:</label>
            <textarea name='applicationMassage' id='applicationMessage'></textarea>
            <button type='submit' className='job-submit-btn'>Yuborish</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default JobDetails