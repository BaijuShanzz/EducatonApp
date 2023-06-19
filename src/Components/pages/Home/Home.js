import './Home.css';
import HomeImage from '../../../assets/img/meta.jpeg';
import {AiOutlineWhatsApp} from "react-icons/ai"
function Home () {
    return(
        <>
        <section>
            <div className="container">
                <div className="home-container">
                    <div className="home-content">
                        <h2 className='section-title'>Learn Everything For Free!!!!</h2>
                        <p>Lets take a big steps to forward to suceess</p>
                        <div className="home-buttons">
                            <button className="register-btn">
                                Get start
                            </button>
                            <button className='register-btn'>
                                Watch now
                            </button>
                        </div>
                    </div>
                    <div className="home-img">
                        <div className="home-img-wrapper">
                            <div className="box-01">
                                <div className="box-img">
                                    <img src={HomeImage} alt="" />
                                </div>
                            </div>
                            <div className="whatsapp-container">
                                <h5>500+ students</h5>
                                <AiOutlineWhatsApp color='green'/>
                            </div>
                            <div className="support">
                                <h5>Active support</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};

export default Home;