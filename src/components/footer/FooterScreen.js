import React from 'react'
import fb from "../../images/fb.svg";
import twitter from"../../images/twitter.svg";
import insta from "../../images/instagram.svg";
const FooterScreen = () => {
    return (
        <footer className="footer">
            <section className="footer__container container">
                <img src={require("../../images/logo_1.png")} className="footer__logo" />

                <div className="footer__items">

                    <p className="footer__contact footer__contact--first">

                        <i className="fa-solid fa-location-dot"></i>
                        Nos ubicamos Siquirres, Limón, Costa Rica

                    </p>

                    <div className="footer__content">
                        <p className="footer_contact footer__contact--second">

                            <i className="fa-solid fa-phone"></i>
                            +506-8547-5830
                        </p>


                        <div className="footer__location">
                            <p className="footer_contact">

                                <i className="fa-solid fa-envelope"></i>
                                info@sigeclid.com
                            </p>

                        </div>
                    </div>

                    <nav className="footer__nav">
                        <a href="#3" className="footer__link">About Us</a>
                        <a href="#3" className="footer__link"> Jobs</a>
                    </nav>

                    <nav className="footer__nav">
                        <a href="#3" className="footer__link"> Terms</a>
                        <a href="#3" className="footer__link">Privacy</a>
                    </nav>

                    <div className="footer__social">

                        <a href="#3" className="footer__media"><img src={fb} alt="" /></a>
                        <a href="#3" className="footer__media"><img src={twitter} alt="" /></a>
                        <a href="#3" className="footer__media footer__media--last"><img src={insta} alt="" /></a>
                    </div>


                </div>
            </section>

        </footer>
    )
}

export default FooterScreen