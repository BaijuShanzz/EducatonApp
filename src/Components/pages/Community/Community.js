import "./Community.css";
import Theme from "../../../assets/img/tc.png";
function Community (){
    return(
        <>
        <div className="container">
            <div className="start-wrapper">
                <div className="start-img">
                    <img src={Theme} alt="" />
                </div>
                <div className="start-content">
                    <h2 className="section-title">
                        Join our Free Tech Community
                    </h2>
                    <p>Unlock the power of knowledge and innovation by joining our vibrant and free whataApp tech community</p>
                    <button className="register-btn">Join now</button>
                </div>
            </div>
        </div>
        </>
    );
};
export default Community;