const Enum = require('./type/enum.js');
const List = require('./type/list.js');
const Bytes = require('./type/bytes.js');
const Class = require('./type/class.js');
const IntMap = require('./type/map/int.js');
const StringMap = require('./type/map/string.js');
/* bad implementation, an ObjectMap is like an Object except that the key is the
   Object (yeah wtf) */
// const ObjectMap = require('./type/map/object.js');

module.exports = {
	Enum,
	List,
	Bytes,
	Class,
	IntMap,
	StringMap,
	// ObjectMap
};
