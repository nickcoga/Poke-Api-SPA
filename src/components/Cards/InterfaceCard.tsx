interface ICard {
  id: number;
  name: string;
  url: string;
}

interface ICardDetail {
  abilities: [{ ability: { name: string; url: string } }];
  base_experience: number;
  height: number;
  moves: [{ move: { name: string; url: string } }];
  species: { name: string };
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };
  stats: [{ base_stat: number }];
  types: [{ slot: number; type: { name: string; url: string } }];
  weight: number;
}

export type { ICard, ICardDetail };
