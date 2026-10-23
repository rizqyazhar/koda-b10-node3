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
