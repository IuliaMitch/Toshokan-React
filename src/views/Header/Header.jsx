import logo from "../../assets/icons/matry.gif";
import cart from "../../assets/icons/cart.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="home-header Header">
      <div className="row">
        <div className="header-logo Logo">
          <img
            src={logo}
            width="90px"
            alt="logo da Matry"
            className="logo-icone"
          />
          <span className="logo-titulo">Okina Toshokan</span>
        </div>
        <div className="header-options Option">
          <button className="button-cart">
            <img className="bi" src={cart} alt="cart" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
