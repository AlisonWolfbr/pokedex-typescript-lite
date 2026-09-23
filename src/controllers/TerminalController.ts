import { PokeApiService } from "../services/PokeApiService.js";
import { BoxService } from "../services/BoxService.js";
import { formatarPokemon } from "../utils/textFormatters.js";

export class TerminalController {
  constructor(
    private readonly pokeApiService: PokeApiService,
    private readonly boxService: BoxService
  ) {}

  async executarDemonstracao(): Promise<void> {
    console.log("==========================================");
    console.log("       POKÉDEX TYPESCRIPT LITE");
    console.log("==========================================\n");

    const pikachu = await this.pokeApiService.buscarPokemon("pikachu");
    if (pikachu !== null) {
      console.log(formatarPokemon(pikachu));
      this.boxService.adicionar(pikachu);
    }

    const charmander = await this.pokeApiService.buscarPokemon("charmander");
    if (charmander !== null) {
      console.log(formatarPokemon(charmander));
      this.boxService.adicionar(charmander);
    }

    console.log("\n--- Teste de duplicidade ---");
    const pikachuDuplicado = await this.pokeApiService.buscarPokemon("pikachu");
    if (pikachuDuplicado !== null) {
      this.boxService.adicionar(pikachuDuplicado);
    }

    console.log("\n--- Teste de Pokémon inexistente ---");
    await this.pokeApiService.buscarPokemon("pokemon-inexistente");

    console.log("\n--- Catálogo ---");
    this.boxService.listar();

    console.log("\n--- Teste de métodos de array ---");
    console.log(`[INFO] Quantidade de Pokémon do tipo fire: ${this.boxService.contarPorTipo("fire")}`);

    console.log("\n--- Remoção do ID 25 ---");
    this.boxService.remover(25);

    console.log("\n--- Catálogo após remoção ---");
    this.boxService.listar();

    console.log("\n[OK] Demonstração finalizada.");
  }
}