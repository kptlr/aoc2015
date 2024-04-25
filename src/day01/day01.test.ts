import { readInputToStr } from "../utils/file.util";
import * as day01 from "./day01";

test("Проверяем часть 1", () => {
  expect(day01.part01("(())")).toBe(0);
  expect(day01.part01("(((")).toBe(3);
  expect(day01.part01("(()(()(")).toBe(3);
  expect(day01.part01("))(((((")).toBe(3);
  expect(day01.part01("())")).toBe(-1);
  expect(day01.part01("))(")).toBe(-1);
  expect(day01.part01(")))")).toBe(-3);
  expect(day01.part01(")())())")).toBe(-3);
});

test("Проверяем часть 2", () => {
  expect(day01.part02("()())")).toBe(5);
});
