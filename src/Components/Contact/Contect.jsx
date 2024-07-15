import React from 'react';
import  './Contect.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';



const Contact=()=>{

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "55d8259e-3886-4b70-b2d0-ac3db39ab353");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };



  return(
    <div>
        <div  id='conect' className="contect">
            <div className="contect-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contect-section">
                <div className="contect-left">
                    <h1>Let's talk</h1>
                    <p> I am actively seeking new job opportunities and would love to explore roles that align with my skills and experience. If you have a position available that could benefit from please feel free to reach out.</p>
                    <div className="conect-details">
                        <div className="conect-detail">
                            <img src={mail_icon} alt="" /><p>prachisharma.ps01@gmail.com</p>
                        </div>
                        <div className="conect-detail">
                        <img src={call_icon} alt="" /><p>+91 9068674929</p>
                        </div>
                        <div className="conect-detail">
                        <img src={location_icon} alt="" /><p>Noida, Uttar Pradesh </p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contect-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name="name" />
                    <label htmlFor="">Youe Email</label>
                    <input type="email" placeholder='Enter your email' name="email" />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows='8'>Enter your message</textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    </div>
  )

}

export default Contact