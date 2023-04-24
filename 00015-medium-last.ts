// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];

// ============= Your Code Here =============
type Last<T extends any[]> = T extends [T[0], ...infer Rest]
  ? Rest extends [Rest[0], ...infer Aux]
    ? Aux[0] extends undefined
      ? Rest[0]
      : Last<Rest>
    : never
  : never;

type Foo = Last<[3, 2, 1]>;
//    ^?
