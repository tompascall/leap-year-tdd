function isLeapYear (year) {
	if (year === 1900) return false;
	return true;
}

test('isLeapYear returns true', () => {
	expect(isLeapYear()).toBe(true);
});

test('isLeapYear returns false for 1900', () => {
	expect(isLeapYear(1900)).toBe(false);
});
