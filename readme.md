> **Note**   
> All or part of the types presented here can be a partial implementation of the
> implemented type.
# Types :
## [hxt.List][01] extends [Array][08] implement of [haxe.ds.List][11]
```haxe
/* no custom constructor, variables or methods. */
```
## [hxt.Bytes][02] extends [Uint8Array][10] implement of [haxe.io.Bytes][12]
```haxe
/* no custom constructor or variables. */
```
### **Custom Methods**
```haxe
/* ofString : Returns the Bytes representation of the given String */
static ofString(s: String): Bytes
```
```haxe
/* getString : Returns  the  `length`-bytes  long  string  stored  at  the given
position `start`. */
getString(start:Int, length:Int): String
```
```haxe
/* toString : Returns a `String` representation of the bytes */
toString(): String
```
## [hxt.IntMap][03] extends [Object][09] implement of [haxe.ds.IntMap][13]
```haxe
/* no custom variables or methods. */
```
### **Custom constructor**
```js
var foo = new hxt.IntMap({1: "Foo", 2: "Bar"});
foo[3] = "Baz";
```
## [hxt.StringMap][04] extends [Object][09] implement of [haxe.ds.StringMap][14]
```haxe
/* no custom variables or methods. */
```
### **Custom constructor**
```js
var foo = new hxt.StringMap({"foo": "Bar", "Baz": "Qux"});
foo.quux = "corge";
```
# Experimental types :
<!--
## [hxt.ObjectMap][05] extends [Array][08] implement of [haxe.ds.ObjectMap][15]
```haxe
/* no custom constructor, variables or methods. */
```
-->
## [hxt.Enum][06] extends [Array][08] implement of [Enum][16]
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
## [hxt.Class][07] implement of [Class][17]
```js
class MyClass extends hxt.Class {
   // some stuff here
}
MyClass.resolve();
```

[01]: /source/type/list.js
[02]: /source/type/bytes.js
[03]: /source/type/map/int.js
[04]: /source/type/map/string.js
[05]: /source/type/map/object.js
[06]: /source/type/enum.js
[07]: /source/type/class.js
[08]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[09]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[10]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array

[11]: https://api.haxe.org/haxe/ds/List.html
[12]: https://api.haxe.org/haxe/io/Bytes.html
[13]: https://api.haxe.org/haxe/ds/IntMap.html
[14]: https://api.haxe.org/haxe/ds/StringMap.html
[15]: https://api.haxe.org/haxe/ds/ObjectMap.html
[16]: https://haxe.org/manual/types-enum-instance.html
[17]: https://haxe.org/manual/types-class-instance.html