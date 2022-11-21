class Class {
	static resolve() {
		if(!window.__class__) {
			window.__class__ = {};
		}
		window.__class__[this.name] = this;
	}
}

module.exports = Class;