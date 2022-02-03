import React from 'react'
import logo from '../images/logo.svg'
import iconFacebook from '../images/icon-facebook.svg'
import iconTwitter from '../images/icon-twitter.svg'
import iconPinterest from '../images/icon-pinterest.svg'
import iconInstagram from '../images/icon-instagram.svg'
import FooterListCard from './footerListCard'
import './styles/footer.css'
const Footer = () => {
    return (
        <div className="footer flex-col">
            <div className="footer--header">
            <img src={logo} alt=""/>
            <div className="footer--iconBar flex-row">
                <img src={iconFacebook} alt=""/>
                <img src={iconTwitter} alt=""/>
                <img src={iconPinterest} alt=""/>
                <img src={iconInstagram} alt=""/>
            </div>
            </div>
            <div id="footer--line"></div>
            <div className="cards">
            <FooterListCard heading={"Our company"} list={["How we Work","Why Insure?","View Plans","Reviews"]}/>
            <FooterListCard heading={"Help me"} list={["FAQ","Terms of use","Privacy policy","Cookies"]}/>
            <FooterListCard heading={"Contact"} list={["Sales","Support","Live chat"]}/>
            <FooterListCard heading={"Others"} list={["Careers","Press","Licenses"]}/>
            </div>
        </div>
    )
}

export default Footer
