import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

export async function askQuestion(question) {
  const rl = createInterface({
    input: stdin,
    output: stdout,
  });

  const answer = await rl.question(question);
  rl.close();
  return answer;
}
