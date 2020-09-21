"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFunction = void 0;
class BaseFunction extends Function {
    constructor(fn) {
        var uniqueSymbol = Math.random().toString().slice(2) + Date.now() + Math.random().toString().slice(2);
        super("...args", `return global[Symbol.for('${uniqueSymbol}')].call(global[Symbol.for('${uniqueSymbol}')],...args)`);
        Object.assign(global, { [Symbol.for(uniqueSymbol)]: this });
        this.__call__ = fn;
    }
    bind(thisArg) {
        return new BaseFunction(this.__call__.bind(thisArg));
    }
    call(thisArg, ...args) {
        return this.__call__.call(thisArg, ...args);
    }
    apply(thisArg, args) {
        return this.__call__.apply(thisArg, args);
    }
}
exports.BaseFunction = BaseFunction;
//# sourceMappingURL=index.js.map