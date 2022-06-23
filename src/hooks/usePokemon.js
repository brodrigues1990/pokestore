import { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";

export function usePokemon() {
  const pokemon = useContext(PokemonContext)

  return pokemon;
}