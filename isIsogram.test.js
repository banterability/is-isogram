const isIsogram = require("./isIsogram");

describe("isIsogram", () => {
  describe("words", () => {
    test("returns true for isogramatic words", () => {
      expect(isIsogram("sandwich")).toEqual(true);
    });

    test("returns false for non-isogramatic words", () => {
      expect(isIsogram("wedding")).toEqual(false);
    });
  });

  describe("phrases", () => {
    test("returns true for isogramatic phrases", () => {
      expect(isIsogram("quick on the draw")).toEqual(true);
    });

    test("returns false for non-isogramatic phrases", () => {
      expect(isIsogram("flipped turned upside down")).toEqual(false);
    });
  });
});
