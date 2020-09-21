export declare class BaseFunction extends Function {
    __call__: Function;
    constructor(fn: {
        (...arg: any[]): any;
    });
    bind(thisArg: Object): Function;
    call(thisArg: Object, ...args: any[]): any;
    apply(thisArg: Object, args: any[]): any;
}
//# sourceMappingURL=index.d.ts.map