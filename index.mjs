import {
  askQuestion,
  pinjam,
  showOptions,
  showPeminjaman,
  showTable,
  handleExit,
} from "./lib/helper.mjs";
import { books, mainRouteLabel } from "./data/data.mjs";

async function main() {
  let stopProgram = false;
  showOptions(mainRouteLabel, "Selamat Datang di Perpupsdes");
  let askRoute = await askQuestion("Ada yang bisa dibantu? ");
  let askBook;

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
    case "2":
      {
        showTable(books);
        askBook = await askQuestion("Mau minjem buku apa? (masukkan option)");

        const getPinjam = pinjam(books, askBook);
        if (getPinjam.value === false) {
          console.log("Buku tidak ada...");
          main();
        }
        showPeminjaman(getPinjam.data);
        askRoute = await askQuestion("Masih mau disini?(y/n) ");
        if (askRoute === "y") {
          return main();
        } else {
          stopProgram = true;
        }
      }
      break;

    case "3":
      stopProgram = true;
      break;

    default:
      console.log("Mohon masukkan sesuai options...");
      main();
  }
  if (!stopProgram) return main();

  if (stopProgram) return handleExit();
}

main();
