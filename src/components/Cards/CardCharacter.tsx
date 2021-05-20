import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../UI/ColorStyles";
import { ICard } from "./InterfaceCard";
import { Link } from "react-router-dom";
import fondo from "../../assets/fondo.jpg";

export default function CardCharacter(): JSX.Element {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(`${process.env.REACT_APP_PUBLIC_URL}/pokemon/`);
    const characters = await data.json();
    console.log(characters.results);
    setCards(characters.results);
  };

  return (
    <UlStyles>
      {cards.map((c: ICard, i: number) => (
        <CardCharacterStyles key={c.name}>
          <Link to={`/characterdetail/${c.name}`} className="link">
            <FontTop>
              <img
                alt={c.name}
                className="img"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  i + 1
                }.png`}
              />

              <Pokename> {c.name}</Pokename>
            </FontTop>
          </Link>
        </CardCharacterStyles>
      ))}
    </UlStyles>
  );
}

const UlStyles = styled.ul`
  display: flex;
  aling-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 20px;
  margin: 0px;
  background: url(${fondo});
`;

const CardCharacterStyles = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 15px;
  background: ${colors.Gold};
  margin: 16px 32px 16px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 1, 1);

  .link {
    color: ${colors.White};
    text-decoration: none;
  }
`;

const FontTop = styled.div`
  width: 300px;
  height: 180px;
  border-radius: 12px 12px 0px 0px;
  background: ${colors.Cream};
  .img {
    width: 60%;
    filter: brightness(0%);
  }
`;

const Pokename = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  line-height: 28px;
  padding: 16px 10px;
`;
