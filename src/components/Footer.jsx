import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import "../assets/style/footer.css"
import image from "../assets/Images/cv-removebg-preview.png"

const Footer = () => {
  return (
    <footer>
      <div className="Linkdv">
        <div className="copy-right">© 2023 - CvGenerator</div>
        <a href="https://twitter.com">
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>
        <a href="https://facebook.com">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
        </a>
        <a href="https://Instagram.com">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </a>
        <a href="https://LinkedIn.com">
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
      </div>
      <div className="logodv">
        <img src={image} alt="" style={{ width: "25px", height: "25px" }} />
      </div>
    </footer>
  )
}

export default Footer
