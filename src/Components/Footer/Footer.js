import './Footer.css';
import Footerlogo from "../../assets/img/footer.png";
import {Link} from "react-router-dom";
function Footer(){
    const handleClick =() =>{
        window.scrollTo(0,0);
    }
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
                            <li><Link to='/courses' onClick={handleClick}>Our programe</Link></li>
                            <li><Link to='/services' onClick={handleClick}>Our plans</Link></li>
                            <li><Link>Become a member</Link></li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <h4 className="footer-title">
                            Quick links
                        </h4>
                        <ul className="footer-list">
                            <li><Link to='/aboutus' onClick={handleClick}>About us</Link></li>
                            <li><Link to='/contact' onClick={handleClick}>Contact us</Link></li>
                            <li><Link to='/supportus' >Support us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};
export default Footer;