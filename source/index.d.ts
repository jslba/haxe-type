export class Enum extends Array {
    static resolve(): void;
}
export class List extends Array {}
export class Bytes extends Uint8Array {
    static alloc(): void;
    static ofString(s: string): Bytes;
    getString(start: number, length: number): string;
}
export class Class {
    static resolve(): void;
}
export class IntMap extends Object {
    constructor(obj?: {});
}
export class StringMap extends Object {
    constructor(obj?: {});
}
