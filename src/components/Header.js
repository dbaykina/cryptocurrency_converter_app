import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";


const Header = () => {
  return (
  <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <NavLink className="nav-link" to="/converter">
        Онлайн-конвертер криптовалют
  </NavLink>
      <NavLink className="nav-link" to="/rates">
        Актуальные курсы криптовалют
      </NavLink>
    </Container>
  </Navbar>
</Container>
  )
}

export default Header;
