import { Cell } from "../types";
import fs from "fs";

export function fileWriter(file: string, cells: Cell[]): void {
  let contentToWrite: string = "";

  for (let cell of cells) {
    let content;

    if (cell.type === "text") {
      content = `
            /* text - ${cell.id} */
            /* 
            ${cell.content}
            */
        `;
    } else {
      content = `
            /* code - ${cell.id} */
            ${cell.content}
        `;
    }

    // Remove leading and trailing spaces from each line
    content = content
      .split("\n")
      .map((line) => line.trim())
      .join("\n");

    contentToWrite += "\n" + content;
    contentToWrite = contentToWrite.trim();
  }
  try {
    fs.writeFileSync(file, contentToWrite, { encoding: "utf-8" });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error writing to file "${file}": ${error.message}`);
    }
  }
}
