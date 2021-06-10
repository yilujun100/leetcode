import isSameTree from '../../code/recursion/100.isSameTree';

const p1 = {
	val: 1,
	left: {
		val: 2,
		left: null,
		right: null
	},
	right: {
		val: 3,
		left: null,
		right: null
	}
};
const q1 = {
	val: 1,
	left: {
		val: 2,
		left: null,
		right: null
	},
	right: {
		val: 3,
		left: null,
		right: null
	}
};

const p2 = {
	val: 1,
	left: {
		val: 2,
		left: null,
		right: null
	},
	right: {
		val: 1,
		left: null,
		right: null
	}
};
const q2 = {
	val: 1,
	left: {
		val: 1,
		left: null,
		right: null
	},
	right: {
		val: 2,
		left: null,
		right: null
	}
};

const p3 = {
	val: 1,
	left: {
		val: 2,
		left: null,
		right: null
	},
	right: null
};
const q3 = {
	val: 1,
	left: null,
	right: {
		val: 2,
		left: null,
		right: null
	}
};

test('相同的树：1', () => {
	expect(isSameTree(p1, q1)).toBe(true);
});

test('相同的树：2', () => {
	expect(isSameTree(p2, q2)).toBe(false);
});

test('相同的树：3', () => {
	expect(isSameTree(p3, q3)).toBe(false);
});
