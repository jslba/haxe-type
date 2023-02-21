const Types = require('../source/index');

test('create StringMap', function () {
	// factually, you can use int keys in JavaScript but in Haxe, a int key will
	// generate a type error.
	let instance = new Types.StringMap({ foo: 0, bar: 1 });
	instance.baz = 2;

	expect(instance).toBeInstanceOf(Types.StringMap);
	expect(instance).toBeInstanceOf(Object);
	expect(instance.foo).toStrictEqual(0);
	expect(instance.bar).toStrictEqual(1);
	expect(instance.baz).toStrictEqual(2);
});