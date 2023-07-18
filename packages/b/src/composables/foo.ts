import type { Foo } from 'a'

export function useFoo() {
  const foo: Foo = {
    argh: '123',
  };

  return foo;
}
