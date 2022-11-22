class Enum extends Array {
	static resolve() {
		let g = {};
		try { g = global } catch(e) {}
		try { g = window } catch(e) {}
		if(!g.__enum__) {
			g.__enum__ = {};
		}
		g.__enum__[this.name] = this;
	}
	toString() {
		return this[0];
	}
}

module.exports = Enum;