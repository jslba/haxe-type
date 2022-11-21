> **Note**   
> All or part of the types presented here can be a partial implementation of the
> implemented type.
# Types :
## [hxt.List][list] extends [Array][array] implement of [haxe.ds.List][hxlist]
```haxe
/* no custom constructor, variables or methods. */
```
## [hxt.Bytes][bytes] extends [Uint8Array][uint8array] implement of [haxe.io.Bytes][hxbytes]
```haxe
/* no custom constructor or variables. */
```
### **Custom Methods**
```haxe
/* ofString : Returns the Bytes representation of the given String */
static ofString(s: String): Bytes
```
```haxe
/* getString : Returns the `length`-bytes long string stored at the given position `start`. */
getString(start:Int, length:Int): String
```
```haxe
/* toString : Returns a `String` representation of the bytes */
toString(): String
```
## [hxt.IntMap][intmap] extends [Object][object] implement of [haxe.ds.IntMap][hxintmap]
```haxe
/* no custom variables or methods. */
```
### **Custom constructor**
```js
var foo = new hxt.IntMap({1: "Foo", 2: "Bar"});
foo[3] = "Baz";
```
## [hxt.StringMap][stringmap] extends [Object][object] implement of [haxe.ds.StringMap][hxstringmap]
```haxe
/* no custom variables or methods. */
```
### **Custom constructor**
```js
var foo = new hxt.StringMap({"foo": "Bar", "Baz": "Qux"});
foo.quux = "corge";
```
## [hxt.ObjectMap][objectmap] extends [Array][array] implement of [haxe.ds.ObjectMap][hxobjectmap]
```haxe
/* no custom constructor, variables or methods. */
```
# Experimental types :
## [hxt.Enum][enum] extends [Array][array] implement of [Enum][hxenum]
```js
class Foo extends hxt.Enum {
	static __construct__ = ['Bar', 'Baz'];
	static Bar = new this('Bar', 0);
	static Baz(args) {
		return new this('Baz', 1, args);
	}
}
Foo.resolve();

// or : 
class Foo extends hxt.Enum {
	static get __construct__() {
		return ['Bar', 'Baz'];
	}
	static get Bar() {
		return new this('Bar', 0);
	}
	static Baz(args) {
		return new this('Baz', 1, args);
	}
}
Foo.resolve();

Foo.Bar;       // <Foo> ['Enum1', 0]
Foo.Baz(true); // <Foo> ['Baz', 1, true]
```
## [hxt.Class][class] implement of [Class][hxclass]
```js
class MyClass extends hxt.Class {
   // some stuff here
}
MyClass.resolve();
```

[list]: /source/type/list.js
[bytes]: /source/type/bytes.js
[intmap]: /source/type/map/int.js
[stringmap]: /source/type/map/string.js
[objectmap]: /source/type/map/object.js
[enum]: /source/type/enum.js
[class]: /source/type/class.js

[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[uint8array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array

[hxlist]: https://api.haxe.org/haxe/ds/List.html
[hxbytes]: https://api.haxe.org/haxe/io/Bytes.html
[hxintmap]: https://api.haxe.org/haxe/ds/IntMap.html
[hxstringmap]: https://api.haxe.org/haxe/ds/StringMap.html
[hxobjectmap]: https://api.haxe.org/haxe/ds/ObjectMap.html
[hxenum]: https://haxe.org/manual/types-enum-instance.html
[hxclass]: https://haxe.org/manual/types-class-instance.html