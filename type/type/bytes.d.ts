export = Bytes;

declare class Bytes extends Uint8Array {
    static alloc(): void;
    static ofString(s: any): Bytes;
    getString(start: any, length: any): string;
}