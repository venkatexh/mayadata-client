import Navbar from "../../components/navbar/navbar.component";
import "./about.styles.scss";
import { useSelector } from "react-redux";

const About = () => {
  const state = useSelector(({ navbarStatus }) => ({
    navbarStatus,
  }));

  return (
    <div className={"about-page"}>
      <Navbar />
      <div
        style={{ width: `${state.navbarStatus ? "96%" : "82%"}` }}
        className={"about-container"}
      >
        <div className={"banner"}>About Me</div>
        <div className={"my-details"}>
          <div className={"text"}>Name: Venkatesh Chakrabarty</div>
          <div className={"text"}>Roll: 1805357</div>
          <div className={"text"}>
            Github profile: <a href={"https://github.com/venkatexh"}>Visit</a>
          </div>
          <div className={"text"}>
            Skills: HTML, CSS, SASS, Bootstrap, ReactJS, Redux, Axios, Node.js,
            Express.js, Javascript, C/C++, MySQL, MongoDB, Jest, Git
          </div>
          <div className={"text gap"}>Projects:</div>
          <div className={"text"}>
            1. <a href={"https://goalkeep.netlify.app"}>GoalKeep</a> &nbsp;- An
            app for managing short term as well as long term tasks by setting
            goals.
          </div>
          <div className={"text"}>
            2. <a href={"https://www.cyanleaves.com"}>CyanLeaves.com</a>&nbsp;-
            Media website.
          </div>
          <div className={"text"}>
            3. <a href={"https://vista-c.netlify.app"}>Vista</a>&nbsp;- A single
            page ecommerce application.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
