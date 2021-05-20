import React, { useState } from "react";
import CardCharacter from "../components/Cards/CardCharacter";
import FooterLanding from "../components/Footer/FooterLanding";
import NavbarLanding from "../components/Navbars/NavbarLanding";

interface IProps {
  showPokemon?: false;
  defaultshowPokemon?: boolean;
}

export default function LandPage(props: IProps) {
  const [showPokemon, setShowPokemon] = useState(false);

  return (
    <div>
      <NavbarLanding />
      <CardCharacter />
      <FooterLanding />
    </div>
  );
}
