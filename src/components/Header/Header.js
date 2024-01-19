import './Header.scss';
import logo from "../../../src/assets/images/Logo/BrainFlix-logo.svg";
import avatarImage from "../../../src/assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <section className ="header">
        <img className ="header__logo" src={logo} alt="BrainFlix Logo"></img>
        <div className ="header__items">
          <div className ="header__container">
            <input className ="header__search" type="text" id="search-input" placeholder="Search"></input>
            <img className ="header__profile" src={avatarImage} alt="Profile Picture" ></img>
          </div>
            <button className ="header__button">UPLOAD</button>
            <img className ="header__profile--tablet" src={avatarImage} alt="Profile Picture" ></img>
        </div>
    </section>
  );
}

export default Header;
