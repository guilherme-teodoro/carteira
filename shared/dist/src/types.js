"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var t = require("io-ts");
var decimal_js_1 = require("decimal.js");
var Either_1 = require("fp-ts/Either");
exports.money = new t.Type('Money', function (u) { return u instanceof decimal_js_1.default; }, function (u, c) {
    return Either_1.either.chain(t.number.validate(u, c), function (s) {
        var d = new decimal_js_1.default(s);
        return d ? t.success(d) : t.failure(u, c);
    });
}, function (a) { return a.toNumber(); });
exports.EntryCodec = t.type({
    type: t.string,
    amount: exports.money,
    category: t.string,
    description: t.string
});
//# sourceMappingURL=types.js.map