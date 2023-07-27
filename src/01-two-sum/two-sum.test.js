const { basicTwoSum } = require("./two-sum");
describe("Two Sum", () => {
  let props;

  beforeEach(() => {
    props = {
      arr: [1, 2, 7],
      target: 0
    };
  });
  test("Should return an empty array when solution does not exist", () => {
    props.target = 11
    expect(basicTwoSum(props.arr, props.target)).toEqual([]);
  });

  test("Should return [0,1]", () => {
    props.target = 3;
    expect(basicTwoSum(props.arr, props.target)).toEqual([0, 1]);
  });
});
