// ============= Test Cases =============
import type { Alike, Expect } from './test-utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}


// ============= Your Code Here =============
type MyReadonly2<TObject, TReadonly extends keyof TObject> = {
 [TKey in keyof TObject as TKey extends TReadonly? never: TKey]: TObject[TKey]
} & {
  readonly [ TKey in keyof TObject as TKey extends TReadonly ? TKey: never ]: TObject[TKey]
}

type Foo = MyReadonly2<Todo1, 'completed'>
//   ^?