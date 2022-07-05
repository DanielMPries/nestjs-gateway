/**
 * Provides a case-insensitive map of strings.
 */
export class CaseInsensitiveMap<TKey, TVal> extends Map<TKey, TVal> {
  private keysMap = new Map<TKey, TKey>();

  /**
   * Converts a map to a set of key-value pairs.
   * @param iterable The iterable to convert to a map
   */
  constructor(iterable?: Iterable<[TKey, TVal]>) {
    super();
    if (iterable) {
      for (const [key, value] of iterable) {
        this.set(key, value);
      }
    }
  }

  /**
   * Updates the map with the given key-value pairs.
   * @param key The key to set
   * @param value The value to set
   * @returns The current instance
   */
  set(key: TKey, value: TVal): this {
    const keyLowerCase =
      typeof key === 'string' ? (key.toLowerCase() as any as TKey) : key;
    this.keysMap.set(keyLowerCase, key);

    return super.set(keyLowerCase, value);
  }

  /**
   * Returns the value for the given key.
   * @param key The key to get the value for
   * @returns
   */
  get(key: TKey): TVal | undefined {
    return typeof key === 'string'
      ? super.get(key.toLowerCase() as any as TKey)
      : super.get(key);
  }

  /**
   * Detects if the given key is in the map.
   * @param key The key to check
   * @returns 
   */
  has(key: TKey): boolean {
    return typeof key === 'string'
      ? super.has(key.toLowerCase() as any as TKey)
      : super.has(key);
  }

  /**
   * Removes the given key from the map.
   * @param key The key to remove
   * @returns 
   */
  delete(key: TKey): boolean {
    const keyLowerCase =
      typeof key === 'string' ? (key.toLowerCase() as any as TKey) : key;
    this.keysMap.delete(keyLowerCase);

    return super.delete(keyLowerCase);
  }

  /**
   * Clears the map.
   */
  clear(): void {
    this.keysMap.clear();
    super.clear();
  }

  /**
   * Returns a collection of keys in the map.
   * @returns A collection of keys
   */
  keys(): IterableIterator<TKey> {
    return this.keysMap.values();
  }

  /**
   * Returns a collection of key-value pairs in the map.
   */
  *entries(): IterableIterator<[TKey, TVal]> {
    const keys = this.keysMap.values();
    const values = super.values();
    for (let i = 0; i < super.size; i++) {
      yield [keys.next().value, values.next().value];
    }
  }

  /**
   * Iterates over the map and calls the given callback for each key-value pair.
   * @param callbackfn A callback to execute for each element, taking three arguments:
   */
  forEach(
    callbackfn: (value: TVal, key: TKey, map: Map<TKey, TVal>) => void,
  ): void {
    const keys = this.keysMap.values();
    const values = super.values();
    for (let i = 0; i < super.size; i++) {
      callbackfn(values.next().value, keys.next().value, this);
    }
  }

  /**
   * Returns the collection of key-value pairs in the map.
   * @returns 
   */
  [Symbol.iterator](): IterableIterator<[TKey, TVal]> {
    return this.entries();
  }
}
