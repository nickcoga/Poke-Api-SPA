import styled from "@emotion/styled";
import { colors } from "../../UI/ColorStyles";
import Logo from "../../assets/logo.png";
import Profesor from "../../assets/profesor.png";
import { Link } from "react-router-dom";

export default function NavbarLanding() {
  return (
    <Navbar>
      <Container>
        <Link to="/">
          <Content>
            <img className="img1" src={Logo} alt="logo" />
          </Content>
        </Link>
        <Content>
          <label className="toogle">
            <input type="checkbox" />
            este es mi toogle
          </label>

          <img className="img2" src={Profesor} alt="profesor" />
        </Content>
      </Container>
    </Navbar>
  );
}

const Navbar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${colors.black};
  margin: 0;
  padding: 0;
  list-style-type: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  margin: 0;
  justify-content: space-around;
`;

const Content = styled.div`
  padding: 16px 32px;
  margin: 0;
  .img1 {
    width: 220px;
  }
  .img2 {
    width: 100px;
  }
`;
