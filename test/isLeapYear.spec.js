function isLeapYear (year) {

	if (typeof year !== 'number' || Number.isNaN(year)) {
		throw Error('isLeapYear must be called with parameter');
	}

	if (year && ( (year % 4 !== 0) || (year % 100 === 0 &&
		year % 400 !== 0 ))) {
		return false;
	}

	if (typeof year === 'undefined') {
		throw Error('isLeapYear must be called with parameter');
	}

	return true;
}

test('isLeapYear returns true for leap year', () => {
	expect(isLeapYear(2004)).toBe(true);
	expect(isLeapYear(2000)).toBe(true);
});

test('isLeapYear returns false if input is not leap year', () => {
	expect(isLeapYear(1900)).toBe(false);
	expect(isLeapYear(1800)).toBe(false);
	expect(isLeapYear(1999)).toBe(false);
});

test('isLeapYear throws excepion if it is called without parameter', () => {
	expect( () => isLeapYear() ).toThrow();
});

test('isLeapYear throws excepion if it is not called with number', () => {
	expect( () => isLeapYear('asdf') ).toThrow();
	expect( () => isLeapYear(undefined + 0) ).toThrow();
});
