function isLeapYear (year) {
	if (year && (year % 100 === 0 || year % 4 !== 0)) {
		return false;
	}
	return true;
}

test('isLeapYear returns true', () => {
	expect(isLeapYear()).toBe(true);
});

test('isLeapYear returns false if input is not leap year', () => {
	expect(isLeapYear(1900)).toBe(false);
	expect(isLeapYear(1800)).toBe(false);
	expect(isLeapYear(1999)).toBe(false);
});

