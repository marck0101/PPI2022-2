import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  function CardClicavel() {
    // console.log("eu vou para o google");
    window.location = "http://localhost:3000"; // acessar menu de relatório, dia, semana mês
  }
  return (
    <header>
      <div class="clicavel" onClick={CardClicavel}>
        <h2>Smart Parking</h2>
      </div>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/cadastroRelatorios">Cadastro</Link>
        <Link to="/ChartLine">ChartLine</Link>
        {/* <Link to="/relatorios">Relatórios</Link> */}
      </div>
    </header>
  );
}

export default Header;
