import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setNavbarCollapsed } from "../../redux/actions/setNavbarCollapsed";
import { selectMenuItem } from "../../redux/actions/selectMenuItem";
import hamburger from "../../assets/images/hamburger.svg";
import home from "../../assets/images/home.svg";
import about from "../../assets/images/about.svg";
import "./navbar.styles.scss";

const Navbar = () => {
  const dispatch = useDispatch();

  const state = useSelector(({ menuItem, navbarStatus }) => ({
    menuItem,
    navbarStatus,
  }));

  const toggleNavbar = () => {
    dispatch(setNavbarCollapsed(state.navbarStatus));
  };

  const handleMenuClick = (e) => {
    let value = e.currentTarget.textContent;
    dispatch(selectMenuItem(value));
  };

  const componentToRender = () => {
    if (state.navbarStatus) {
      return (
        <div className={"navbar-collapsed"}>
          <div className={"navbar-header"}>
            <div className={"hamburger-container"} onClick={toggleNavbar}>
              <img className={"hamburger"} src={hamburger} alt={""} />
            </div>
          </div>
          <div className={"menu-collapsed"}>
            <img className={"menu-icon"} src={home} alt={""} />
            <img className={"menu-icon"} src={about} alt={""} />
          </div>
        </div>
      );
    } else {
      return (
        <div className={"navbar-expanded"}>
          <div className={"navbar-header"}>
            <div className={"hamburger-container"} onClick={toggleNavbar}>
              <img className={"hamburger"} src={hamburger} alt={""} />
            </div>
            <div className={"roll"}>1805357</div>
          </div>
          <div className={"navbar-menu"}>
            <Link
              to={"home"}
              className={`menu-item ${
                state.menuItem === "Home" ? "item-selected" : ""
              }`}
              onClick={handleMenuClick}
            >
              <img className={"menu-icon"} src={home} alt={""} />
              <div className={"menu-text"}>Home</div>
            </Link>
            <Link
              to={"about"}
              className={`menu-item ${
                state.menuItem === "About" ? "item-selected" : ""
              }`}
              onClick={handleMenuClick}
            >
              <img className={"menu-icon"} src={about} alt={""} />
              <div className={"menu-text"}>About</div>
            </Link>
          </div>
        </div>
      );
    }
  };

  return componentToRender();
};

export default Navbar;
