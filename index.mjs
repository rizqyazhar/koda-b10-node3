import { askQuestion, showOptions, showTable } from "./lib/helper.mjs";
import { books, mainRouteLabel } from "./data/data.mjs";

async function main() {
  let stopProgram = false;
  showOptions(mainRouteLabel, "Selamat Datang di Perpupsdes");
  let askRoute = await askQuestion("Ada yang bisa dibantu? ");

  switch (askRoute) {
    case "1":
      showTable(books);
      askRoute = await askQuestion("Masih mau disini?(y/n) ");
      if (askRoute === "y") {
        return main();
      } else {
        stopProgram = true;
      }
      break;
  }
}

main();
