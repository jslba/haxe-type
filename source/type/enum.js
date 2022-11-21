class Enum extends Array {
	static resolve() {
		if(!window.__enum__) {
			window.__enum__ = {};
		}
		window.__enum__[this.name] = this;
	}
	toString() {
		return this[0];
	}
}

module.exports = Enum;