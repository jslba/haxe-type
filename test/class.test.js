const Types = require('../source/index');

// factually,  you can omit  __construct__ and  `.resolve`, but  if (for eg) you
// need  to  serialize  or  deserialize a  class  you  will be  confronted  with
// complications.

test('create class', function () {
	class TestClass extends Types.Class {}
	TestClass.resolve();

	let instance = new TestClass();

	expect(instance).toBeInstanceOf(TestClass);
	expect(instance).toBeInstanceOf(Types.Class);
});

test('use custom resolver', function () {
	const CUSTOM_RESOLVER = {};

	class TestClass extends Types.Class {
		static resolve(custom_resolver) {
			custom_resolver[this.name] = this;
		}
	}
	TestClass.resolve(CUSTOM_RESOLVER);

	expect(CUSTOM_RESOLVER.hasOwnProperty('TestClass')).toStrictEqual(true);
	expect(CUSTOM_RESOLVER.TestClass).toStrictEqual(TestClass);
	expect(new CUSTOM_RESOLVER.TestClass()).toBeInstanceOf(TestClass);
	expect(new CUSTOM_RESOLVER.TestClass()).toBeInstanceOf(Types.Class);
});
