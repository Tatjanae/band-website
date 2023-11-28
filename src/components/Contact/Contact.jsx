import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import { FaFacebookMessenger } from "react-icons/fa";


const ContactOption = ({ icon, title, subtitle, link }) => (
  <a href={link} target='_blank' rel='noreferrer noopener' className="contact__option">
    {icon}
    <h4>{title}</h4>
    <h5>{subtitle}</h5>
    <span className="contact__option-link">Send us a message!</span>
  </a>
);

const Contact = () => {
  return (
    <section id='contact'>
      <h1>Book us!</h1>

      <div className="container contact__container">
        <div className="contact__options">
          <ContactOption
            icon={<HiOutlineMail className='contact__option-icon' />}
            title="Email"
            subtitle="thisisatestemail@outlook.com"
            link="mailto:thisisatestemail@outlook.com"
          />

          <ContactOption
            icon={<FaFacebookMessenger className='contact__option-icon' />}
            title="Facebook"
            subtitle="JellyFish Band"
            link="https://www.facebook.com/people/JellyFish/100063890506631/"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact