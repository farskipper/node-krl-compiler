module.exports = function(e, body, loc){
    return e("call", e("id", "ctx.KRLClosure", loc), [
        e("genfn", ["ctx", "getArg"], body, loc)
    ], loc);
};
