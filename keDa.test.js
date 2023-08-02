const Num1 = require("./1.js");

test("Case number 1: [1, 2, 4, 3, 5, 3, 2, 1]", () => {
  const inputArray = [1, 2, 4, 3, 5, 3, 2, 1];
  const expectedOutput = [5, 4, 3, 3, 2, 2, 1, 1];
  expect(Num1(inputArray)).toEqual(expectedOutput);
});

const Num2 = require("./2.js");

test("Case number 2: [100, 200, 300, 400], 2", () => {
  expect(Num2([100, 200, 300, 400], 2)).toBe(700);
});

test("Case number 2: [1, 4, 2, 10, 23, 3, 1, 0, 20], 4", () => {
  expect(Num2([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
});

test("Case number 2: [-3, 4, 0, -2, 6, -1], 2", () => {
  expect(Num2([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
});

const Num3 = require("./3.js");

test("Case number 3:", () => {
  const input = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  };
  expect(Num3(input)).toBe(6);
});

test("Case number 3:", () => {
  const input = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 4 }, ee: "car" },
  };
  expect(Num3(input)).toBe(12);
});
