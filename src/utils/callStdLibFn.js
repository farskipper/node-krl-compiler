module.exports = function(e, name, args, loc){
    return e("ycall",
        e("id", "ctx.callKRLstdlib", loc),
        [
            e("string", name, loc)
        ].concat(args),
        loc
    );
};
