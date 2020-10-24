import * as t from 'io-ts';
import Decimal from 'decimal.js';
import { either } from 'fp-ts/Either';
export var money = new t.Type('Money', function (u) { return u instanceof Decimal; }, function (u, c) {
    return either.chain(t.number.validate(u, c), function (s) {
        var d = new Decimal(s);
        return d ? t.success(d) : t.failure(u, c);
    });
}, function (a) { return a.toNumber(); });
export var EntryCodec = t.type({
    type: t.string,
    amount: money,
    category: t.string,
    description: t.string
});
//# sourceMappingURL=types.js.map