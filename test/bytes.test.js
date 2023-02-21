const Types = require('../source/index');

test('byte of string', function () {
	let instance = Types.Bytes.ofString('Foo'),
		expected = [70, 111, 111];

	expect(instance.length).toStrictEqual(expected.length);
	for (let i = 0; i < instance.length; i++) {
		expect(instance[i]).toStrictEqual(expected[i]);
	}
});

test('byte getString', function () {
	let instance = new Types.Bytes([
		72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100,
	]);
	expect(instance.getString(0, 5)).toStrictEqual('Hello');
});

test('byte toString', function () {
	let instance = new Types.Bytes([
		72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100,
	]);
	expect(instance.toString()).toStrictEqual('Hello World');
});
