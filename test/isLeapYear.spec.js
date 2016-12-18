function isLeapYear (year) {
	if (year && ( (year % 4 !== 0) || (year % 100 === 0 &&
		year % 400 !== 0 ))) {
		return false;
	}
	return true;
}

test('isLeapYear returns true for leap year', () => {
	expect(isLeapYear()).toBe(true);
	expect(isLeapYear(2004)).toBe(true);
	expect(isLeapYear(2000)).toBe(true);
});

test('isLeapYear returns false if input is not leap year', () => {
	expect(isLeapYear(1900)).toBe(false);
	expect(isLeapYear(1800)).toBe(false);
	expect(isLeapYear(1999)).toBe(false);
});

