const Types = require('../source/index');

// factually,  you can omit  __construct__ and  `.resolve`, but  if (for eg) you
// need  to  serialize  or  deserialize an  enum  you  will be  confronted  with
// complications.

test('create enum (no args)', function () {
	class TestEnum extends Types.Enum {
		__construct__ = ['Foo'];
		static Foo = new this('Foo', 0);
	}
	TestEnum.resolve();

	let instance = TestEnum.Foo;
	expect(instance).toBeInstanceOf(TestEnum);
	expect(instance).toBeInstanceOf(Types.Enum);
	expect(instance).toBeInstanceOf(Array);
	expect(instance.toString()).toStrictEqual('Foo');
});

test('create enum (args)', function () {
	class TestEnum extends Types.Enum {
		__construct__ = ['Foo'];
		static Foo(bar, baz) {
			return new this('Foo', 1, bar, baz);
		}
	}
	TestEnum.resolve(); //

	let instance = TestEnum.Foo('Bar', 'Baz');
	expect(instance).toBeInstanceOf(TestEnum);
	expect(instance).toBeInstanceOf(Types.Enum);
	expect(instance).toBeInstanceOf(Array);
	expect(instance.toString()).toStrictEqual('Foo');
	expect(instance[2]).toStrictEqual('Bar'); // arg 1
	expect(instance[3]).toStrictEqual('Baz'); // arg 2
});

test('use custom resolver', function () {
	const CUSTOM_RESOLVER = {};
	class TestEnum extends Types.Enum {
		__construct__ = ['Foo'];
		static Foo = new this('Foo', 0);
		static resolve(custom_resolver) {
			custom_resolver[this.name] = this;
		}
	}
	TestEnum.resolve(CUSTOM_RESOLVER);

	expect(CUSTOM_RESOLVER.hasOwnProperty('TestEnum')).toStrictEqual(true);
	expect(CUSTOM_RESOLVER.TestEnum).toStrictEqual(TestEnum);
	expect(new CUSTOM_RESOLVER.TestEnum()).toBeInstanceOf(Types.Enum);
	expect(new CUSTOM_RESOLVER.TestEnum()).toBeInstanceOf(Array);
});
