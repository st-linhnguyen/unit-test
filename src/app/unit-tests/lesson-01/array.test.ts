import { describe, test } from '@jest/globals';
import { setArray, isDuplicated, isConsecutive } from './array';

describe('Test is increasing array', () => {
  const arr = [1, 2, 3, 4, 5];
  const size = 5;

  test('Should return true for an array', () => {
    const result = setArray(arr, size);
    expect(Array.isArray(result)).toBe(true);
  });

  test('Should return false if array is empty', () => {
    const result = setArray(arr, size);
    expect(result.length).toBeGreaterThan(0);
  });

  test('Should return true if all array items is number', () => {
    const result = setArray(arr, size);
    const isNumber = (item) => typeof(item) === 'number';
    expect(result.every(isNumber)).toBe(true);
  });

  test('Should return false if contains duplicated items', () => {
    const result = setArray(arr, size);
    expect(isDuplicated(result)).toBe(false);
  });

  test('Should return true if array items is consecutive numbers', () => {
    const result = setArray(arr, size);
    expect(isConsecutive(result, size)).toBe(true);
  });

  test('Should return false if array is not contains increasing items', () => {
    const result = setArray(arr, size);
    const isIncreasing = result.every((elt, idx, arr) => {
      const prev = arr[idx - 1];
      return !idx || elt === prev || elt === prev + 1;
    });
    expect(isIncreasing).toBe(true);
  });
});
