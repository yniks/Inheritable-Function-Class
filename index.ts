export class BaseFunction extends Function
{
    __call__:Function
    constructor(fn:{(...arg:any[]):any})
    {
        
        var uniqueSymbol=Math.random().toString().slice(2)+Date.now()+Math.random().toString().slice(2)
        super("...args", `return global[Symbol.for('${uniqueSymbol}')].call(global[Symbol.for('${uniqueSymbol}')],...args)`)
        Object.assign(global,{[Symbol.for(uniqueSymbol)]:this})
        this.__call__=fn
    }
    bind(thisArg:Object):Function 
    {
        return new BaseFunction(this.__call__.bind(thisArg))
    }
    call(thisArg:Object,...args:any[])
    {
        return this.__call__.call(thisArg,...args)
    }
    apply(thisArg:Object,args:any[])
    {
        return this.__call__.apply(thisArg,args)
    }
}