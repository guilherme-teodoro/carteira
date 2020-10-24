import * as t from 'io-ts';
import Decimal from 'decimal.js';
export declare const money: t.Type<Decimal, number, unknown>;
export declare const EntryCodec: t.TypeC<{
    type: t.StringC;
    amount: t.Type<Decimal, number, unknown>;
    category: t.StringC;
    description: t.StringC;
}>;
export declare type Entry = t.TypeOf<typeof EntryCodec>;
