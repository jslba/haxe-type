> **Note**   
> All or part of the types presented here can be a partial implementation of the
> implemented type.

# Types :
<h2><a href="/source/type/list.js">hxt.List</a> extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a>
	<small>
		<small>
			<small><abbr title="My own implementation">Moi</abbr> of </small>
			<a href="https://api.haxe.org/haxe/ds/List.html">haxe.ds.List</a>
		</small>
	</small>
</h2>

```haxe
/* no custom constructor, variables or methods. */
```
<h2><a href="/source/type/bytes.js">hxt.Bytes</a> extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array">Uint8Array</a>
	<small>
		<small>
			<small><abbr title="My own implementation">Moi</abbr> of </small>
			<a href="https://api.haxe.org/haxe/io/Bytes.html">haxe.io.Bytes</a>
		</small>
	</small>
</h2>

```haxe
/* no custom constructor or variables. */
```
### **Custom Methods**
```haxe
/* ofString : Returns the Bytes representation of the given String */
static ofString(s: String): Bytes
```
```haxe
/* getString : Returns the `length`-bytes long string stored at the given
   position `start`. */
getString(start:Int, length:Int): String
```
```haxe
/* toString : Returns a `String` representation of the bytes */
toString(): String
```
<h2><a href="/source/type/map/int.js">hxt.IntMap</a> extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</a>
	<small>
		<small>
			<small><abbr title="My own implementation">Moi</abbr> of </small>
			<a href="https://api.haxe.org/haxe/ds/IntMap.html">haxe.ds.IntMap</a>
		</small>
	</small>
</h2>

```haxe
/* no custom variables or methods. */
```
### **Custom constructor**
```js
var foo = new hxt.IntMap({1: "Foo", 2: "Bar"});
foo[3] = "Baz";
```
<h2><a href="/source/type/map/string.js">hxt.StringMap</a> extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</a>
	<small>
		<small>
			<small><abbr title="My own implementation">Moi</abbr> of </small>
			<a href="https://api.haxe.org/haxe/ds/StringMap.html">haxe.ds.StringMap</a>
		</small>
	</small>
</h2>

```haxe
/* no custom variables or methods. */
```
### **Custom constructor**
```js
var foo = new hxt.IntMap({"foo": "Bar", "Baz": "Qux"});
foo.quux = "corge";
```
<h2><a href="/source/type/map/object.js">hxt.ObjectMap</a> extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a>
	<small>
		<small>
			<small><abbr title="My own implementation">Moi</abbr> of </small>
			<a href="https://api.haxe.org/haxe/ds/ObjectMap.html">haxe.ds.ObjectMap</a>
		</small>
	</small>
</h2>

```haxe
/* no custom constructor, variables or methods. */
```
# Experimental types :
<h2><a href="/source/type/enum.js">hxt.Enum</a> extends <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a>
	<small>
		<small>
			<small><abbr title="My own implementation">Moi</abbr> of </small>
			<a href="https://haxe.org/manual/types-enum-instance.html">enum</a>
		</small>
	</small>
</h2>

```js
class Foo extends Enum {
	static __construct__ = ['Bar', 'Baz'];
	static Bar = new this('Bar', 0);
	static Baz(args) {
		return new this('Baz', 1, args);
	}
}
Foo.resolve();

// or : 
class Foo extends Enum {
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
<h2><a href="/source/type/class.js">hxt.Class</a>
	<small>
		<small>
			<small><abbr title="My own implementation">Moi</abbr> of </small>
			<a href="https://haxe.org/manual/types-enum-instance.html">enum</a>
		</small>
	</small>
</h2>

```js
class MyClass extends Class {
   // some stuff here
}
MyClass.resolve();
```