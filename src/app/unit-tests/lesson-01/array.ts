export const setArray = (arr: number[], size: number): number[] => {
  const newArr: number[] = Array(size).fill(0);
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
};
