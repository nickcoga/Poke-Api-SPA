import React, { useState } from "react";
import CardCharacter from "../components/Cards/CardCharacter";
import FooterLanding from "../components/Footer/FooterLanding";
import NavbarLanding from "../components/Navbars/NavbarLanding";

export default function LandPage() {
  const [showPokemon, setShowPokemon] = useState(false);

  return (
    <div>
      <NavbarLanding
        showPokemon={showPokemon}
        setShowPokemon={setShowPokemon}
      />
      <CardCharacter showPokemon={showPokemon} />
      <FooterLanding />
    </div>
  );
}
