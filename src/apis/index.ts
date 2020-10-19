import scraping_gateway_api from './scraping-gateway'
const MappedFunction = {...scraping_gateway_api} // can be extended more
type ExistKeyType = keyof typeof MappedFunction
//
// ─── CORE ───────────────────────────────────────────────────────────────────────
//
function $call(key:ExistKeyType,...args: any[]){
    if(!MappedFunction.hasOwnProperty(key)) throw new Error(`Calling for event:${key} was failed, found no declaration for that`);
    if(args.length === 0) return  MappedFunction[key]()
    MappedFunction[key].call(null,...args) // can't use apply due to TS-error
    
    
}
// ────────────────────────────────────────────────────────────────────────────────

export {
    $call
}