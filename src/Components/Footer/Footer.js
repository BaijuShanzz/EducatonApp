import './Footer.css';
import Footerlogo from "../../assets/img/footer.png"
function Footer(){
    return(
        <>
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-box">
                        <div className="footer-logo">
                            <img src={Footerlogo} alt="" />
                            <h4 className='footer-title'>EduApp</h4>
                        </div>
                        <p className='footer-description'>this is a educational app for supporting students to choose theire dream course</p>
                    </div>
                    <div className="footer-box">
                        <h4 className="footer-title">Company</h4>
                        <ul className="footer-list">
                            <li><a href="">Our programe</a></li>
                            <li><a href="">Our plans</a></li>
                            <li><a href="">Become a member</a></li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <h4 className="footer-title">
                            Quick links
                        </h4>
                        <ul className="footer-list">
                            <li><a href="">About us</a></li>
                            <li><a href="">Contact us</a></li>
                            <li><a href="">Support us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};
export default Footer;