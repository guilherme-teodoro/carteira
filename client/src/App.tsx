import React from 'react';
import './App.css';
import axios, { AxiosResponse } from 'axios';
import * as t from 'io-ts';
import { pipe } from 'fp-ts/function'
import { fold } from 'fp-ts/Either'
import { EntryCodec, Entry } from 'shared'

function App() {
  const [ data, setData ] = React.useState<Entry[]>([])

  React.useEffect(() => {
    const fetchData = async () => {
      const result : AxiosResponse<Entry[]> = await axios.get('http://localhost:4000/')
      const onLeft = (s: t.Errors): string => {
        console.log(s)
        return `error(s) found`
      }
      const onRight = (s: Entry[]) => {
        setData(s)
        return 'No errors'
      }
      console.log(pipe(t.array(EntryCodec).decode(result.data), fold(onLeft, onRight)))
    }
    fetchData()
  }, [])

  console.log(data)
  return (
    <div className="App">
      <ul>
        {data.map((item, idx) => {
          return <li key={idx}>
            {item.category} - {item.amount.toString()}
          </li>
        })}
      </ul>
    </div>
  );
}

export default App;
