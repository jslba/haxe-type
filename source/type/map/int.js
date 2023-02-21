class IntMap extends Object {
	constructor(obj = {}) {
		super(obj);
		for (let [k, v] of Object.entries(obj)) {
			this[k] = v;
		}
	}
}

module.exports = IntMap;
