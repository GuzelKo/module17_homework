export function getPercent(percent, number) {
	if (percent < 0) {
		throw new Error ('Less than 0')
	} else return number / 100 * percent;
}

console.log(getPercent(30, 200));