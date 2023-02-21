class Class {
	static resolve() {
		let g = {};
		try {
			g = global;
		} catch (e) {}
		try {
			g = window;
		} catch (e) {}
		if (!g.__class__) {
			g.__class__ = {};
		}
		g.__class__[this.name] = this;
	}
}

module.exports = Class;
