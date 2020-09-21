/**
 * WARN Potentialy allows memory leakage
 */
export abstract  class BaseFunction extends Function
{
    abstract __call__:Function
    
    constructor()
    {
        
        var uniqueSymbol=Math.random().toString().slice(2)+Date.now()+Math.random().toString().slice(2)
        super("...args", `return global[Symbol.for('${uniqueSymbol}')].call(global[Symbol.for('${uniqueSymbol}')],...args)`)
        Object.assign(global,{[Symbol.for(uniqueSymbol)]:this})
    }
    bind(thisArg:Object):Function 
    {
        return new this.prototype(this.__call__.bind(thisArg))
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