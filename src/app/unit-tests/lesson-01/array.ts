export const setArray = (arr: number[], size: number): number[] => {
  const newArr: number[] = Array(size).fill(0);
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
};

export const isDuplicated = (arr: number[]) => {
  if (arr.length !== new Set(arr).size) {
    return true;
  }
  return false;
};

export const isConsecutive = (arr: number[], size: number) => {
  for (let i = 1; i < size; i++) {
    if(arr[i] !== arr[i - 1] + 1) {
      return false;
    } else {
      return true;
    }
  }
};
