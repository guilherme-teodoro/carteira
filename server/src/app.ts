import express from 'express';
import cors from 'cors';
import * as t from 'io-ts';
import { pipe } from 'fp-ts/function'
import { fold } from 'fp-ts/Either'
import { EntryCodec, Entry } from 'shared'
import Decimal from 'decimal.js'

const app = express();
const port = 4000;

app.use(cors())

const response = [
  {
    type: 'credit',
    amount: new Decimal(200.4),
    category: 'salary',
    description: 'olar',
    teste: true
  },
  {
    type: 'debit',
    amount: new Decimal(200),
    category: 'food',
    description: 'a little text'
  }
]

app.get('/', (req, res) => {
  res.json(t.array(EntryCodec).encode(response))
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
