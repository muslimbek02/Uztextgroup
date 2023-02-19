import './job-details.css'



const JobDetails = () => {
  return (
    <div className="job-details-wrapper">
      <div className="header-back"></div>
      <div className="container">
        <div className="job-details-box">
          <h2 className="job-details-title">Job title</h2>
          <p className="job-details-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nostrum magni perspiciatis similique obcaecati? Eaque incidunt officia ipsa cumque quod.</p>
          <div className='job-details-time'>
            <span><b>Ish vaqti:</b></span>
            <p>9:00 dan 18:00 gacha</p>
          </div>
          <div className='job-details-salary'>
            <span><b>Maosh:</b></span>
            <p>3 000 000 so'm</p>
          </div>
        </div>
        <div className="job-details-form">
          <form action="#">
            <div className="client-data-box">
              <div>
                <label htmlFor="first-name">Ismingizni kiriting</label>
                <input type="text" placeholder='Ismingiz' id='first-name' />
              </div>
              <div>
                <label htmlFor="last-name">Familiyangizni kiriting</label>
                <input type="text" placeholder='Familiyangiz' id='last-name' />
              </div>
              <div>
                <label htmlFor="phone-num">Telefon raqamingizni kiriting</label>
                <input type="tel" placeholder='+998939494411' id='phone-num' />
              </div>
              <div>
                <label htmlFor="email-data">Elektron pochta manzilingizni kiriting</label>
                <input type="email" placeholder='example@gmail.com' id='email-data' />
              </div>
            </div>
            <div className="location-box">
              <div>
                <label htmlFor="">Mamlakat</label>
                <input type="text" placeholder='Mamlakat' />
              </div>
              <div>
                <label htmlFor="">Viloyat</label>
                <input type="text" placeholder='Mamlakat' />
              </div>
              <div>
                <label htmlFor="">Tuman</label>
                <input type="text" placeholder='Tuman' />
              </div>
              <div>
                <label htmlFor="">Ko'cha</label>
                <input type="text" placeholder="Ko'cha" />
              </div>
              <div>
                <label htmlFor="">Uy raqami</label>
                <input type="text" placeholder='30' />
              </div>
            </div>
            <button type='submit' className='job-submit-btn'>Yuborish</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default JobDetails