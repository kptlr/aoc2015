import { readInputToStr } from "../utils/file.util";

export function part01(input: string): number {
  let floor = 0;

  input.split("").forEach((instruction) => {
    if (instruction === "(") {
      floor++;
    } else if (instruction === ")") {
      floor--;
    }
  });

  return floor;
}

export function part02(input: string): number {
  let inputArr = input.split("");
  let floor = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === "(") {
      floor++;
    } else if (inputArr[i] === ")") {
      floor--;
    }
    if (floor == -1) {
      return i + 1;
    }
  }
  return 0;
}

export function day01(_arg0: string[]): any {
  throw new Error("Function not implemented.");
}

console.info(part01(readInputToStr("day01", "prod")));
console.info(part02(readInputToStr("day01", "prod")));
