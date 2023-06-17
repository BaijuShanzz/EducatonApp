import "./Header.css"
import logo from "../../assets/img/education-logo.png"
function Header() {
  const navTitles = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/",
      display: "About",
    },
    {
      path: "/",
      display: "Course",
    },
    {
      path: "/",
      display: "Footer",
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
                  <li className="menu-item">{item.display}</li>
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
