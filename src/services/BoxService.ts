import { PokemonResumo } from "../models/Pokemon.js";

export class BoxService {
  private pokemons: PokemonResumo[] = [];

  adicionar(pokemon: PokemonResumo): void {
    const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);

    if (jaExiste) {
      console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
      return;
    }

    this.pokemons.push(pokemon);
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
  }

  listar(): PokemonResumo[] {
    if (this.pokemons.length === 0) {
      console.log("[AVISO] Catálogo vazio.");
      return [];
    }

    console.log("\nCatálogo atual:");
    this.pokemons.forEach((pokemon) => {
      console.log(
        `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`
      );
    });

    return [...this.pokemons];
  }

  remover(id: number): void {
    const existe = this.pokemons.find((pokemon) => pokemon.id === id);

    if (!existe) {
      console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
      return;
    }

    this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
    console.log("[OK] Pokémon removido do catálogo.");
  }

  contarPorTipo(tipo: string): number {
    return this.pokemons.filter((pokemon) => pokemon.tipos.includes(tipo)).length;
  }
}