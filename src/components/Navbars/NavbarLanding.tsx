import styled from "@emotion/styled";
import { colors } from "../../UI/ColorStyles";
import Logo from "../../assets/logo.png";
import Profesor from "../../assets/profesor.png";
import { Link } from "react-router-dom";
import { IProps } from "./InterfaceNavbar";

const NavbarLanding: React.FC<IProps> = ({ showPokemon, setShowPokemon }) => {
  const handleChange = () => {
    setShowPokemon(!showPokemon);
  };

  return (
    <Navbar>
      <Container>
        <Link to="/">
          <Content>
            <img className="img1" src={Logo} alt="logo" />
          </Content>
        </Link>
        <Content>
          <div className="container">
            <label className="toogle switch">
              <input type="checkbox" onChange={handleChange} /> <div></div>
            </label>
          </div>

          <img className="img2" src={Profesor} alt="profesor" />
        </Content>
      </Container>
    </Navbar>
  );
};

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
  .toogle {
    color: white;
  }

  .switch input {
    position: absolute;
    opacity: 0;
  }

  .switch {
    display: inline-block;
    font-size: 20px; /* 1 */
    height: 1em;
    width: 2em;
    background: #bdb9a6;
    border-radius: 1em;
  }

  .switch div {
    height: 1em;
    width: 1em;
    border-radius: 1em;
    background: #fff;
    box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
    -webkit-transition: all 300ms;
    -moz-transition: all 300ms;
    transition: all 300ms;
  }

  .switch input:checked + div {
    -webkit-transform: translate3d(100%, 0, 0);
    -moz-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;

export default NavbarLanding;
