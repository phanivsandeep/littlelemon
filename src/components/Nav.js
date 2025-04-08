import img from "../assets/Logo.svg";
import hamburger from "../assets/hamburger menu.svg";

function Nav() {
  const toggleMenu = () => {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('active');
  };

  return (
    <nav>
      <div className="nav-container">
        <img src={img} alt="Little Lemon" className="logo" />
        <div className="hamburger" onClick={toggleMenu}>
          <img src = {hamburger} alt="Hamburger Menu" className="hamburger-icon"/>
        </div>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;