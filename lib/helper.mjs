import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

export async function askQuestion(question) {
  const rl = createInterface({
    input: stdin,
    output: stdout,
  });

  const answer = await rl.question(`<Perpusdes> ${question} \n>> `);
  rl.close();
  return answer;
}

export function showOptions(options, message) {
  console.log("==============================");
  console.log(message);
  console.log("==============================");
  for (const property in options) {
    console.log(`${property}: ${options[property]}`);
  }
  console.log("");
  return null;
}

export function showTable(data) {
  console.log("");
  console.log(
    `Opt  ${"Judul".padEnd(30, " ")} ${"Penulis".padEnd(30, " ")} Tahun ${"Genre".padEnd(20, " ")} Stok`,
  );
  console.log("-".repeat(100));
  data.map((d, i) => {
    console.log(
      `${i + 1}.   ${d.judul.padEnd(30, " ")} ${d.penulis.padEnd(30, " ")} ${d.tahunTerbit.toString().padEnd(5, " ")} ${d.genre.padEnd(20, " ")} ${d.stok}`,
    );
  });
  console.log("");
}

export function pinjam(data, judul) {
  const buku = data.filter((d) => d.judul.toLowerCase().inlcudes(judul));
  if (!buku)
    return {
      value: false,
      data: null,
    };
  return {
    value: true,
    data: buku,
  };
}

export function showPeminjaman(
  data = {
    judul: "Laskar Pelangi",
    tglPinjam: "23/4/2026",
    tglKembali: "10/5/2026",
  },
) {
  console.log("");
  console.log(
    "Selamat Kamu berhasil meminjam buku di Perpusdes! Jangan lupa untuk mengembalikan bukunya tepat waktu ya...",
  );
  console.log("Berikut rincian nya: ");
  console.log("");
  console.log(
    `${"Judul".padEnd(30, " ")} ${"Tanggal Pinjam".padEnd(20, " ")} ${"Tanggal Kembali".padEnd(20, " ")}`,
  );
  console.log("-".repeat(70));
  console.log(
    `${data.judul.padEnd(30, " ")} ${data.tglPinjam.toString().padEnd(20, " ")} ${data.tglKembali.toString().padEnd(20, " ")}`,
  );
  console.log("");
  return null;
}

showPeminjaman();
