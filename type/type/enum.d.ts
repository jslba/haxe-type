export = Enum;

declare class Enum extends Array<any> {
    static resolve(): void;
    constructor(arrayLength?: number);
    constructor(arrayLength: number);
    constructor(...items: any[]);
    toString(): string;
}