import styled from "@emotion/styled";
import NavbarLanding from "../components/Navbars/NavbarLanding";
import { colors } from "../UI/ColorStyles";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { ICardDetail } from "../components/Cards/InterfaceCard";
import FooterLanding from "../components/Footer/FooterLanding";

export default function CharacterDetail(information: ICardDetail) {
  const params = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState(information);
  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_URL}/pokemon/${params.name}`
    );
    const data = await response.json();
    console.log(data);
    setPokemon(data);
  };

  let photo: string = "",
    base_exp: number = 0,
    base_stat: number = 0,
    type: string = "",
    name: string = "";

  if (pokemon) {
    type = pokemon.types && pokemon.types[0].type.name;
    type = pokemon.types && `${type.charAt(0).toUpperCase()}${type.slice(1)}`;
    name = pokemon.species && pokemon.species.name;
    name =
      pokemon.species &&
      `${pokemon.species.name
        .charAt(0)
        .toUpperCase()}${pokemon.species.name.slice(1)}`;
    photo = pokemon.sprites?.front_default;
    base_exp = pokemon.base_experience;
    base_stat = pokemon.stats && pokemon.stats[0].base_stat;
  }

  return (
    <div>
      <NavbarLanding />

      <Container>
        <CardDetail>
          <Title>Type: {type}</Title>
          <Line />
          <Photo>
            <img className="img" src={photo} alt="Property" />
            <Detail>
              <Content>
                <Subtitle>{name}</Subtitle>
              </Content>
              <Content>
                <Text>
                  {name}, dolor sit amet consectetur adipisicing elit.
                  Accusantium cum dolorem doloribus necessitatibus placeat ea
                  voluptatibus deserunt doloremque optio beatae nostrum nemo
                  ullam sunt, provident quis cupiditate corporis! Unde, fuga?
                </Text>
              </Content>
              <Content>
                <Barra>Exp {base_exp} %</Barra>
                <Barra>HP: {base_stat} %</Barra>
                <Barra>Height: {pokemon.height} m.</Barra>
                <Barra>Weight: {pokemon.weight} kg.</Barra>
              </Content>
              <Content>
                <Subtitle>Abilities</Subtitle>
              </Content>
              <Content>
                {pokemon.abilities &&
                  pokemon.abilities.map((a) => (
                    <Barra key={a.ability.name}>{a.ability.name}</Barra>
                  ))}
              </Content>
              <Content>
                <Subtitle>Moves</Subtitle>
              </Content>
              Hola soy el footer
              <Content>
                {pokemon.moves &&
                  pokemon.moves
                    .map((m) => <Barra key={m.move.name}>{m.move.name}</Barra>)
                    .slice(1, 5)}
              </Content>
            </Detail>
          </Photo>
        </CardDetail>
      </Container>
      <FooterLanding />
    </div>
  );
}

const Container = styled.section`
width: 100%
padding: 500px;
display: flex;
align-items: center;
justify-content: center;
`;

const CardDetail = styled.div`
  width: 80%;
  display: flex;
  padding: 50px 0px;
  margin-top: 30px;
  margin-bottom: 30px;
  flex-direction: column;
  align-items: center;
  background: ${colors.LightGrey};
`;

const Title = styled.h6`
  width: 80%;
  color: ${colors.White};
  font-family: "Montserrat', sans-serif",
  font-weight: normal;
  font-size: 30px;
  line-height: 10px;
  padding: 20px;
  margin: 0;
`;

const Detail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.h6`
width: 100%;
  color: ${colors.White};
  font-family: "Montserrat', sans-serif",
  font-weight: normal;
  font-size: 30px;
  line-height: 10px;
  padding: 10px;
  margin: 5px;
  
`;

const Photo = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  gap: 120px;
  .img {
    width: 55%;
    margin: 30px;
    padding: 0px;
  }
`;

const Text = styled.div`
  width: 90%;
  color: ${colors.DarkPink};
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  padding: 5px 0px;
`;

const Barra = styled.div`
  border: 2px solid red;
  border-radius: 14px;

  color: white;
  background: red;
  overflow: hidden;
  white-space: nowrap;
  padding: 10px 20px;
  border-radius: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  padding: 5px;
  margin: 10px;
`;

const Values = styled.div`
  color: ${colors.DarkPink};
  font-size: 20px;
  line-height: 5px;
  padding: 15px 0px;
`;

const Line = styled.hr`
  border-width: 0;
  width: 70%;
  height: 2px;
  margin-right: 150px;
  margin-left: 0;
  background-color: ${colors.White};
`;
