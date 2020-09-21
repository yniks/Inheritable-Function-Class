/**
 * WARN Potentialy allows memory leakage
 */
export declare abstract class BaseFunction extends Function {
    abstract __call__: Function;
    constructor();
    bind(thisArg: Object): Function;
    call(thisArg: Object, ...args: any[]): any;
    apply(thisArg: Object, args: any[]): any;
}
//# sourceMappingURL=index.d.ts.map