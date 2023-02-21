# [Types][index] implement of [some Types][sometypes]

![npm](https://img.shields.io/npm/v/haxe-type?color=blue&style=flat)
![tests](https://img.shields.io/static/v1?label=tests&message=11%20passed&color=brightgreen&style=flat)
![GitHub](https://img.shields.io/github/license/jslba/haxe-type?style=flat)

An implementation of some  types from haxe. This may  be necessary for exchanges
between JavaScript and Haxe without type loss.   
Warning, all or part of the types presented here can be a partial implementation
of the implemented type because I only implemented the bare minimum I needed.

> **Note**   
> If you are looking  for how to  use it, you  can look at some  examples in the
> [unit tests][unittests].

## [Types.List][01] extends [Array][08] implement of [haxe.ds.List][11]

```hx
/* no custom constructor, variables or methods. */
```

## [Types.Bytes][02] extends [Uint8Array][10] implement of [haxe.io.Bytes][12]

```hx
/* no custom constructor or variables. */
```

### **Methods**

```hx
// returns the Bytes representation of the given String
static ofString(s: String): Bytes
```

```hx
// returns the `length`-bytes long string  stored at the given position `start`.
public getString(start: Int, length: Int): String
```

```hx
// returns a `String` representation of the bytes
public toString(): String
```

## [Types.IntMap][03] extends [Object][09] implement of [haxe.ds.IntMap][13]

```hx
/* no custom variables or methods. */
```

### **Constructor**

```hx
new Types.IntMap(obj: Object)
```

## [Types.StringMap][04] extends [Object][09] implement of [haxe.ds.StringMap][14]

```hx
/* no custom variables or methods. */
```

### **Constructor**

```hx
new Types.StringMap(obj: Object);
```

<!--
## [Types.ObjectMap][05] extends [Array][08] implement of [haxe.ds.ObjectMap][15] (Experimental)
```hx
/* no custom constructor, variables or methods. */
```
-->

## [Types.Enum][06] extends [Array][08] implement of [Enum][16] (Experimental)

```hx
/* no custom constructor or variables. */
```

### **Methods**

```hx
// adds the enumeration to the default  resolver : `global.__enum__` in node and
// `window.__enum__` in the browser.
static resolve(): void
```

```hx
// return the enum name
public toString(): String
```

## [Types.Class][07] implement of [Class][17] (Experimental)

```hx
/* no custom constructor or variables. */
```

### **Methods**

```hx
// adds the  class to  the default  resolver :  `global.__class__`  in node  and
// `window.__class__` in the browser.
static resolve(): void
```

[index]: /source/index.js
[sometypes]: https://haxe.org/manual/types.html
[unittests]: /test/

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
