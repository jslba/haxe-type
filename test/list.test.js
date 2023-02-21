const Types = require('../source/index');

test('create list', function () {
	let instance = new Types.List('Foo', 'Bar');
	instance.push('Baz');

	expect(instance).toBeInstanceOf(Types.List);
	expect(instance).toBeInstanceOf(Array);
	expect(instance[0]).toStrictEqual('Foo');
	expect(instance[1]).toStrictEqual('Bar');
	expect(instance[2]).toStrictEqual('Baz');
});
