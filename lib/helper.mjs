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
