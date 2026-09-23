import { PokemonResumo, PokemonApiResponse } from "../models/Pokemon.js";
import { normalizarBusca } from "../utils/textFormatters.js";

export class PokeApiService {
  private readonly baseUrl = "https://pokeapi.co/api/v2/pokemon";

  async buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    const busca = normalizarBusca(nomeOuId);

    if (!busca) {
      console.log("[ERRO] Informe um nome ou ID de Pokémon.");
      return null;
    }

    try {
      const resposta = await fetch(`${this.baseUrl}/${encodeURIComponent(busca)}`);

      if (!resposta.ok) {
        if (resposta.status === 404) {
          console.log(`[ERRO] Pokémon não encontrado: ${busca}`);
          return null;
        }

        console.log(`[ERRO] A PokeAPI retornou status ${resposta.status}.`);
        return null;
      }

      const dados = (await resposta.json()) as PokemonApiResponse;

      const pokemon: PokemonResumo = {
        id: dados.id,
        nome: dados.name,
        tipos: dados.types.map((item) => item.type.name),
        altura: dados.height,
        peso: dados.weight
      };

      console.log(`[OK] Pokémon encontrado: ${pokemon.nome}`);
      return pokemon;
    } catch (erro) {
      console.log("[ERRO] Não foi possível buscar o Pokémon.");
      return null;
    }
  }
}