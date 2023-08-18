import './contactform.css'
import Button from '../Button/Button'
import {BiSolidMessageDetail ,BiLogoGmail ,BiSolidPhoneCall} from 'react-icons/bi'
import { useState } from 'react'


const Contactform = () => {

  const [name,setName] = useState("Name");
  const [email,setEmail] = useState("Email@abc.com");
  const [text,setText] = useState("Text");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log({name,email,text});
  }

  return (
    <div className='contactform'>
      <div className='left'>
        <div className=' upr-btn'>
          <Button  text="Via Text Support" icons={<BiSolidMessageDetail/>} />
          <Button text="Via Call" icons={<BiSolidPhoneCall fontSize="24px"/>}/>
        </div>
      <Button isOutline = {true} text="Via Mail Support" icons={<BiLogoGmail/>} />
      <form  onSubmit = {onSubmit}>
        <div className="form_control">
          <label htmlFor="name">Name</label>
          <input type="text" />
        </div>
        <div className="form_control">
          <label htmlFor="email">E-mail</label>
          <input type="email" />
        </div>

        <div className="form_control">
          <label htmlFor="message">Message</label>
          <textarea name=" text " rows="5" />
        </div>
      <div style={{display:"flex", justifyContent:"end"}}>
        <Button type="submit" text="Submit"  />
      </div>
      </form>
      </div>
      <div>
        <img src="/contact-removebg-preview.png" alt="contact.image" />
      </div>
    </div>
  )
}

export default Contactform;
