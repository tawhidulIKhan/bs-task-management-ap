import Logo from "../../components/logo/Logo";
import Menu from "../../components/menu/Menu";
import MenuProfile from "../../components/menuProfile/MenuProfile";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__left">
            <Logo />
          </div>
          <div className="header__right">
            <Menu />
            <MenuProfile />
          </div>
        </div>
      </div>
    </div>
  );
}
