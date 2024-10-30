import { parse } from '@std/csv'
import { writeText } from 'https://deno.land/x/clippy@v1.0.0/mod.ts'

writeText(
  parse(Deno.readTextFileSync(Deno.args[0]))
    .map((v) => v.slice(1, 3))
    .filter(([amount, date]) => amount && date && amount.startsWith('$'))
    .map(([amount, date]) => ({
      amount: parseFloat(amount.match(/[\d.,]+/)![0].replace(/,/g, '')),
      date: new Date(date),
    }))
    .map(({ amount, date }) =>
      [
        date.toLocaleDateString(),
        amount,
      ].join('\t')
    )
    .join('\n'),
)
