function isLeapYear () {
	return true;
}

test('isLeapYear returns true', () => {
	expect(isLeapYear()).toBe(true);
});
