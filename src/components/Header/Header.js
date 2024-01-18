import './Header.scss';
import logo from "../../../src/assets/images/Logo/BrainFlix-logo.svg";
import avatarImage from "../../../src/assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <section class="header">
        <img class="header__logo" src={logo} alt="BrainFlix Logo"></img>
        <div class="header__items">
          <div class="header__container">
            <input class="header__search" type="text" id="search-input" placeholder="Search"></input>
            <img class="header__profile" src={avatarImage} alt="Profile Picture" ></img>
          </div>
            <button class="header__button">UPLOAD</button>
            <img class="header__profile--tablet" src={avatarImage} alt="Profile Picture" ></img>
        </div>
    </section>
  );
}

export default Header;
