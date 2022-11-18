import logo from '../../assets/img/logo.svg';
import "./styles.css";

function Header() {
  return (
    <>
      <header>
        <div className="dsmeta-logo-container">
          <br/> <br/>
          <img src={logo} alt="DSMeta" />
          <h1>UNION DIGITAL IT</h1>
          <p>
            Desenvolvido por  <a href="https://www.instagram.com/devsuperior.ig">
               @karolineymt
            </a>
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
