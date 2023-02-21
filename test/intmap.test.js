const Types = require('../source/index');

test('create IntMap', function () {
	// factually, you can  use string keys  in JavaScript but  in Haxe, a string
	// key will generate a type error.
	let instance = new Types.IntMap({ 0: 'Foo', 1: 'Bar' });
	instance[2] = 'Baz';

	expect(instance).toBeInstanceOf(Types.IntMap);
	expect(instance).toBeInstanceOf(Object);
	expect(instance[0]).toStrictEqual('Foo');
	expect(instance[1]).toStrictEqual('Bar');
	expect(instance[2]).toStrictEqual('Baz');
});
