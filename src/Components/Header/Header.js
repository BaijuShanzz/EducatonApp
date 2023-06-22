import "./Header.css"
import logo from "../../assets/img/education-logo.png";
import {Link} from "react-router-dom"
function Header() {
  const navTitles = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/courses",
      display: "Course",
    },
    {
      path: "/services",
      display: "Service",
    },
    {
      path: "/aboutus",
      display: "About us",
    },
    {
      path: "/contact",
      display: "Contact",
    },
  ];

  return (
    <>
      <header className="header">
       <div className="container">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-img">
              <img src={logo} alt="" />
            </div>
            <h2 className="logo-title">EduApp</h2>
          </div>
          <div className="navigation">
            <ul className="menu">
              {
                navTitles.map((item)=>(
                  <li className="menu-item"><Link to={item.path}>{item.display}</Link></li>
                ))
              }
            </ul>
          </div>
        </div>
       </div>
      </header>
    </>
  );
};

export default Header;
