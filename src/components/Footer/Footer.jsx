import PLACEHOLDER from '../../Images/logo-no-background.png'
import { FaFacebookF } from 'react-icons/fa'
import { FaYoutube } from "react-icons/fa";
import './Footer.css'



const Footer = () => {
    const today = new Date();

  return (
    <footer>
        <div className="container footer_container">
            <article>
                <a href="#about" className="logo_footer">
                    <img src={PLACEHOLDER} alt="JellyFish Band Logo" />
                </a>
                <div className="footer_socials">
                    <a href="https://www.facebook.com/people/JellyFish/100063890506631/" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="https://www.youtube.com/@jellyfish_band" target="_blank" rel='noreferrer noopener'><FaYoutube/></a>
                </div>
            </article> 
        </div>

        <div className="footer_copyright">
            <small>{today.getFullYear()}, Made by <a href="https://tatjanabauer.com" target="_blank" rel="noreferrer noopener">Tatjana Bauer</a> &copy; All Rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer