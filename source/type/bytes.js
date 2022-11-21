class Bytes extends Uint8Array {
	static alloc() {}
	static ofString(s) {
		let a = [],
			i = 0;
		while(i < s.length) {
			let c = s.charCodeAt(i++);
			if(55296 <= c && c <= 56319) {
				c = c - 55232 << 10 | s.charCodeAt(i++) & 1023;
			}
			if(c <= 127) {
				a.push(c);
			} else if(c <= 2047) {
				a.push(192 | c >> 6);
				a.push(128 | c & 63);
			} else if(c <= 65535) {
				a.push(224 | c >> 12);
				a.push(128 | c >> 6 & 63);
				a.push(128 | c & 63);
			} else {
				a.push(240 | c >> 18);
				a.push(128 | c >> 12 & 63);
				a.push(128 | c >> 6 & 63);
				a.push(128 | c & 63);
			}
		}
		return new Bytes(a);
	}
	getString(start, length) {
		if(start < 0 || length < 0 || start + length > this.length) {
			throw "Outside bounds";
		}
		let buffer = "",
			i = start,
			end = start + length;
		while(i < end) {
			let code, c1 = this[i++];
			if(c1 < 128) {
				if(c1 == 0) {
					break;
				}
				code = c1;
			} else if(c1 < 224) {
				let c2 = this[i++];
				code = (c1 & 63) << 6 | c2 & 127;
			} else if (c1 < 240) {
				let c2 = this[i++],
					c3 = this[i++];
				code = (c1 & 31) << 12 | (c2 & 127) << 6 | c3 & 127;
			} else {
				let c2, c3, c4;
				// eslint-disable-next-line max-len
				code = (c1 & 15) << 18 | (c2 & 127) << 12 | (c3 & 127) << 6 | c4 & 127;
			}
			buffer += String.fromCodePoint(code);
		}
		return buffer;
	}
	toString() {
		return this.getString(0, this.length);
	}
}

module.exports = Bytes;