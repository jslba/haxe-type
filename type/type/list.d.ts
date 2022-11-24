export = List;

declare class List extends Array<any> {
    constructor(arrayLength?: number);
    constructor(arrayLength: number);
    constructor(...items: any[]);
}