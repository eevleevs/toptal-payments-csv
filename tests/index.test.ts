import { assertEquals } from '@std/assert'
import { format } from '../index.ts'

Deno.test('format', () =>
  assertEquals(
    format(Deno.readTextFileSync(import.meta.dirname + '/payment-history.csv')),
    Deno.readTextFileSync(import.meta.dirname + '/payment-history.tsv'),
  ))
