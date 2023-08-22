const {default:TestRunner}=require("jest-runner");
const AddFive=require("./AddFive");


test("returns the given number plus 5",()=> {
    expect(AddFive(1)).toBe(6);
})