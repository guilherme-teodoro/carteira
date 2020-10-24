import * as t from 'io-ts'
import Decimal from 'decimal.js'
import { pipe } from 'fp-ts/function'
import { fold, either } from 'fp-ts/Either'

export const money = new t.Type<Decimal, number, unknown>(
  'Money',
  (u): u is Decimal => u instanceof Decimal,
  (u, c) => {
    return either.chain(t.number.validate(u, c), (s) => {
      const d = new Decimal(s)
      return d ? t.success(d) : t.failure(u, c)
    })
  },
  (a) => a.toNumber()
)

export const EntryCodec = t.type({
  type: t.string,
  amount: money,
  category: t.string,
  description: t.string
});

export type Entry = t.TypeOf<typeof EntryCodec>;
