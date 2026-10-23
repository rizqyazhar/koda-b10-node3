import { askQuestion, showOptions } from "./lib/helper.mjs";
import { mainRouteLabel } from "./data/data.mjs";

async function main() {
  showOptions(mainRouteLabel, "Selamat Datang di Perpupsdes");
  let askRoute = await askQuestion("Ada yang bisa dibantu? ");
}

main();
