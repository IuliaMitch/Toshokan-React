import logo from "../../assets/icons/matry.gif";
import cart from "../../assets/icons/cart.svg";
import cloud from '../../assets/icons/cloud-plus.svg'
import pencil from '../../assets/icons/pencil.svg'
import "./Header.css";
import { ActionMode } from "constants/index";

const Header = ({ createObra, updateObra, mode }) => {
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
        <button type="button" className={`button pencil ${mode === ActionMode.ATUALIZAR && "activated-obra"}`} onClick={() => updateObra()}>
          <img className="bi bi-pencil" src={pencil} alt="Editar Obra" />
          </button>
          <button type="button" className="button cloud" onClick={() => createObra()}>
          <img className="bi bi-cloud" src={cloud} alt="Adicionar Obra" />
          </button>
          <button className="button cart">
            <img className="bi bi-cart" src={cart} alt="cart" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
