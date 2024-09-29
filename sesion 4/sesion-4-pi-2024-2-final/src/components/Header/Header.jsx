import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/"> Inicio </Link>
          </li>
          <li>
            <Link to="/recycling">Reciclaje</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
