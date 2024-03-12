import { definePrime } from "C:/module17_homework/definePrime.js";

describe('tests for definePrime function', ()=> {
	const prime = 17;
	const complex = 18;

	it("should operate correctly with prime number", ()=>{
		expect(definePrime(prime)).toBe(`Число ${prime} - простое число`)
	}),
	it("should operate correctly with complex number", ()=>{
		expect(definePrime(complex)).toBe(`Число ${complex} - составное число`)
	}),
	it("should operate correctly with invalid number", ()=>{
		expect(definePrime(1001)).toBe("Данные неверны")
	})
})

xdescribe('tests for definePrime function', ()=> {
	const prime = 17;
	const complex = 18;

	it("should operate correctly with prime, complex and invalid numbers", ()=>{
		expect(definePrime(prime)).toBe(`Число ${prime} - простое число`);
		expect(definePrime(complex)).toBe(`Число ${complex} - составное число`);
		expect(definePrime(1001)).toBe("Данные неверны");
	})
})