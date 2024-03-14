import { getPercent } from "../getPercent.js";

describe("tests for getPercent function", () => {
	it("should give error with negative numbers", () => {
		expect(() => { getPercent(-1.5, 100) }).toThrow(new Error("Less than 0"));
	})
	it("should work correctly with numbers from 0 to 1000", () => {
		for (let i = 0; i <= 1000; i++) {
			expect(getPercent(i, 100)).toBe(i);
		}
	});
	it("with number in inverted commas (string)", () => {
		expect(getPercent("25", 100)).toBe(25);
	});
	it("with string instead of number", () => {
		expect(getPercent("abc", 100)).toBe(NaN);
		expect(0)
	});
})