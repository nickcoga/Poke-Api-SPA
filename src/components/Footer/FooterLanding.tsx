import styled from "@emotion/styled";
import { colors } from "../../UI/ColorStyles";

export default function FooterLanding() {
  return (
    <Footer>
      <Text>This project was build in React with TypeScript</Text>
    </Footer>
  );
}

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${colors.black};
  margin: 0;
  padding: 20px;
  list-style-type: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const Text = styled.p`
  color: white;
`;
