import { TerminalController } from "./controllers/TerminalController.js";
import { BoxService } from "./services/BoxService.js";
import { PokeApiService } from "./services/PokeApiService.js";

async function main(): Promise<void> {
  const pokeApiService = new PokeApiService();
  const boxService = new BoxService();

  const controller = new TerminalController(
    pokeApiService,
    boxService
  );

  await controller.executarDemonstracao();
}

main().catch((erro: unknown) => {
  console.error("[ERRO] Falha inesperada na aplicação.", erro);
  process.exitCode = 1;
});