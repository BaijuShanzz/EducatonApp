import "./Course.css";
import ai from "../../../assets/img/ai.png";
import sd from "../../../assets/img/sd.png";
import dg from "../../../assets/img/dg.png";
import hacker from "../../../assets/img/hacking.png";
function Course() {
  const courseData = [
    {
      title: "Ai Development ",
      description: "master in Ai",
      img: ai,
    },
    {
      title: "Ai Development ",
      description: "master in Ai",
      img: sd,
    },
    {
      title: "Ai Development ",
      description: "master in Ai",
      img: dg,
    },
    {
      title: "Ai Development ",
      description: "master in Ai",
      img: hacker,
    },
  ];
  return (
    <>
      <div className="container course-container">
        <div className="course-top">
          <h2 className="section-title">Our Free Courses</h2>
          <p>lorim ipsom is helo lfkj fa ifj ek fa </p>
          <div className="course-wrapper">
            {courseData.map((course, index) => (
              <div className="course-item">
                <span className="course-icon">
                  <img src={course.img} alt="" />
                </span>
                <div className="corse-content">
                  <h4>{course.title}</h4>
                  <p>{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Course;
