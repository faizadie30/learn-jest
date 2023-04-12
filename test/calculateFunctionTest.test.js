const { add, subtract, multiply } = require("../calculator");

// grouping testing with function
describe("test calculate", () => {
  test("#describe-test-1 5 + 5", async () => {
    expect(add(5, 5)).toStrictEqual(10);
  });

  test("#describe-test-2 5*5", () => {
    expect(multiply(5, 5)).toStrictEqual(25);
  });

  test("#describe-test-3 100 - 10", () => {
    expect(subtract(100, 10)).toStrictEqual(90);
  });
});

//example with to be
test("#no-describe-1 2+2", () => {
  expect(2 + 2).toBe(4);
});

test("#no-describe-2 50-3", () => {
  expect(50 - 3).toBe(47);
});

test("#no-describe-2 50*5", () => {
  expect(50 * 5).toBe(250);
});
